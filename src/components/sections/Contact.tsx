'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '@/data/social-links';
import { personalInfo } from '@/data/personal-info';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/Icon';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane, faCheck, faClock } from '@fortawesome/free-solid-svg-icons';



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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="contact" className="section-container relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-500/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-display font-black tracking-tight mb-6 dark:text-white"
          >
            Let's Build <span className="gradient-text">Together</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto"
          >
            Have a project in mind? Reach out and let's start a conversation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Left Side: Large Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="glass-card p-8 md:p-12 rounded-[2.5rem]">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-black text-dark-400 ml-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-dark-50 dark:bg-dark-900 border-none focus:ring-2 focus:ring-primary-500/20 text-dark-900 dark:text-white transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-black text-dark-400 ml-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-dark-50 dark:bg-dark-900 border-none focus:ring-2 focus:ring-primary-500/20 text-dark-900 dark:text-white transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-black text-dark-400 ml-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell me about your vision..."
                    className="w-full px-6 py-4 rounded-2xl bg-dark-50 dark:bg-dark-900 border-none focus:ring-2 focus:ring-primary-500/20 text-dark-900 dark:text-white transition-all outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="premium-button w-full flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  <Icon icon={isSubmitting ? faClock : faPaperPlane} className="w-5 h-5 text-white" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>

                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "p-4 rounded-2xl text-sm font-bold text-center",
                      submitStatus === 'success' ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                    )}
                  >
                    {submitStatus === 'success'
                      ? "Message received! I'll get back to you shortly."
                      : "Something went wrong. Please try emailing me directly."}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right Side: Info Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            {/* Quick Contact Card */}
            <div className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-primary-500/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-black dark:text-white mb-8">Contact Info</h3>

              <div className="space-y-6">
                {[
                  { icon: faEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: faPhone, label: 'WhatsApp', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: faMapMarkerAlt, label: 'Location', value: personalInfo.location, href: '#' },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                      <Icon icon={item.icon} className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest font-black text-dark-400 leading-none">{item.label}</div>
                      <div className="text-sm font-bold dark:text-dark-200 mt-1">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-dark-100 dark:border-dark-800">
                <h4 className="text-[10px] uppercase tracking-widest font-black text-dark-400 mb-6">Social Influence</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-dark-400 hover:bg-dark-900 hover:text-white transition-all duration-500"
                    >
                      <Icon icon={link.icon} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass-card p-8 rounded-[2rem] flex items-center gap-6">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-green-500 animate-ping" />
              </div>
              <div>
                <div className="text-sm font-black dark:text-white">Available for Freelance</div>
                <div className="text-xs text-dark-400 mt-0.5">Currently taking new projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};


export default Contact;