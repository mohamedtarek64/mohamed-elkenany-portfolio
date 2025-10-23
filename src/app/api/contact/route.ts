import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/email';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  // console.log('📧 Contact API called');
  
  try {
    const body = await request.json();
    // console.log('📝 Request body:', body);
    
    const validatedData = contactSchema.parse(body);
    // console.log('✅ Data validated successfully');

    const emailResult = await sendEmail({
      to: process.env.CONTACT_EMAIL || 'mohamed20220632@gmail.com',
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
        <hr>
        <p><small>Sent from portfolio contact form</small></p>
      `,
    });

    // console.log('📧 Email result:', emailResult);

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        success: true,
        emailResult 
      },
      { status: 200 }
    );
  } catch (error) {
    // console.error('❌ Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      // console.log('❌ Validation errors:', error.errors);
      return NextResponse.json(
        { 
          message: 'Validation error', 
          errors: error.errors,
          success: false 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'Unknown error',
        success: false 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API is working' },
    { status: 200 }
  );
}
