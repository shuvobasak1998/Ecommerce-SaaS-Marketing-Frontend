import React from 'react';
import HeroSection from '@/components/HeroSection';
import StatsCounter from '@/components/StatsCounter';
import FeatureGrid from '@/components/FeatureGrid';
import HowItWorks from '@/components/HowItWorks';
import DemoPreview from '@/components/DemoPreview';
import PricingTable from '@/components/PricingTable';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Live Stats Counter */}
      <StatsCounter />

      {/* 3. Core Feature Highlights */}
      <section className="py-24 relative overflow-hidden bg-[#070b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3 inline-block">
                Engineered for High-Velocity Retail
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
                Everything You Need to Scale
              </h2>
            </div>
            <Link 
              href="/features" 
              className="text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-2 group transition-colors"
            >
              <span>Explore all 115+ Features</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <FeatureGrid limit={6} />
        </div>
      </section>

      {/* 4. How It Works (3 Steps) */}
      <HowItWorks />

      {/* 5. Live Interactive Demo Preview */}
      <DemoPreview />

      {/* 6. Pricing & Plans Table */}
      <PricingTable />

      {/* 7. Merchant Testimonials */}
      <TestimonialSlider />

      {/* 8. FAQ Accordion */}
      <FAQAccordion />

      {/* 9. Final Call to Action */}
      <CTASection />
    </div>
  );
}
