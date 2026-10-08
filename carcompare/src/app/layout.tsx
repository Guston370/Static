import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CompareProvider } from '@/context/CompareContext';
import { MobileCompareProvider } from '@/context/MobileCompareContext';
import { ComparisonTray } from '@/components/ComparisonTray';
import { MobileComparisonTray } from '@/components/MobileComparisonTray';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Static — but dynamic | Compare Indian Cars & Mobiles',
    template: '%s | Static — but dynamic',
  },
  description:
    'Static — but dynamic. Transparent multi-category comparison platform for Indian passenger cars and smartphones with verified manufacturer specifications and dynamic scoring.',
  keywords: [
    'Static comparison',
    'Indian cars',
    'Indian smartphones',
    'compare mobiles India',
    'compare cars India',
    'car specifications India',
    'phone specifications',
  ],
  authors: [{ name: 'Static' }],
  creator: 'Static',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Static — but dynamic',
    title: 'Static — but dynamic | Compare Cars & Mobiles',
    description:
      'Compare Indian cars and smartphones side by side with verified specifications and transparent category scoring.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Static — but dynamic',
    description: 'Compare Indian cars and mobiles side by side with verified data.',
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
        <CompareProvider>
          <MobileCompareProvider>
            <Navbar />
            <main>{children}</main>
            <ComparisonTray />
            <MobileComparisonTray />
            <Footer />
          </MobileCompareProvider>
        </CompareProvider>
      </body>
    </html>
  );
}
