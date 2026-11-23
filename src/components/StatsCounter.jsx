import React from 'react';
import { FaStore, FaShoppingBag, FaBolt, FaShieldAlt } from 'react-icons/fa';

export default function StatsCounter() {
  const stats = [
    { label: 'Active Online Stores', value: '140+', icon: FaStore, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { label: 'Orders Processed', value: '85,000+', icon: FaShoppingBag, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { label: 'Avg. Page Load Time', value: '< 0.8s', icon: FaBolt, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { label: 'Isolated DB Uptime SLA', value: '99.9%', icon: FaShieldAlt, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  ];

  return (
    <section className="py-12 border-y border-white/10 bg-[#060911] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-4">
                <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center text-xl mb-3`}>
                  <IconComponent />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
