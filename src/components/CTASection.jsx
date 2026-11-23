import React from 'react';
import Link from 'next/link';
import { FaRocket, FaPlay, FaShieldAlt } from 'react-icons/fa';
import { DEMO_ADMIN_URL } from '@/lib/constants';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-10 sm:p-16 overflow-hidden border border-white/20 bg-gradient-to-r from-indigo-950/80 via-[#0e1526] to-cyan-950/80 shadow-2xl shadow-primary/20 text-center">
          
          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary/30 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/15 mb-4 inline-block">
              Start in Seconds
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Ready to Launch Your High-Performance Store?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Join hundreds of successful merchants. Get instant access to your own isolated MySQL database with 14 days completely free.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/register"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary via-indigo-500 to-cyan-500 hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-primary/40 transition-all flex items-center gap-2.5 scale-100 hover:scale-105 active:scale-95"
              >
                <FaRocket />
                <span>Start 14-Day Free Trial</span>
              </Link>

              <a
                href={DEMO_ADMIN_URL}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-xl glass-panel hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <FaPlay className="text-xs text-cyan-400" />
                <span>Explore Live Demo First</span>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
              <span>✓ No credit card required</span>
              <span>✓ Instant auto-provisioning</span>
              <span>✓ 100% Private Database</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
