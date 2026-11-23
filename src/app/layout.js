import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'BDCart SaaS — Multi-Tenant Next.js & Laravel eCommerce Platform',
  description: 'Launch high-performance online stores with dedicated isolated MySQL databases, Next.js storefronts, and Laravel admin dashboards.',
  keywords: 'eCommerce SaaS, Multi-Tenant eCommerce, Next.js Storefront, Laravel Admin, Bangladesh eCommerce, Isolated Database SaaS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#070b14] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
