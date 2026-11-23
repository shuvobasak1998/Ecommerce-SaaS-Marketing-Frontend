'use client';

import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import { PLATFORM_FEATURES } from '@/lib/constants';

export default function FeatureGrid({ limit }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Architecture', 'Frontend', 'Logistics', 'Retail', 'Checkout', 'Analytics'];

  const filteredFeatures = PLATFORM_FEATURES.filter((feat) => {
    if (selectedCategory === 'All') return true;
    return feat.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const displayFeatures = limit ? filteredFeatures.slice(0, limit) : filteredFeatures;

  return (
    <div>
      {/* Interactive Category Filter Pills */}
      {!limit && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'glass-panel text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayFeatures.map((feat) => (
          <FeatureCard key={feat.id} feature={feat} />
        ))}
      </div>
    </div>
  );
}
