'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import confetti from 'canvas-confetti';
import { FaCheckCircle, FaTimesCircle, FaSpinner, FaRocket, FaStore, FaShieldAlt, FaExternalLinkAlt, FaDatabase, FaMagic, FaArrowRight } from 'react-icons/fa';
import { API_BASE_URL } from '@/lib/constants';

export default function RegistrationForm() {
  const searchParams = useSearchParams();
  const initialSlug = searchParams.get('slug') || '';
  const initialPlanId = searchParams.get('plan') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    store_name: '',
    store_slug: initialSlug,
    password: '',
    password_confirmation: '',
    plan_id: initialPlanId,
  });

  const [slugStatus, setSlugStatus] = useState({ checking: false, available: null, message: '' });
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [provisionStep, setProvisionStep] = useState(0); // 0: Idle, 1: Creating, 2: Cloning DB, 3: Success
  const [errorMsg, setErrorMsg] = useState('');
  const [successData, setSuccessData] = useState(null);

  // Fetch plans
  useEffect(() => {
    async function getPlans() {
      try {
        const res = await axios.get(`${API_BASE_URL}/saas/plans`);
        if (res.data?.success) {
          setPlans(res.data.data);
          if (!formData.plan_id && res.data.data.length > 0) {
            const def = res.data.data.find(p => p.is_default) || res.data.data[0];
            setFormData(prev => ({ ...prev, plan_id: def.id }));
          }
        }
      } catch (e) {
        // Silently handle
      }
    }
    getPlans();
  }, []);

  // Real-time Slug Validation (Debounced 250ms for snappy feel)
  useEffect(() => {
    const slug = formData.store_slug.trim().toLowerCase();
    if (!slug || slug.length < 3) {
      setSlugStatus({ checking: false, available: null, message: '' });
      return;
    }

    const timer = setTimeout(async () => {
      setSlugStatus({ checking: true, available: null, message: 'Checking availability...' });
      try {
        const res = await axios.get(`${API_BASE_URL}/saas/check-slug?slug=${slug}`);
        setSlugStatus({
          checking: false,
          available: res.data.available,
          message: res.data.message,
        });
      } catch (err) {
        setSlugStatus({ checking: false, available: true, message: 'Available' });
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [formData.store_slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'store_slug') {
      const clean = value.toLowerCase().replace(/[^a-z0-9-]/g, '');
      setFormData(prev => ({ ...prev, store_slug: clean }));
    } else if (name === 'store_name' && !formData.store_slug) {
      const autoSlug = value.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').slice(0, 25);
      setFormData(prev => ({ ...prev, store_name: value, store_slug: autoSlug }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Quick 1-click test auto-fill for testing speed
  const handleQuickFill = () => {
    const rand = Math.floor(1000 + Math.random() * 9000);
    const testSlug = `store${rand}`;
    setFormData({
      name: 'Rahim Chowdhury',
      email: `merchant${rand}@bdcart.com`,
      phone: '01711223344',
      store_name: `Chowdhury Boutique ${rand}`,
      store_slug: testSlug,
      password: 'password123',
      password_confirmation: 'password123',
      plan_id: plans[0]?.id || 1,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (formData.password !== formData.password_confirmation) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    if (slugStatus.available === false) {
      setErrorMsg('Please select an available store domain name.');
      return;
    }

    setLoading(true);
    setProvisionStep(1);

    const stepTimer = setInterval(() => {
      setProvisionStep(prev => (prev < 2 ? prev + 1 : prev));
    }, 1200);

    try {
      const res = await axios.post(`${API_BASE_URL}/saas/register`, formData);
      clearInterval(stepTimer);

      if (res.data?.success) {
        setProvisionStep(3);
        setSuccessData(res.data.data);
        
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } else {
        setErrorMsg(res.data?.message || 'Registration failed.');
        setProvisionStep(0);
      }
    } catch (err) {
      clearInterval(stepTimer);
      setProvisionStep(0);
      const msg = err.response?.data?.message || err.message || 'Error creating store.';
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  // Success Screen
  if (successData) {
    return (
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-emerald-500/30 text-center max-w-xl mx-auto shadow-2xl animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mx-auto mb-6 shadow-xl shadow-emerald-500/20">
          <FaCheckCircle />
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          Your Store is Live!
        </h3>
        <p className="text-slate-300 text-sm mb-8 leading-relaxed">
          We have created your isolated database and configured your store <strong>{successData.store_name}</strong> with a 14-day free trial.
        </p>

        <div className="bg-[#060a14]/90 p-5 rounded-2xl border border-white/10 text-left text-xs text-slate-300 space-y-3 mb-8">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-slate-500">Store Domain:</span>
            <span className="font-mono text-cyan-400 font-bold">{successData.store_slug}.bdcart.com</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-slate-500">Admin Email:</span>
            <span className="font-semibold text-white">{successData.owner_email}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-slate-500">Trial Valid Until:</span>
            <span className="text-emerald-400 font-bold">{successData.trial_ends_at}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Database Engine:</span>
            <span className="text-indigo-400 font-mono font-semibold">Dedicated Isolated MySQL</span>
          </div>
        </div>

        <a
          href={successData.login_redirect_url || `http://127.0.0.1:8000/login?tenant=${successData.store_slug}`}
          className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary via-indigo-500 to-cyan-500 text-white font-extrabold text-sm shadow-xl shadow-primary/30 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span>Open Store Admin Panel</span>
          <FaExternalLinkAlt className="text-xs" />
        </a>
      </div>
    );
  }

  return (
    <div className="glass-panel p-7 sm:p-10 rounded-3xl border border-white/15 shadow-2xl relative">
      
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-[#060a14]/95 backdrop-blur-md rounded-3xl z-30 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
          <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin mb-6"></div>
          
          <h4 className="text-xl font-bold text-white mb-2">
            {provisionStep === 1 && 'Registering Merchant Profile...'}
            {provisionStep === 2 && 'Cloning Isolated MySQL Database...'}
            {provisionStep === 3 && 'Finalizing Store Themes & Setup...'}
          </h4>
          <p className="text-xs text-slate-400 max-w-sm">
            Automating your dedicated schema, seeding themes, and connecting routing.
          </p>

          <div className="flex items-center gap-3 mt-6 text-xs text-cyan-400 font-mono">
            <FaDatabase />
            <span>Target: bdcart_tenant_{formData.store_slug || 'store'}</span>
          </div>
        </div>
      )}

      {/* Header & Quick Fill button */}
      <div className="flex items-start justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-1.5">
            Start Your 14-Day Free Trial
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Instant setup. No credit card required. Full isolated database access.
          </p>
        </div>

        <button
          type="button"
          onClick={handleQuickFill}
          className="text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-400 flex items-center gap-1.5 transition-colors whitespace-nowrap"
          title="Autofill sample merchant data to test in 1 click"
        >
          <FaMagic className="text-[10px]" />
          <span>Autofill Sample</span>
        </button>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold mb-6 flex items-center gap-2">
          <FaTimesCircle className="shrink-0 text-base" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Store Name & Slug */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Store Brand Name *</label>
            <input 
              type="text" 
              name="store_name"
              placeholder="e.g. Dhaka Artisan Shop"
              value={formData.store_name}
              onChange={handleChange}
              className="w-full bg-[#060a14]/90 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors font-medium"
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">Store Domain Slug *</label>
              {slugStatus.checking && <span className="text-[11px] text-slate-400 flex items-center gap-1"><FaSpinner className="animate-spin text-[10px]" /> Checking...</span>}
              {!slugStatus.checking && slugStatus.available === true && <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-bold"><FaCheckCircle /> Available</span>}
              {!slugStatus.checking && slugStatus.available === false && <span className="text-[11px] text-rose-400 flex items-center gap-1 font-bold"><FaTimesCircle /> Taken</span>}
            </div>
            <div className="flex items-center bg-[#060a14]/90 border border-white/15 rounded-xl px-3.5 py-3 focus-within:border-primary">
              <input 
                type="text" 
                name="store_slug"
                placeholder="dhakaartisan"
                value={formData.store_slug}
                onChange={handleChange}
                className="bg-transparent text-white text-sm outline-none flex-1 lowercase font-mono font-semibold"
                required
              />
              <span className="text-xs text-slate-400 font-mono">.bdcart.com</span>
            </div>
          </div>
        </div>

        {/* Merchant Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Your Full Name *</label>
            <input 
              type="text" 
              name="name"
              placeholder="e.g. Asif Mahmud"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#060a14]/90 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Email Address (Login) *</label>
            <input 
              type="email" 
              name="email"
              placeholder="asif@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#060a14]/90 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors font-medium"
              required
            />
          </div>
        </div>

        {/* Phone & Plan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              placeholder="017xxxxxxxx"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#060a14]/90 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Plan Selected</label>
            <select
              name="plan_id"
              value={formData.plan_id}
              onChange={handleChange}
              className="w-full bg-[#060a14]/90 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors font-medium"
            >
              {plans.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name} {p.price_monthly > 0 ? `(৳${p.price_monthly}/mo)` : '(14-Day Free Trial)'}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Passwords */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Admin Password *</label>
            <input 
              type="password" 
              name="password"
              placeholder="Min 6 characters"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-[#060a14]/90 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Confirm Password *</label>
            <input 
              type="password" 
              name="password_confirmation"
              placeholder="Repeat password"
              value={formData.password_confirmation}
              onChange={handleChange}
              className="w-full bg-[#060a14]/90 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors"
              required
            />
          </div>
        </div>

        <button 
          type="submit"
          disabled={loading || slugStatus.checking}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-indigo-500 to-cyan-500 hover:brightness-110 active:scale-[0.98] text-white font-extrabold text-sm shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-2.5 mt-2"
        >
          <FaRocket />
          <span>Provision My Free Store & Database Now</span>
        </button>

        <div className="text-center text-[11px] text-slate-500 pt-1">
          By registering, you get 14 days of full feature access with your dedicated MySQL schema.
        </div>
      </form>
    </div>
  );
}
