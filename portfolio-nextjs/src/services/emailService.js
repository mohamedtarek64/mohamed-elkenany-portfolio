// Email service
import nodemailer from 'nodemailer';
import { emailConfig } from '../config/api.js';

class EmailService {
  constructor() {
    this.transporter = null;
    this.isConfigured = false;
    this.initialize();
  }

  initialize() {
    if (emailConfig.smtp.host && emailConfig.smtp.auth.user && emailConfig.smtp.auth.pass) {
      this.transporter = nodemailer.createTransporter(emailConfig.smtp);
      this.isConfigured = true;
    }
  }

  async sendEmail(options) {
    if (!this.isConfigured) {
      // Simulate email sending for development
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, simulated: true };
    }

    try {
      const result = await this.transporter.sendMail({
        from: emailConfig.from,
        to: options.to,
        subject: options.subject,
        html: options.html,
        text: options.text,
        attachments: options.attachments
      });

      return { success: true, messageId: result.messageId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async sendContactEmail(data) {
    const template = emailConfig.templates.contact;
    const html = template.html
      .replace('{{name}}', data.name)
      .replace('{{email}}', data.email)
      .replace('{{subject}}', data.subject)
      .replace('{{message}}', data.message);

    return await this.sendEmail({
      to: emailConfig.to,
      subject: template.subject.replace('{{subject}}', data.subject),
      html
    });
  }

  async sendNewsletterEmail(data) {
    const template = emailConfig.templates.newsletter;
    const html = template.html
      .replace('{{email}}', data.email)
      .replace('{{date}}', new Date().toLocaleDateString());

    return await this.sendEmail({
      to: emailConfig.to,
      subject: template.subject,
      html
    });
  }

  async sendWelcomeEmail(email) {
    const html = `
      <h2>Welcome to our newsletter!</h2>
      <p>Thank you for subscribing to our newsletter.</p>
      <p>You'll receive updates about our latest projects and news.</p>
      <hr>
      <p><small>This is an automated message.</small></p>
    `;

    return await this.sendEmail({
      to: email,
      subject: 'Welcome to our newsletter!',
      html
    });
  }
}

export default new EmailService();
