'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { FaCheck, FaTimes, FaRocket } from 'react-icons/fa';
import { API_BASE_URL } from '@/lib/constants';

export default function PricingTable() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const res = await axios.get(`${API_BASE_URL}/saas/plans`);
        if (res.data && res.data.success) {
          setPlans(res.data.data);
        }
      } catch (err) {
        // Fallback plans if API is cold
        setPlans([
          {
            id: 1,
            name: 'Free Trial',
            slug: 'free-trial',
            description: '14-Day full access to explore platform capabilities.',
            price_monthly: 0,
            price_yearly: 0,
            trial_days: 14,
            product_limit: 50,
            order_limit_monthly: 100,
            storage_limit_mb: 500,
            staff_limit: 2,
            custom_domain_allowed: false,
            features: ['Full Admin Dashboard', 'Next.js Storefront', 'Product & Order Management', 'Basic Analytics', 'Standard Support'],
            is_default: true,
          },
          {
            id: 2,
            name: 'Starter Plan',
            slug: 'starter',
            description: 'Perfect for emerging businesses ready to scale online.',
            price_monthly: 999,
            price_yearly: 9990,
            trial_days: 14,
            product_limit: 500,
            order_limit_monthly: 1000,
            storage_limit_mb: 2048,
            staff_limit: 5,
            custom_domain_allowed: true,
            features: ['All Free Trial Features', 'Custom Domain Connection', 'Up to 500 Products', 'Automated Courier Integration', 'POS System Included', 'WhatsApp Notifications'],
            is_default: false,
          },
          {
            id: 3,
            name: 'Pro Plan',
            slug: 'pro',
            description: 'For high-volume stores needing advanced tools and higher throughput.',
            price_monthly: 2499,
            price_yearly: 24990,
            trial_days: 14,
            product_limit: 5000,
            order_limit_monthly: 10000,
            storage_limit_mb: 10240,
            staff_limit: 20,
            custom_domain_allowed: true,
            features: ['Everything in Starter', 'Up to 5,000 Products', 'Multi-warehouse Inventory', 'Advanced Reports & Audits', 'Theme Customizer', 'Priority 24/7 Support', '0% Platform Fee'],
            is_default: false,
          },
          {
            id: 4,
            name: 'Enterprise Plan',
            slug: 'enterprise',
            description: 'Unlimited scaling, dedicated server resources, and custom integrations.',
            price_monthly: 5999,
            price_yearly: 59990,
            trial_days: 14,
            product_limit: -1,
            order_limit_monthly: -1,
            storage_limit_mb: 51200,
            staff_limit: -1,
            custom_domain_allowed: true,
            features: ['Unlimited Products & Orders', 'Dedicated Account Manager', 'Custom Feature Development', 'Full API & Webhook Access', 'SLA 99.9% Guarantee', 'Dedicated Backup Node'],
            is_default: false,
          }
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchPlans();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3 inline-block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Simple Plans for Every Stage of Growth
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Start with our 14-day free trial on your own isolated database. Upgrade anytime.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 rounded-full bg-[#1e293b] p-1 border border-white/10 transition-colors relative"
            >
              <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-primary to-cyan-400 transition-transform ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-semibold flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-500'}`}>
              <span>Yearly</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => {
            const isPopular = plan.slug === 'pro' || plan.slug === 'starter';
            const price = billingCycle === 'yearly' ? plan.price_yearly : plan.price_monthly;
            
            return (
              <div 
                key={plan.id}
                className={`glass-card rounded-2xl p-7 flex flex-col justify-between relative transition-all ${
                  isPopular 
                    ? 'border-primary/50 shadow-2xl shadow-primary/10 bg-gradient-to-b from-primary/10 to-transparent' 
                    : 'border-white/10'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-cyan-500 text-white text-[10.5px] font-extrabold uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 min-h-[36px] mb-6 leading-relaxed">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-white">
                        {price == 0 ? 'Free' : `৳${number_format(price)}`}
                      </span>
                      {price > 0 && (
                        <span className="text-xs text-slate-400 font-medium">/{billingCycle === 'yearly' ? 'year' : 'month'}</span>
                      )}
                    </div>
                    <div className="text-[11px] text-cyan-400 font-semibold mt-1">
                      {plan.trial_days}-Day Free Access Included
                    </div>
                  </div>

                  {/* Specs */}
                  <ul className="space-y-3 text-xs text-slate-300 mb-8">
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-emerald-400 text-xs shrink-0" />
                      <span>Products: <strong>{plan.product_limit === -1 ? 'Unlimited' : plan.product_limit}</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-emerald-400 text-xs shrink-0" />
                      <span>Monthly Orders: <strong>{plan.order_limit_monthly === -1 ? 'Unlimited' : plan.order_limit_monthly}</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-emerald-400 text-xs shrink-0" />
                      <span>Staff Accounts: <strong>{plan.staff_limit === -1 ? 'Unlimited' : plan.staff_limit}</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-emerald-400 text-xs shrink-0" />
                      <span>Storage: <strong>{plan.storage_limit_mb >= 1024 ? (plan.storage_limit_mb/1024) + 'GB' : plan.storage_limit_mb + 'MB'}</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      {plan.custom_domain_allowed ? (
                        <FaCheck className="text-emerald-400 text-xs shrink-0" />
                      ) : (
                        <FaTimes className="text-slate-600 text-xs shrink-0" />
                      )}
                      <span className={plan.custom_domain_allowed ? '' : 'text-slate-500'}>Custom Domain</span>
                    </li>
                  </ul>

                  {/* Feature Highlights */}
                  {Array.isArray(plan.features) && plan.features.length > 0 && (
                    <div className="pt-4 border-t border-white/5 space-y-2 mb-8">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Features Included</div>
                      {plan.features.slice(0, 4).map((f, fIdx) => (
                        <div key={fIdx} className="text-xs text-slate-300 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0"></span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href={`/register?plan=${plan.id}&plan_name=${encodeURIComponent(plan.name)}`}
                  className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-all flex items-center justify-center gap-2 ${
                    isPopular
                      ? 'bg-gradient-to-r from-primary to-cyan-500 text-white shadow-lg shadow-primary/30 hover:opacity-95'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                  }`}
                >
                  <FaRocket className="text-[10px]" />
                  <span>Start 14-Day Free Trial</span>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function number_format(number) {
  return new Intl.NumberFormat('en-IN').format(number);
}
