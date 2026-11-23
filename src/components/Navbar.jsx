'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLayerGroup, FaArrowRight, FaBars, FaTimes, FaExternalLinkAlt, FaRocket } from 'react-icons/fa';
import { DEMO_ADMIN_URL, SUPER_ADMIN_URL } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [storeSlugInput, setStoreSlugInput] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (storeSlugInput.trim()) {
      window.location.href = `http://127.0.0.1:8000/login?tenant=${storeSlugInput.trim().toLowerCase()}`;
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#070b14]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-primary to-cyan-400 flex items-center justify-center text-white text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <FaLayerGroup />
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                BDCart <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-400 border border-cyan-500/30">SaaS</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/about" className="hover:text-white transition-colors">Architecture</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <a href={DEMO_ADMIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
              Live Demo <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => setShowLoginModal(true)} 
              className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-all"
            >
              Sign In
            </button>
            <Link 
              href="/register" 
              className="relative group px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary via-indigo-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <FaRocket className="text-xs group-hover:rotate-12 transition-transform" />
              <span>Start 14-Day Free Trial</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2 text-xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-b border-white/10 px-6 py-6 mt-2 space-y-4">
            <Link href="/features" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 font-medium py-2">Features</Link>
            <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 font-medium py-2">Pricing</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 font-medium py-2">Architecture</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 font-medium py-2">Contact</Link>
            <a href={DEMO_ADMIN_URL} target="_blank" rel="noreferrer" className="block text-cyan-400 font-semibold py-2">
              Live Demo Storefront & Admin
            </a>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button 
                onClick={() => { setMobileMenuOpen(false); setShowLoginModal(true); }}
                className="w-full py-2.5 text-center text-sm font-semibold text-slate-300 rounded-lg border border-white/10 bg-white/5"
              >
                Sign In to Store Admin
              </button>
              <Link 
                href="/register" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center rounded-xl bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold text-sm shadow-lg"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Store Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel w-full max-w-md p-6 sm:p-8 rounded-2xl border border-white/15 relative shadow-2xl">
            <button 
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
            >
              <FaTimes />
            </button>

            <h3 className="text-xl font-bold text-white mb-1">Access Your Store Admin</h3>
            <p className="text-sm text-slate-400 mb-6">Enter your store name to jump to your dedicated admin portal.</p>

            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Store Domain</label>
                <div className="flex items-center rounded-xl bg-[#0b1120] border border-white/15 px-3 py-2.5 focus-within:border-primary">
                  <input 
                    type="text" 
                    placeholder="e.g. mystore"
                    value={storeSlugInput}
                    onChange={(e) => setStoreSlugInput(e.target.value)}
                    className="bg-transparent text-white text-sm outline-none flex-1 lowercase"
                    required
                    autoFocus
                  />
                  <span className="text-xs text-slate-400 font-mono">.admin.bdcart.com</span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
              >
                <span>Continue to Login</span>
                <FaArrowRight className="text-xs" />
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <a href={DEMO_ADMIN_URL} className="text-cyan-400 hover:underline">
                Explore Demo Admin
              </a>
              <a href={SUPER_ADMIN_URL} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                Super Admin Login
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
