import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialSlider() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3 inline-block">
            Merchant Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Trusted by Bangladesh's Top Brands
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how fast-growing eCommerce merchants scale on BDCart SaaS.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-8 flex flex-col justify-between relative">
              <FaQuoteLeft className="text-3xl text-primary/20 mb-4" />
              
              <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-11 h-11 rounded-full object-cover border border-white/10"
                />
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                  <div className="flex text-amber-400 text-xs mt-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
