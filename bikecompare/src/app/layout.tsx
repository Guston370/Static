import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BikeCompareProvider } from '@/context/BikeCompareContext';
import { BikeComparisonTray } from '@/components/BikeComparisonTray';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'BikeCompare — Compare Indian Motorcycles & Scooters | Static',
    template: '%s | BikeCompare',
  },
  description:
    'Compare Indian motorcycles, scooters, and electric two-wheelers side by side with verified manufacturer specifications, mileage, and ex-showroom prices.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var isDark=t==='dark'||((!t||t==='system')&&prefersDark);if(isDark){document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme','dark');document.documentElement.style.colorScheme='dark';}else{document.documentElement.classList.remove('dark');document.documentElement.setAttribute('data-theme','light');document.documentElement.style.colorScheme='light';}}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <BikeCompareProvider>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
          <BikeComparisonTray />
        </BikeCompareProvider>
      </body>
    </html>
  );
}
