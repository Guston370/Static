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
    default: 'Static — but dynamic | Compare Indian Smartphones',
    template: '%s | Static — but dynamic',
  },
  description:
    'Static — but dynamic. Independent Indian smartphone comparison platform with verified manufacturer specifications, real product photography, and transparent category scoring.',
  keywords: [
    'Static mobiles',
    'compare mobiles India',
    'Indian smartphones',
    'smartphone specifications India',
    'phone price in India',
    'phone comparison',
  ],
  authors: [{ name: 'Static' }],
  creator: 'Static',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Static — but dynamic',
    title: 'Static — but dynamic | Compare Indian Smartphones',
    description:
      'Compare Indian smartphones side by side with verified manufacturer specifications and transparent category scoring.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Static — but dynamic',
    description: 'Compare Indian smartphones side by side with verified data.',
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
