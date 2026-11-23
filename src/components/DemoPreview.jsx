'use client';

import React, { useState } from 'react';
import { FaPlay, FaStore, FaChartLine, FaCheckCircle, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import { DEMO_ADMIN_URL, DEMO_STOREFRONT_URL } from '@/lib/constants';

export default function DemoPreview() {
  const [activeTab, setActiveTab] = useState('admin');

  return (
    <section className="py-24 relative overflow-hidden bg-[#05080f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-light px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-3 inline-block">
            Hands-On Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Explore the Live System in Action
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Experience the real Laravel store admin panel and Next.js storefront right now in interactive demo mode.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="glass-panel p-1.5 rounded-2xl flex gap-2 border border-white/10 shadow-2xl">
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'admin' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FaChartLine />
              <span>Store Admin Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('storefront')}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'storefront' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FaStore />
              <span>Next.js Storefront</span>
            </button>
          </div>
        </div>

        {/* Interactive Window Preview Card */}
        <div className="glass-panel rounded-2xl border border-white/15 p-4 sm:p-6 shadow-2xl relative overflow-hidden group">
          {/* Window Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="text-xs text-slate-400 font-mono ml-2">
                {activeTab === 'admin' ? 'demo.admin.bdcart.com' : 'demo.bdcart.com'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Live Demo Sandbox
              </span>
              <a 
                href={activeTab === 'admin' ? DEMO_ADMIN_URL : DEMO_STOREFRONT_URL}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <span>Launch Live Tab</span>
                <FaPlay className="text-[9px]" />
              </a>
            </div>
          </div>

          {/* Window Content Mockup */}
          {activeTab === 'admin' ? (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-[#0b1120] border border-white/5 rounded-xl p-4">
                  <div className="text-xs text-slate-400 mb-1">Today's Sales</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">৳48,500.00</div>
                  <div className="text-[11px] text-emerald-400 mt-1">↑ +18.4% vs yesterday</div>
                </div>
                <div className="bg-[#0b1120] border border-white/5 rounded-xl p-4">
                  <div className="text-xs text-slate-400 mb-1">Total Orders</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">124</div>
                  <div className="text-[11px] text-cyan-400 mt-1">12 Pending dispatch</div>
                </div>
                <div className="bg-[#0b1120] border border-white/5 rounded-xl p-4">
                  <div className="text-xs text-slate-400 mb-1">Active Catalog</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">350 Items</div>
                  <div className="text-[11px] text-purple-400 mt-1">14 Categories</div>
                </div>
                <div className="bg-[#0b1120] border border-white/5 rounded-xl p-4">
                  <div className="text-xs text-slate-400 mb-1">Database Node</div>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400">Isolated</div>
                  <div className="text-[11px] text-slate-400 mt-1">bdcart_tenant_demo</div>
                </div>
              </div>

              {/* Mock Admin Table */}
              <div className="bg-[#0b1120] border border-white/5 rounded-xl p-4 overflow-hidden">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Live Order Stream & Courier Dispatch</div>
                <div className="space-y-2.5 text-xs text-slate-400">
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="font-mono text-slate-200">#ORD-2026-9481</span>
                    <span>Tanvir Ahmed (Dhanmondi, Dhaka)</span>
                    <span className="font-semibold text-white">৳3,200.00 (bKash)</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">Pathao Booked</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="font-mono text-slate-200">#ORD-2026-9480</span>
                    <span>Shamim Reza (Uttara, Dhaka)</span>
                    <span className="font-semibold text-white">৳1,850.00 (COD)</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">Processing</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-mono text-slate-200">#ORD-2026-9479</span>
                    <span>Farzana Akter (Chittagong)</span>
                    <span className="font-semibold text-white">৳5,400.00 (Stripe Card)</span>
                    <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold">Steadfast In-Transit</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-[#0b1120] border border-white/5 rounded-xl p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-2">GiftMela Next.js Storefront Theme</h4>
                <p className="text-sm text-slate-400 max-w-xl mx-auto mb-6">
                  SSR & ISR powered responsive shop theme with sticky category filters, variant selection modals, and 1-step checkout.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                  <div className="bg-[#111827] p-3 rounded-lg border border-white/5">
                    <div className="h-28 rounded bg-slate-800 mb-2.5 flex items-center justify-center text-slate-600 text-xs">Product Image</div>
                    <div className="font-semibold text-xs text-white">Premium Cotton Kurti</div>
                    <div className="text-cyan-400 font-bold text-xs mt-1">৳1,450</div>
                  </div>
                  <div className="bg-[#111827] p-3 rounded-lg border border-white/5">
                    <div className="h-28 rounded bg-slate-800 mb-2.5 flex items-center justify-center text-slate-600 text-xs">Product Image</div>
                    <div className="font-semibold text-xs text-white">Leather Formal Belt</div>
                    <div className="text-cyan-400 font-bold text-xs mt-1">৳850</div>
                  </div>
                  <div className="bg-[#111827] p-3 rounded-lg border border-white/5">
                    <div className="h-28 rounded bg-slate-800 mb-2.5 flex items-center justify-center text-slate-600 text-xs">Product Image</div>
                    <div className="font-semibold text-xs text-white">Ceramic Gift Mug Set</div>
                    <div className="text-cyan-400 font-bold text-xs mt-1">৳620</div>
                  </div>
                  <div className="bg-[#111827] p-3 rounded-lg border border-white/5">
                    <div className="h-28 rounded bg-slate-800 mb-2.5 flex items-center justify-center text-slate-600 text-xs">Product Image</div>
                    <div className="font-semibold text-xs text-white">Bluetooth Smart Speaker</div>
                    <div className="text-cyan-400 font-bold text-xs mt-1">৳2,100</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA overlay bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Want your own store with identical features? Claim your free 14-day trial now.
            </div>
            <a 
              href="/register" 
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-cyan-500 text-white font-bold text-xs shadow-lg"
            >
              Start Free Trial →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
