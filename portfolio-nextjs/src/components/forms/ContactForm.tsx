'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { useDebounce } from '@/hooks/useDebounce';
import { Input, Textarea, Button, Spinner } from '../ui';
import { contactSchema } from '@/lib/validations';
import { sendEmail } from '@/lib/email';
import Icon from '../ui/Icon';
import { faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const debouncedFormData = useDebounce(formData, 500);

  const validateForm = React.useCallback(async () => {
    try {
      await contactSchema.parseAsync(debouncedFormData);
      setErrors({});
      return true;
    } catch (error: any) {
      const fieldErrors: Partial<ContactFormData> = {};
      error.errors?.forEach((err: any) => {
        fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }
  }, [debouncedFormData]);

  React.useEffect(() => {
    if (Object.values(debouncedFormData).some(value => typeof value === 'string' && value.trim() !== '')) {
      validateForm();
    }
  }, [debouncedFormData, validateForm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const isValid = await validateForm();
    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      // console.log('📤 Sending contact form data:', formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      // console.log('📥 API response:', result);

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // console.log('✅ Contact form submitted successfully!');
      } else {
        // console.error('❌ Contact form failed:', result.message);
        setSubmitStatus('error');
      }
    } catch (error) {
      // console.error('❌ Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = Object.values(errors).length === 0 && Object.values(formData).every(value => typeof value === 'string' && value.trim() !== '');

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {language === 'ar' ? 'الاسم' : 'Name'}
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
          className={errors.name ? 'border-gray-500 focus:ring-gray-500' : ''}
        />
        {errors.name && (
          <motion.p
            className="mt-1 text-sm text-gray-600 flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Icon icon={faExclamationTriangle} className="w-4 h-4 mr-1" />
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
          className={errors.email ? 'border-gray-500 focus:ring-gray-500' : ''}
        />
        {errors.email && (
          <motion.p
            className="mt-1 text-sm text-gray-600 flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Icon icon={faExclamationTriangle} className="w-4 h-4 mr-1" />
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {language === 'ar' ? 'الموضوع' : 'Subject'}
        </label>
        <Input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder={language === 'ar' ? 'أدخل موضوع الرسالة' : 'Enter message subject'}
          className={errors.subject ? 'border-gray-500 focus:ring-gray-500' : ''}
        />
        {errors.subject && (
          <motion.p
            className="mt-1 text-sm text-gray-600 flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Icon icon={faExclamationTriangle} className="w-4 h-4 mr-1" />
            {errors.subject}
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {language === 'ar' ? 'الرسالة' : 'Message'}
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder={language === 'ar' ? 'أدخل رسالتك' : 'Enter your message'}
          rows={5}
          className={errors.message ? 'border-gray-500 focus:ring-gray-500' : ''}
        />
        {errors.message && (
          <motion.p
            className="mt-1 text-sm text-gray-600 flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Icon icon={faExclamationTriangle} className="w-4 h-4 mr-1" />
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.div whileHover={{ scale: isFormValid ? 1.02 : 1 }} whileTap={{ scale: isFormValid ? 0.98 : 1 }}>
        <Button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className="w-full"
        >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <Spinner size="sm" color="white" className="mr-2" />
            {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
          </div>
        ) : (
          language === 'ar' ? 'إرسال الرسالة' : 'Send Message'
        )}
        </Button>
      </motion.div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Icon icon={faCheck} className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
          <span className="text-green-800 dark:text-green-200">
            {language === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!'}
          </span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          className="p-4 bg-gray-100 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Icon icon={faExclamationTriangle} className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
          <span className="text-gray-800 dark:text-gray-200">
            {language === 'ar' ? 'حدث خطأ في إرسال الرسالة. حاول مرة أخرى.' : 'Error sending message. Please try again.'}
          </span>
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
