'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { useDebounce } from '@/hooks/useDebounce';
import { Input, Button, Spinner } from '../ui';
import Icon from '../ui/Icon';
import { faCheck, faExclamationTriangle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NewsletterForm: React.FC = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const debouncedEmail = useDebounce(email, 500);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  React.useEffect(() => {
    if (debouncedEmail && !validateEmail(debouncedEmail)) {
      setError(language === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email address');
    } else {
      setError('');
    }
  }, [debouncedEmail, language]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (!validateEmail(email)) {
      setError(language === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      // Log error for debugging (remove in production)
      // console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = validateEmail(email) && email.trim() !== '';

  return (
    <motion.div
      className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-6">
        <Icon icon={faEnvelope} className="w-8 h-8 text-primary mx-auto mb-3" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {language === 'ar' ? 'اشترك في النشرة الإخبارية' : 'Subscribe to Newsletter'}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {language === 'ar' 
            ? 'احصل على آخر التحديثات والمشاريع الجديدة' 
            : 'Get the latest updates and new projects'
          }
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
            className={error ? 'border-gray-500 focus:ring-gray-500' : ''}
          />
          {error && (
            <motion.p
              className="mt-1 text-sm text-gray-600 flex items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Icon icon={faExclamationTriangle} className="w-4 h-4 mr-1" />
              {error}
            </motion.p>
          )}
        </div>

        <motion.div whileHover={{ scale: isFormValid ? 1.02 : 1 }} whileTap={{ scale: isFormValid ? 0.98 : 1 }}>
          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full"
          >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <Spinner size="sm" color="white" className="mr-2" />
              {language === 'ar' ? 'جاري الاشتراك...' : 'Subscribing...'}
            </div>
          ) : (
            language === 'ar' ? 'اشتراك' : 'Subscribe'
          )}
          </Button>
        </motion.div>
      </form>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Icon icon={faCheck} className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
          <span className="text-green-800 dark:text-green-200">
            {language === 'ar' ? 'تم الاشتراك بنجاح!' : 'Successfully subscribed!'}
          </span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          className="mt-4 p-3 bg-gray-100 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Icon icon={faExclamationTriangle} className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
          <span className="text-gray-800 dark:text-gray-200">
            {language === 'ar' ? 'حدث خطأ في الاشتراك. حاول مرة أخرى.' : 'Error subscribing. Please try again.'}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default NewsletterForm;
