import React from 'react';
import Link from 'next/link';
import { FaLayerGroup, FaGithub, FaTwitter, FaFacebook, FaLinkedin, FaShieldAlt, FaServer, FaHeart } from 'react-icons/fa';
import { DEMO_ADMIN_URL, SUPER_ADMIN_URL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05080f] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-base shadow-lg shadow-indigo-500/25">
                <FaLayerGroup />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">BDCart SaaS</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The next-generation multi-tenant eCommerce SaaS platform engineered with isolated tenant MySQL databases, Next.js storefronts, and Laravel admin dashboards.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Systems Operational
              </span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/features" className="hover:text-white transition-colors">All Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing & Plans</Link></li>
              <li><a href={DEMO_ADMIN_URL} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">Live Interactive Demo</a></li>
              <li><Link href="/register" className="hover:text-white transition-colors">14-Day Free Trial</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Architecture Overview</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href={SUPER_ADMIN_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Super Admin Portal</a></li>
              <li><Link href="/features#payments" className="hover:text-white transition-colors">Supported Gateways</Link></li>
              <li><Link href="/features#couriers" className="hover:text-white transition-colors">Courier Bridges</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Support & Inquiries</Link></li>
            </ul>
          </div>

          {/* Compliance & Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Security & Trust</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2"><FaShieldAlt className="text-indigo-400" /> Isolated Databases</li>
              <li className="flex items-center gap-2"><FaServer className="text-cyan-400" /> Automated Daily Backups</li>
              <li className="text-xs text-slate-500 pt-2">SSL encrypted transaction endpoints and 99.9% uptime SLA.</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BDCart SaaS Platform. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for modern eCommerce scale with <FaHeart className="text-rose-500 text-[10px]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
