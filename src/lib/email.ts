import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  console.log('🔧 Email configuration check:');
  console.log('SMTP_HOST:', process.env.SMTP_HOST);
  console.log('SMTP_USER:', process.env.SMTP_USER);
  console.log('SMTP_PASS:', process.env.SMTP_PASS ? '***configured***' : 'NOT SET');
  
  // Check if email is configured
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('❌ Email not configured, simulating email send...');
    // Simulate email sending for development
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, simulated: true };
  }

  console.log('✅ Email configuration found, attempting to send...');

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to,
    subject,
    html,
  };

  try {
    console.log('📧 Sending email to:', to);
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
