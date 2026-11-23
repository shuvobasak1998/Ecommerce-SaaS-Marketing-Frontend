'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', store_name: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-radial-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3 inline-block">
            Support & Enterprise Sales
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
            We're Here to Help You Scale
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Have questions about enterprise plans, custom integrations, or store migrations? Contact our technical team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary-light flex items-center justify-center text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Email Support</div>
                  <div className="text-sm font-bold text-white">support@bdcart.com</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl">
                  <FaPhone />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Merchant Hotline</div>
                  <div className="text-sm font-bold text-white">+880 1700-000000</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Headquarters</div>
                  <div className="text-sm font-bold text-white">Banani, Dhaka, Bangladesh</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl">
              {submitted ? (
                <div className="text-center py-10">
                  <FaCheckCircle className="text-4xl text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-slate-400">Our engineering support team will respond to your email within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#0b1120] border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#0b1120] border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Store Domain (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. mystore"
                      value={form.store_name}
                      onChange={(e) => setForm({ ...form, store_name: e.target.value })}
                      className="w-full bg-[#0b1120] border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we assist you?"
                      className="w-full bg-[#0b1120] border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-cyan-500 text-white font-bold text-sm shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="text-xs" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
