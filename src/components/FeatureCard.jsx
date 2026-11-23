import React from 'react';
import { 
  FaDatabase, FaBolt, FaChartLine, FaCreditCard, 
  FaTruck, FaCashRegister, FaPalette, FaFileInvoiceDollar, FaBullhorn 
} from 'react-icons/fa';

const iconMap = {
  FaDatabase,
  FaBolt,
  FaChartLine,
  FaCreditCard,
  FaTruckFast: FaTruck,
  FaCashRegister,
  FaPalette,
  FaFileInvoiceDollar,
  FaBullhorn,
};

export default function FeatureCard({ feature }) {
  const IconComponent = iconMap[feature.icon] || FaDatabase;

  return (
    <div className="glass-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>

      <div>
        <div className="flex items-center justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-xl shadow-lg`}>
            <IconComponent />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
            {feature.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-primary-light transition-colors">
          {feature.title}
        </h3>

        <p className="text-sm text-slate-400 leading-relaxed">
          {feature.description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-semibold text-cyan-400">
          {feature.stats}
        </span>
        <span className="text-xs text-slate-500 font-medium group-hover:translate-x-1 transition-transform">
          Learn more →
        </span>
      </div>
    </div>
  );
}
