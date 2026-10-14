import type { Metadata } from 'next';
import Link from 'next/link';
import { Bike, Car, Smartphone, ArrowLeft, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found | BikeCompare',
  description: 'The motorcycle, scooter, or comparison page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '65vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '520px', width: '100%' }}>
        <div
          style={{
            width: '80px',
            height: '80px',
            background: 'var(--color-accent-light)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            border: '1px solid var(--color-accent-muted)',
            boxShadow: 'var(--shadow-neu-button)',
          }}
        >
          <Search size={36} color="var(--color-accent)" />
        </div>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'var(--color-text-primary)',
            marginBottom: '0.5rem',
            lineHeight: 1.1,
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: '0.75rem',
          }}
        >
          Two-Wheeler Not Found
        </h2>
        <p
          style={{
            color: 'var(--color-text-secondary)',
            marginBottom: '2rem',
            fontSize: '0.95rem',
            lineHeight: 1.6,
          }}
        >
          The motorcycle, scooter, or comparison route you are looking for doesn&apos;t exist or has moved.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/" className="btn btn-primary">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <Link href="/bikes" className="btn btn-secondary">
            <Bike size={16} />
            Browse Bikes
          </Link>
          <Link href="/cars" className="btn btn-secondary">
            <Car size={16} />
            Cars
          </Link>
          <Link href="/mobiles" className="btn btn-secondary">
            <Smartphone size={16} />
            Mobiles
          </Link>
        </div>
      </div>
    </div>
  );
}
