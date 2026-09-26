import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { buildType, location, area, name, phone, email } = body;

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Agamana Website <noreply@agamanaconstructions.com>',
      to: 'sales@agamana.com',
      subject: `New Estimate Request — ${buildType || 'General'} (${location || 'Location TBD'})`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a2e1a">
          <h2 style="background:#1a3d1a;color:#fff;padding:20px 24px;margin:0;border-radius:8px 8px 0 0">
            New Construction Estimate Request
          </h2>
          <div style="border:1px solid #e0e8e0;border-top:none;padding:24px;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:140px">Building Type</td><td style="padding:8px 0;font-weight:600">${buildType || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Location</td><td style="padding:8px 0;font-weight:600">${location || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Approx. Area</td><td style="padding:8px 0;font-weight:600">${area || '—'}</td></tr>
              <tr><td colspan="2" style="padding:16px 0 8px;border-top:1px solid #e0e8e0;margin-top:8px"></td></tr>
              <tr><td style="padding:8px 0;color:#666">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0;font-weight:600"><a href="tel:${phone}" style="color:#2d6a4f">${phone}</a></td></tr>
              ${email ? `<tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0;font-weight:600"><a href="mailto:${email}" style="color:#2d6a4f">${email}</a></td></tr>` : ''}
            </table>
          </div>
          <p style="color:#999;font-size:12px;margin-top:16px">Submitted via agamanaconstructions.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Estimate email error:', err);
    return NextResponse.json({ error: 'Failed to send.' }, { status: 500 });
  }
}
