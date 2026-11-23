import React from 'react';
import CTASection from '@/components/CTASection';
import { FaDatabase, FaServer, FaShieldAlt, FaCodeBranch, FaBolt, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: 'Architecture & Technology | BDCart SaaS',
  description: 'How BDCart achieves ultra-fast speeds and total data privacy using isolated MySQL tenant databases and Next.js.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4 inline-block">
          Technical Architecture
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          The Separate-Database SaaS Advantage
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Why we chose database-level multi-tenancy over shared-table architectures for high-growth merchants.
        </p>
      </section>

      {/* Architecture Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Traditional SaaS Card */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-rose-500/20 bg-rose-950/10">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-3">Traditional Shared-DB Model</div>
            <h3 className="text-xl font-bold text-white mb-4">Single Table with Tenant ID Scoping</h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Every merchant's products, orders, and customer data are stored in the exact same table with a <code>store_id</code> column filter.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2 text-rose-300">✕ High risk of cross-tenant data leaks</li>
              <li className="flex items-center gap-2 text-rose-300">✕ Table locks during high traffic affect all merchants</li>
              <li className="flex items-center gap-2 text-rose-300">✕ Difficult store-specific backup and restore</li>
              <li className="flex items-center gap-2 text-rose-300">✕ Complex schema upgrades impacting all users simultaneously</li>
            </ul>
          </div>

          {/* BDCart Isolated Model Card */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-emerald-500/30 bg-emerald-950/10 shadow-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">BDCart SaaS Architecture</div>
            <h3 className="text-xl font-bold text-white mb-4">Dedicated Cloned Database Per Tenant</h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Every registered store receives its own independent MySQL database (<code>bdcart_tenant_myshop</code>) provisioned in seconds.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2 text-emerald-400">✓ 100% Guaranteed data isolation and privacy</li>
              <li className="flex items-center gap-2 text-emerald-400">✓ Dedicated buffer pool and zero noisy-neighbor locks</li>
              <li className="flex items-center gap-2 text-emerald-400">✓ Instant 1-click single-store backup & export</li>
              <li className="flex items-center gap-2 text-emerald-400">✓ Zero risk of SQL injection cross-tenant exposure</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Tech Stack Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold text-white mb-3">Our Core Technology Stack</h2>
          <p className="text-slate-400 text-sm">Engineered with battle-tested frameworks for scale.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl text-center">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl mx-auto mb-4">
              <FaBolt />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Next.js 15 App Router</h4>
            <p className="text-xs text-slate-400">React 18 SSR/ISR storefront delivering lightning-fast mobile catalog browsing.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-2xl mx-auto mb-4">
              <FaServer />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Laravel 11 Backend</h4>
            <p className="text-xs text-slate-400">Robust REST APIs, dynamic DB routing middleware, and comprehensive admin dashboard.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-2xl mx-auto mb-4">
              <FaDatabase />
            </div>
            <h4 className="text-base font-bold text-white mb-2">MySQL 8.0 Engine</h4>
            <p className="text-xs text-slate-400">Dedicated isolated schemas per store with automated indexing and query optimization.</p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
