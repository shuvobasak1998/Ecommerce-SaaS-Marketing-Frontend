'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaRocket, FaPlay, FaCheckCircle, FaShieldAlt, FaBolt, FaArrowRight, FaDatabase, FaSpinner, FaServer } from 'react-icons/fa';
import { DEMO_ADMIN_URL, DEMO_STOREFRONT_URL } from '@/lib/constants';

export default function HeroSection() {
  const [storeSlug, setStoreSlug] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();

  const handleSlugSubmit = (e) => {
    e.preventDefault();
    const clean = storeSlug.trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
    if (clean) {
      router.push(`/register?slug=${clean}`);
    } else {
      router.push('/register');
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-36 overflow-hidden bg-radial-glow">
      {/* Background Grids & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-45 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[140px] rounded-full pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Release Pill with Shimmer Border */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-white/15 text-xs font-semibold text-slate-200 mb-8 shadow-xl shadow-primary/10 hover:border-primary/40 transition-colors animate-fade-in cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-cyan-300 font-bold tracking-wide">Multi-Tenant SaaS 2.0:</span>
          <span className="text-slate-300">Dedicated Isolated MySQL Database Architecture</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-7">
          Scale Your Store with <br className="hidden sm:inline" />
          <span className="text-gradient-primary">Dedicated Database</span> Isolation
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          The all-in-one eCommerce engine pairing lightning-fast <strong>Next.js Storefronts</strong> with a comprehensive <strong>Laravel Admin Panel</strong>. Each merchant gets their own private database instance with zero shared data risk.
        </p>

        {/* Instant Domain Claim Input Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <form onSubmit={handleSlugSubmit} className="glass-panel p-2 rounded-2xl border border-white/20 shadow-2xl shadow-black/60 flex flex-col sm:flex-row gap-2 transition-all focus-within:border-primary/60 focus-within:shadow-primary/20">
            <div className="flex-1 flex items-center px-4 py-3 rounded-xl bg-[#060a14]/85 border border-white/10">
              <span className="text-slate-400 text-sm font-medium mr-1.5 select-none">bdcart.com/</span>
              <input 
                type="text" 
                placeholder="yourstore"
                value={storeSlug}
                onChange={(e) => {
                  setStoreSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''));
                }}
                className="bg-transparent text-white font-bold text-sm outline-none flex-1 lowercase placeholder:text-slate-500 tracking-wide"
                autoComplete="off"
                spellCheck="false"
              />
              {storeSlug && (
                <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Ready
                </span>
              )}
            </div>
            <button 
              type="submit"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary via-indigo-500 to-cyan-500 hover:brightness-110 active:scale-[0.98] text-white font-extrabold text-sm transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2.5 whitespace-nowrap"
            >
              <span>Claim Free Store</span>
              <FaArrowRight className="text-xs" />
            </button>
          </form>
          <div className="text-center text-xs text-slate-400 mt-2.5">
            Instant 30-second setup • No credit card required • 14 days full access
          </div>
        </div>

        {/* Interactive Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a 
            href={DEMO_ADMIN_URL}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-white font-bold text-sm border border-white/15 transition-all flex items-center gap-2.5 shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">
              <FaPlay />
            </div>
            <span>Explore Interactive Admin Demo</span>
          </a>

          <a 
            href={DEMO_STOREFRONT_URL}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white font-bold text-sm border border-white/15 transition-all flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
          >
            <FaBolt className="text-amber-400" />
            <span>Launch Live Storefront</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10 text-xs font-semibold text-slate-400">
          <div className="flex items-center justify-center gap-2 glass-card py-2.5 px-3 rounded-xl">
            <FaCheckCircle className="text-emerald-400" />
            <span>14-Day Free Trial</span>
          </div>
          <div className="flex items-center justify-center gap-2 glass-card py-2.5 px-3 rounded-xl">
            <FaShieldAlt className="text-indigo-400" />
            <span>Zero Card Required</span>
          </div>
          <div className="flex items-center justify-center gap-2 glass-card py-2.5 px-3 rounded-xl">
            <FaDatabase className="text-cyan-400" />
            <span>100% Private Database</span>
          </div>
          <div className="flex items-center justify-center gap-2 glass-card py-2.5 px-3 rounded-xl">
            <FaServer className="text-amber-400" />
            <span>Auto DB Provisioning</span>
          </div>
        </div>

      </div>
    </section>
  );
}
