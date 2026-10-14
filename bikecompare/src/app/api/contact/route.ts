import { NextRequest, NextResponse } from 'next/server';

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  websiteHoneypot?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactRequestBody = await req.json();
    const { name, email, subject, category, message, websiteHoneypot } = body;

    // Spam honeypot detection
    if (websiteHoneypot && websiteHoneypot.trim().length > 0) {
      return NextResponse.json(
        {
          success: true,
          message: 'Your inquiry has been received.',
          ticketId: `BC-SPAM-${Date.now().toString(36).toUpperCase()}`,
        },
        { status: 200 }
      );
    }

    // Validation
    const errors: Record<string, string> = {};

    if (!name || name.trim().length < 2) {
      errors.name = 'Please provide your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!subject || subject.trim().length < 3) {
      errors.subject = 'Please enter a descriptive subject.';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Please provide a detailed message (at least 10 characters).';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          validationErrors: errors,
        },
        { status: 400 }
      );
    }

    const ticketId = `BC-${Date.now().toString(36).toUpperCase()}`;

    console.log(`[BikeCompare Contact] Received inquiry [${ticketId}] from ${email} (${category}): "${subject}"`);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your inquiry has been logged with our two-wheeler editorial and testing desk. We will review the details and get back to you within 24-48 business hours.',
        ticketId,
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[BikeCompare Contact API Error]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected server error occurred while processing your message. Please try again or email us directly at editorial@static-dynamic.in.',
      },
      { status: 500 }
    );
  }
}
