'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaHourglassEnd, FaRocket, FaEnvelope } from 'react-icons/fa';

function TrialExpiredContent() {
  const searchParams = useSearchParams();
  const storeSlug = searchParams.get('store') || '';

  return (
    <div className="pt-36 pb-24 text-center max-w-xl mx-auto px-4">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-3xl mx-auto mb-6 shadow-xl shadow-amber-500/20">
        <FaHourglassEnd />
      </div>

      <h1 className="text-3xl font-extrabold text-white mb-3">
        Free Trial Period Expired
      </h1>

      <p className="text-slate-300 text-sm mb-8 leading-relaxed">
        The 14-day free trial for store <strong className="text-white font-mono">{storeSlug ? `${storeSlug}.bdcart.com` : 'your store'}</strong> has completed. Your data and catalog are safely preserved in your private database.
      </p>

      <div className="glass-panel p-6 rounded-2xl border border-white/10 mb-8 text-left space-y-3 text-xs text-slate-300">
        <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-1">How to Reactivate Your Store</div>
        <div>1. Select a monthly or yearly subscription plan.</div>
        <div>2. Complete checkout via bKash, Nagad, Card, or Stripe.</div>
        <div>3. Instant automated store and storefront reactivation.</div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/pricing"
          className="py-3.5 px-8 rounded-xl bg-gradient-to-r from-primary via-indigo-500 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
        >
          <FaRocket />
          <span>Choose a Subscription Plan</span>
        </Link>
        <Link
          href="/contact"
          className="py-3.5 px-6 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-sm border border-white/15 flex items-center justify-center gap-2"
        >
          <FaEnvelope />
          <span>Contact Support</span>
        </Link>
      </div>
    </div>
  );
}

export default function TrialExpiredPage() {
  return (
    <Suspense fallback={<div className="text-center py-40 text-slate-400">Loading...</div>}>
      <TrialExpiredContent />
    </Suspense>
  );
}
