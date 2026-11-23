import React, { Suspense } from 'react';
import RegistrationForm from '@/components/RegistrationForm';
import { FaShieldAlt, FaDatabase, FaBolt, FaCheck } from 'react-icons/fa';

export const metadata = {
  title: 'Start 14-Day Free Trial | BDCart SaaS',
  description: 'Create your online store with a dedicated MySQL database in under 30 seconds. No credit card required.',
};

export default function RegisterPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-radial-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Context Column */}
          <div className="lg:col-span-5 space-y-6 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 inline-block">
              14-Day Free Trial
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Create Your Online Store in 30 Seconds
            </h1>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every merchant receives a dedicated MySQL database with 115+ tables pre-seeded with eCommerce settings, payment gateways, and Next.js themes.
            </p>

            <div className="space-y-4 pt-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <FaCheck className="text-xs" />
                </div>
                <div>
                  <strong className="text-white block">Dedicated Isolated Database</strong>
                  <span className="text-xs text-slate-400">100% private database automatically provisioned for your store.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <FaBolt className="text-xs" />
                </div>
                <div>
                  <strong className="text-white block">Next.js 15 Storefront</strong>
                  <span className="text-xs text-slate-400">Sub-second page speeds with integrated bKash and Pathao.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  <FaShieldAlt className="text-xs" />
                </div>
                <div>
                  <strong className="text-white block">Full Laravel Admin Panel</strong>
                  <span className="text-xs text-slate-400">Manage products, variants, POS, and financial reports.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="text-center text-slate-400 py-12">Loading registration form...</div>}>
              <RegistrationForm />
            </Suspense>
          </div>

        </div>

      </div>
    </div>
  );
}
