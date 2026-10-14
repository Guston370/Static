'use client';

import React, { useState } from 'react';
import { Mail, Clock, ShieldCheck, CheckCircle2, AlertCircle, Send, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  websiteHoneypot: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    category: 'General Inquiry',
    subject: '',
    message: '',
    websiteHoneypot: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [successResult, setSuccessResult] = useState<{ message: string; ticketId: string } | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: ValidationErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (at least 2 characters).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please enter a descriptive subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a detailed message (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessResult({
          message: data.message,
          ticketId: data.ticketId,
        });
        setFormData({
          name: '',
          email: '',
          category: 'General Inquiry',
          subject: '',
          message: '',
          websiteHoneypot: '',
        });
        setErrors({});
      } else {
        setApiError(data.error || 'Failed to submit form. Please check your inputs.');
      }
    } catch {
      setApiError('Unable to connect to the server. Please check your internet connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '3.5rem 0', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.3rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-accent-light)',
              color: 'var(--color-accent)',
              fontSize: '0.82rem',
              fontWeight: 700,
              marginBottom: '1rem',
            }}
          >
            <Mail size={14} /> Two-Wheeler Desk
          </div>
          <h1 className="section-title">Contact BikeCompare</h1>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
            Have a question regarding motorcycle or scooter specifications, noticed an ex-showroom price discrepancy, or wish to suggest a missing two-wheeler? Reach out to us.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
          {/* Left Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
                Editorial Desk
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                BikeCompare tracks verified manufacturer specifications, ARAI mileage figures, real-world highway fuel economy, and ABS configurations across Indian motorcycles, scooters, and electric two-wheelers.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div
                    style={{
                      background: 'var(--color-accent-light)',
                      color: 'var(--color-accent)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.5rem',
                      display: 'flex',
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>
                      Verified Email
                    </div>
                    <a
                      href="mailto:editorial@static-dynamic.in"
                      style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}
                    >
                      editorial@static-dynamic.in
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div
                    style={{
                      background: 'var(--color-accent-light)',
                      color: 'var(--color-accent)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.5rem',
                      display: 'flex',
                    }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>
                      Response Time
                    </div>
                    <div style={{ color: 'var(--color-text-primary)', fontWeight: 500, fontSize: '0.92rem' }}>
                      24–48 Business Hours (IST)
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div
                    style={{
                      background: 'var(--color-accent-light)',
                      color: 'var(--color-accent)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.5rem',
                      display: 'flex',
                    }}
                  >
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>
                      Independent Fact-Checking
                    </div>
                    <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                      We do not accept manufacturer sponsorship to alter mileage testing or comparison recommendations.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: '1.5rem', background: 'var(--color-surface-sunken)' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                Browse Catalog
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                Filter motorcycles and scooters by ex-showroom price and engine displacement.
              </p>
              <Link href="/bikes" className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                Browse Two-Wheelers <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Form */}
          <div className="card" style={{ padding: '2.5rem' }}>
            {successResult ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--color-success-light)',
                    color: 'var(--color-success)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                  Message Received!
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {successResult.message}
                </p>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-surface-inset)',
                    boxShadow: 'var(--shadow-neu-inset)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    marginBottom: '2rem',
                  }}
                >
                  Tracking ID: {successResult.ticketId}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setSuccessResult(null)}
                    className="btn btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                  Send an Inquiry
                </h2>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', marginBottom: '1.75rem' }}>
                  Submit your query or data correction directly to our research desk.
                </p>

                {apiError && (
                  <div
                    role="alert"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-danger-light)',
                      color: 'var(--color-danger)',
                      fontSize: '0.88rem',
                      marginBottom: '1.5rem',
                      border: '1px solid rgba(196, 69, 69, 0.2)',
                    }}
                  >
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <span>{apiError}</span>
                  </div>
                )}

                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="websiteHoneypot">Leave blank</label>
                  <input
                    id="websiteHoneypot"
                    type="text"
                    tabIndex={-1}
                    value={formData.websiteHoneypot}
                    onChange={(e) => setFormData({ ...formData, websiteHoneypot: e.target.value })}
                    autoComplete="off"
                  />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                    Full Name <span style={{ color: 'var(--color-danger)' }}>*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input"
                    placeholder="e.g., Arvind Kumar"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <div id="name-error" role="alert" style={{ color: 'var(--color-danger)', fontSize: '0.78rem', marginTop: '0.3rem' }}>
                      {errors.name}
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                    Email Address <span style={{ color: 'var(--color-danger)' }}>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input"
                    placeholder="arvind@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <div id="email-error" role="alert" style={{ color: 'var(--color-danger)', fontSize: '0.78rem', marginTop: '0.3rem' }}>
                      {errors.email}
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="category" style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                    Enquiry Category
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="input"
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="General Inquiry">General Feedback</option>
                    <option value="Price Correction">Ex-Showroom Price Correction</option>
                    <option value="Spec Correction">Mileage / Engine Specification Correction</option>
                    <option value="Missing Two-Wheeler">Missing Motorcycle or Scooter Model</option>
                    <option value="Partnership">Partnership / Advertising Inquiry</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="subject" style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                    Subject <span style={{ color: 'var(--color-danger)' }}>*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="input"
                    placeholder="Summary of your inquiry"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <div id="subject-error" role="alert" style={{ color: 'var(--color-danger)', fontSize: '0.78rem', marginTop: '0.3rem' }}>
                      {errors.subject}
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                    Message <span style={{ color: 'var(--color-danger)' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input"
                    placeholder="Provide detailed description of your question or correction..."
                    style={{ resize: 'vertical' }}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <div id="message-error" role="alert" style={{ color: 'var(--color-danger)', fontSize: '0.78rem', marginTop: '0.3rem' }}>
                      {errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                  aria-busy={submitting}
                >
                  {submitting ? 'Submitting...' : <><Send size={18} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
