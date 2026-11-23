import React from 'react';
import { FaStore, FaServer, FaRocket, FaCheck } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Pick Your Store Name',
      desc: 'Claim your custom subdomain (e.g. mystore.bdcart.com) and register in under 30 seconds with no credit card required.',
      icon: FaStore,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      num: '02',
      title: 'Instant Database Provisioning',
      desc: 'Our SaaS automation engine clones a dedicated MySQL database with 115+ tables pre-seeded with themes, languages, and settings.',
      icon: FaServer,
      color: 'from-cyan-400 to-teal-500',
    },
    {
      num: '03',
      title: 'Launch Next.js Storefront',
      desc: 'Log in to your store admin, upload your catalog, connect your bKash/Stripe/Pathao accounts, and start processing orders.',
      icon: FaRocket,
      color: 'from-fuchsia-500 to-primary',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3 inline-block">
            Seamless Merchant Onboarding
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
            How BDCart SaaS Works
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From zero to an enterprise-grade isolated store in three automated steps.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="glass-card rounded-2xl p-8 relative flex flex-col justify-between group">
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${s.color} flex items-center justify-center text-white text-2xl shadow-xl shadow-indigo-500/20`}>
                    <Icon />
                  </div>
                  <span className="text-3xl font-black text-slate-700 group-hover:text-slate-500 transition-colors font-mono">
                    {s.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <FaCheck className="text-[10px]" /> Automated & Ready to Scale
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
