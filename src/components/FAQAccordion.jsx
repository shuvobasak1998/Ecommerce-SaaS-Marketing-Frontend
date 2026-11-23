'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FAQ_ITEMS } from '@/lib/constants';

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden bg-[#070b14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3 inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have questions about tenant databases, free trials, or custom domains? We've got answers.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base hover:text-cyan-300 transition-colors"
                >
                  <span>{item.q}</span>
                  <FaChevronDown className={`text-xs text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4 animate-fade-in">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
