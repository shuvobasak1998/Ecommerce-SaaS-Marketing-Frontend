export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';
export const SUPER_ADMIN_URL = 'http://127.0.0.1:8000/super-admin';
export const DEMO_ADMIN_URL = 'http://127.0.0.1:8000/login?tenant=demo';
export const DEMO_STOREFRONT_URL = 'http://localhost:3000?tenant=demo';

export const PLATFORM_FEATURES = [
  {
    id: 'multi-db',
    title: 'Isolated Tenant Databases',
    category: 'Architecture',
    icon: 'FaDatabase',
    color: 'from-blue-500 to-indigo-600',
    description: 'Every store operates on its own dedicated MySQL database. 100% data privacy, automated backups, and zero chance of cross-tenant leakage.',
    stats: '100% Data Isolation',
  },
  {
    id: 'nextjs-storefront',
    title: 'Ultra-Fast Next.js Storefront',
    category: 'Frontend',
    icon: 'FaBolt',
    color: 'from-cyan-400 to-blue-600',
    description: 'Pre-rendered SSR & ISR store themes loaded in sub-second times with mobile-first UI, rich search, and frictionless one-page checkout.',
    stats: '<0.8s Page Load',
  },
  {
    id: 'admin-panel',
    title: 'Comprehensive Laravel Admin',
    category: 'Management',
    icon: 'FaChartLine',
    color: 'from-purple-500 to-indigo-600',
    description: 'Complete dashboard for orders, product variants, SKU management, dynamic inventory tracking, customer CRM, and staff permissions.',
    stats: '115+ Core Features',
  },
  {
    id: 'payments',
    title: 'Multi-Gateway Payment Suite',
    category: 'Checkout',
    icon: 'FaCreditCard',
    color: 'from-emerald-400 to-teal-600',
    description: 'Out-of-the-box local and international gateways: bKash, Nagad, SSLCommerz, Aamarpay, Shurjopay, Stripe, and PayPal.',
    stats: '7+ Gateways Ready',
  },
  {
    id: 'courier',
    title: 'Automated Courier Shipping',
    category: 'Logistics',
    icon: 'FaTruckFast',
    color: 'from-amber-400 to-orange-500',
    description: 'Direct 1-click booking with Pathao, Steadfast, and RedX. Real-time consignment tracking and automated COD status sync.',
    stats: 'Pathao & Steadfast Ready',
  },
  {
    id: 'pos-system',
    title: 'Omnichannel POS System',
    category: 'Retail',
    icon: 'FaCashRegister',
    color: 'from-rose-500 to-pink-600',
    description: 'Point-of-sale system with barcode scanner integration, offline order sync, thermal receipt printing, and shared inventory.',
    stats: 'Online + In-Store Sync',
  },
  {
    id: 'theme-engine',
    title: 'Visual Theme Customizer',
    category: 'Design',
    icon: 'FaPalette',
    color: 'from-fuchsia-500 to-purple-600',
    description: 'Live color palettes, customizable banner sliders, promo sections, and layout presets without writing a single line of code.',
    stats: 'Live Realtime Preview',
  },
  {
    id: 'reports',
    title: 'Financial & Sales Auditing',
    category: 'Analytics',
    icon: 'FaFileInvoiceDollar',
    color: 'from-indigo-500 to-cyan-500',
    description: 'In-depth profit & loss reports, stock ledger, courier reconciliation, sales-by-product, and instant PDF/Excel exports.',
    stats: 'Instant PDF/Excel Export',
  },
  {
    id: 'marketing',
    title: 'Growth & Loyalty Engine',
    category: 'Marketing',
    icon: 'FaBullhorn',
    color: 'from-amber-500 to-red-500',
    description: 'Tiered coupon codes, flash sale countdowns, customer club points rewards, and targeted newsletter broadcasts.',
    stats: 'Conversion Boosters',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Create Your Store in 30 Seconds',
    description: 'Choose your unique store name and sign up with your email. No credit card required.',
    icon: 'FaStore',
  },
  {
    step: '02',
    title: 'Automatic Database Provisioning',
    description: 'Our SaaS engine instantly clones an isolated database pre-loaded with themes, settings, and payment bridges.',
    icon: 'FaServer',
  },
  {
    step: '03',
    title: 'Customize, Add Products & Sell',
    description: 'Upload your catalog, configure your courier & payment gateway, and start receiving orders instantly.',
    icon: 'FaRocket',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Rafiqul Islam',
    role: 'Founder, Urban Attire BD',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote: 'Moving from a slow Shopify setup to BDCart cut our page load time by 70%. The built-in Pathao and SSLCommerz integration saved us weeks of custom engineering.',
    rating: 5,
  },
  {
    name: 'Nusrat Jahan',
    role: 'Managing Director, CraftMela',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    quote: 'The separate database architecture gave us the confidence to handle over 1,500 orders during Eid flash sales without a single glitch or slowdown.',
    rating: 5,
  },
  {
    name: 'Arif Ahmed',
    role: 'CEO, GadgetZone',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'The POS system syncing directly with our Next.js online storefront allowed us to run 3 physical outlet locations alongside our website effortlessly.',
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    q: 'How does the free trial work?',
    a: 'You get 14 days of full access to all features with your own isolated database. You can explore the Laravel admin panel, configure your storefront, and test orders. No credit card required.',
  },
  {
    q: 'What is an isolated tenant database?',
    a: 'Unlike traditional platforms where all stores share one database table, BDCart creates an individual, private MySQL database for each store. This ensures maximum security, performance isolation, and effortless backups.',
  },
  {
    q: 'Can I connect my own custom domain?',
    a: 'Yes! You get a free subdomain (e.g., yourstore.bdcart.com) and can connect your custom domain (e.g., www.yourstore.com) on paid plans with free automatic SSL.',
  },
  {
    q: 'Which payment methods are supported?',
    a: 'All major Bangladeshi & global gateways are supported: bKash, Nagad, Rocket, SSLCommerz, Aamarpay, Shurjopay, Stripe, PayPal, and Cash on Delivery.',
  },
  {
    q: 'Can I migrate my products from Excel/CSV?',
    a: 'Yes! The admin panel includes a bulk CSV import/export tool for products, variants, images, and categories.',
  },
];
