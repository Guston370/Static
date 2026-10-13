import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileCompareProvider } from '@/context/MobileCompareContext';
import { MobileComparisonTray } from '@/components/MobileComparisonTray';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'PhoneCompare — Compare Indian Smartphones | Static',
    template: '%s | PhoneCompare',
  },
  description:
    'PhoneCompare by Static. Independent Indian smartphone comparison platform with verified manufacturer specifications, real product photography, and transparent category scoring.',
  keywords: [
    'PhoneCompare',
    'Static mobiles',
    'compare mobiles India',
    'Indian smartphones',
    'smartphone specifications India',
    'phone price in India',
    'phone comparison',
  ],
  authors: [{ name: 'PhoneCompare' }],
  creator: 'Static',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'PhoneCompare | Static',
    title: 'PhoneCompare — Compare Indian Smartphones | Static',
    description:
      'Compare Indian smartphones side by side with verified manufacturer specifications and transparent category scoring.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PhoneCompare — Compare Indian Smartphones | Static',
    description: 'Compare Indian smartphones side by side with verified data on PhoneCompare.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={inter.variable} data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <MobileCompareProvider>
          <Navbar />
          <main>{children}</main>
          <MobileComparisonTray />
          <Footer />
        </MobileCompareProvider>
      </body>
    </html>
  );
}
