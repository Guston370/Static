import Link from 'next/link';
import { Car, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '400px' }}>
        <div
          style={{
            width: '72px',
            height: '72px',
            background: 'var(--color-bg)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            border: '1px solid var(--color-border)',
          }}
        >
          <Car size={32} color="var(--color-text-tertiary)" />
        </div>
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'var(--color-text-primary)',
            marginBottom: '0.5rem',
          }}
        >
          404
        </h1>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Page not found</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
          The car or page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link href="/" className="btn btn-primary">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
