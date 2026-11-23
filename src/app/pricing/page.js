import React from 'react';
import PricingTable from '@/components/PricingTable';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Pricing & Plans | BDCart SaaS',
  description: 'Affordable, transparent pricing plans with a 14-day free trial on dedicated isolated databases.',
};

export default function PricingPage() {
  return (
    <div className="pt-20">
      <PricingTable />
      <FAQAccordion />
      <CTASection />
    </div>
  );
}
