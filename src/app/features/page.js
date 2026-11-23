import React from 'react';
import FeatureGrid from '@/components/FeatureGrid';
import CTASection from '@/components/CTASection';
import { FaDatabase, FaBolt, FaChartLine, FaCreditCard, FaTruck, FaCashRegister, FaPalette, FaFileInvoiceDollar, FaBullhorn, FaCheckCircle, FaLock } from 'react-icons/fa';

export const metadata = {
  title: 'Platform Features | BDCart SaaS',
  description: 'Explore the complete suite of eCommerce features: Multi-DB architecture, Next.js storefronts, courier shipping, POS, and financial audits.',
};

export default function FeaturesPage() {
  const deepDives = [
    {
      title: 'Dedicated MySQL Database Isolation',
      desc: 'Each tenant gets an independent database with zero cross-tenant contamination. High-speed query processing without table locking from other merchants.',
      points: [
        'Dedicated connection per store slug',
        'Independent schema migrations and seed configurations',
        'Full GDPR & privacy compliance',
        'Effortless store-level data backups & exports',
      ],
      icon: FaDatabase,
      badge: 'Architecture',
    },
    {
      title: 'Next.js 15 App Router Storefront',
      desc: 'Sub-second response times with Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR).',
      points: [
        'Mobile-first responsive UX with sticky buy buttons',
        'Dynamic multi-variant & SKU product configuration',
        'One-page streamlined checkout with OTP verification',
        'Live search with instant auto-suggestions',
      ],
      icon: FaBolt,
      badge: 'Frontend',
    },
    {
      title: 'Integrated Courier & Shipping Automation',
      desc: 'Automated 1-click booking with Bangladesh’s leading courier networks directly inside the order screen.',
      points: [
        'Pathao & Steadfast automated API consignment creation',
        'Live courier webhook status sync (Delivered, Returned, In-Transit)',
        'Advance shipping fee payment deduction',
        'Custom courier rate cards by division & city',
      ],
      icon: FaTruck,
      badge: 'Logistics',
    },
    {
      title: 'Omnichannel POS (Point of Sale) Engine',
      desc: 'Run physical outlets alongside your online storefront with shared inventory and barcode scanning.',
      points: [
        'Fast barcode lookup with thermal receipt generation',
        'Offline sales caching and automated sync',
        'Dual payment method handling (Cash + Digital)',
        'Cashier staff accountability logs',
      ],
      icon: FaCashRegister,
      badge: 'Retail POS',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4 inline-block">
          Complete Feature Suite
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Engineered for Total Retail Mastery
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          From multi-database infrastructure to one-click courier bookings, BDCart delivers the full stack tools required to build, operate, and scale modern online stores.
        </p>
      </section>

      {/* Deep Dives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-24">
        {deepDives.map((d, idx) => {
          const Icon = d.icon;
          const isReversed = idx % 2 === 1;

          return (
            <div 
              key={idx}
              className={`glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col ${
                isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-10 items-center justify-between shadow-2xl`}
            >
              <div className="flex-1 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-light px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block">
                  {d.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {d.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {d.desc}
                </p>
                <ul className="space-y-2.5 pt-2">
                  {d.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <FaCheckCircle className="text-emerald-400 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full lg:w-96 h-64 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-cyan-950/60 border border-white/10 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden shadow-inner">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-cyan-400 flex items-center justify-center text-white text-3xl shadow-xl shadow-primary/30 mb-4">
                  <Icon />
                </div>
                <div className="font-mono text-xs text-cyan-300 font-bold uppercase tracking-wider">{d.badge} Ready</div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Grid of all features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">All Features at a Glance</h2>
          <p className="text-sm text-slate-400">Everything standard across all store subscriptions.</p>
        </div>
        <FeatureGrid />
      </section>

      <CTASection />
    </div>
  );
}
