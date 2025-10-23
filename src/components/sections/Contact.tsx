'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { socialLinks } from '@/data/social-links';
import { personalInfo } from '@/data/personal-info';
import Icon from '@/components/ui/Icon';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane, faUser, faMessage, faCheck, faExclamationTriangle, faClock, faHeart, faTag } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: faPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: faMapMarkerAlt,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const contactStats = [
    { icon: faClock, number: '< 24h', label: 'Response Time', color: 'from-blue-500 to-blue-600' },
    { icon: faHeart, number: '100%', label: 'Client Satisfaction', color: 'from-red-500 to-red-600' },
    { icon: faCheck, number: '5+', label: 'Happy Clients', color: 'from-green-500 to-green-600' },
    { icon: faPaperPlane, number: '50+', label: 'Messages Sent', color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
                  Get In Touch
                </h2>
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 128 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </motion.div>
            
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Ready to work together? Let's discuss your next project and bring your ideas to life
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {contactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon icon={stat.icon} className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold gradient-text flex items-center">
                    <Icon icon={faPaperPlane} className="w-6 h-6 mr-3" />
                    Send Message
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fill out the form below and I'll get back to you as soon as possible
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Icon icon={faUser} className="w-4 h-4 mr-2 inline" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your full name"
                      />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Icon icon={faEnvelope} className="w-4 h-4 mr-2 inline" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>

                    {/* Subject Field */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Icon icon={faTag} className="w-4 h-4 mr-2 inline" />
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="What's this about?"
                      />
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Icon icon={faMessage} className="w-4 h-4 mr-2 inline" />
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-xl font-semibold py-3 px-6 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Icon icon={faPaperPlane} className="w-5 h-5 mr-2" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </motion.div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                      >
                        <Icon icon={faCheck} className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-green-800 dark:text-green-200">
                          Message sent successfully! I'll get back to you soon.
                        </span>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                      >
                        <Icon icon={faExclamationTriangle} className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-red-800 dark:text-red-200">
                          Something went wrong. Please try again later.
                        </span>
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Enhanced Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="block group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                      <div className="flex items-center">
                        <motion.div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center mr-4 group-hover:shadow-lg transition-all duration-300`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon icon={info.icon} className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                            {info.label}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <h3 className="text-xl font-bold gradient-text mb-4">Follow Me</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Connect with me on social media for updates and insights
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all duration-300 shadow-lg group-hover:shadow-xl">
                          <Icon icon={link.icon} className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;