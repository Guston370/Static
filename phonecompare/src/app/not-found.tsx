import Link from 'next/link';
import { Smartphone, ArrowLeft, Search, GitCompare } from 'lucide-react';

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
        background: 'var(--color-bg)',
      }}
    >
      <div
        className="card"
        style={{
          maxWidth: '480px',
          width: '100%',
          padding: '2.5rem 2rem',
        }}
      >
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--color-accent-light)',
            color: 'var(--color-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            boxShadow: 'var(--shadow-neu-card)',
            border: '1px solid rgba(53, 106, 230, 0.25)',
          }}
        >
          <Smartphone size={36} strokeWidth={2.2} />
        </div>

        <span
          style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--color-accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          404 &mdash; Page Not Found
        </span>

        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 800,
            marginTop: '0.5rem',
            marginBottom: '0.75rem',
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
          }}
        >
          Lost in Specifications?
        </h1>

        <p
          style={{
            color: 'var(--color-text-secondary)',
            fontSize: '0.95rem',
            lineHeight: 1.6,
            marginBottom: '2rem',
          }}
        >
          The phone model or page you are looking for does not exist in our catalog or may have been moved.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
          }}
        >
          <Link href="/mobiles" className="btn btn-primary">
            <Search size={16} />
            Browse All Phones
          </Link>
          <Link href="/mobiles/compare" className="btn btn-secondary">
            <GitCompare size={16} />
            Compare Phones
          </Link>
          <Link href="/" className="btn btn-ghost">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
