import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    // Google Sheets Web App URL - You need to create a Google Apps Script
    // and deploy it as a web app to get this URL
    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

    if (!GOOGLE_SCRIPT_URL) {
      throw new Error('Google Script URL not configured');
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, timestamp: new Date().toISOString() }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error submitting wishlist:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit wishlist' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Get count from Google Sheets
    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';
    
    if (!GOOGLE_SCRIPT_URL) {
      // Return mock data if not configured
      return NextResponse.json({ count: 0 });
    }

    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=count`);
    const data = await response.json();
    
    return NextResponse.json({ count: data.count || 0 });
  } catch (error) {
    console.error('Error fetching wishlist count:', error);
    return NextResponse.json({ count: 0 });
  }
}
