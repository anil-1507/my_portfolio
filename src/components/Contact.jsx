import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const serviceId = "service_oyi4lpd"; // Replace with your EmailJS service ID
    const templateId = "template_rdixiqc"; // Replace with your EmailJS template ID
    const userId = "7alBMPGi_zJ5ZmWiE"; // Replace with your EmailJS user ID

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "anilkumarvagicharla32@gmail.com",
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 contact-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Have a question or want to work together? Drop me a message!</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block text-gray-700">Email</label>
            <input type="email" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border focus:border-purple-500" placeholder="Emailid@gmail.com" /> 
            
            <label className="block text-gray-700">Name</label>
             <input type="text" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border focus:border-purple-500" placeholder="Your name" /> 
            
            <label className="block text-gray-700">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-lg border focus:border-purple-500" placeholder="Your message... Provide your Contact details.."></textarea>
            
            <button type="submit" disabled={isSubmitting} className="inline-flex items-center px-8 py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300">
              {isSubmitting ? 'Sending...' : <>Send Message <Send className="w-5 h-5 ml-2" /></>}
            </button>
            
            {submitStatus === 'success' && <div className="mt-4 p-3 bg-green-50 text-green-600 rounded-lg flex items-center"><CheckCircle className="w-5 h-5 mr-2" />Message sent successfully!</div>}
            {submitStatus === 'error' && <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg flex items-center"><AlertCircle className="w-5 h-5 mr-2" />Failed to send message. Please try again.</div>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
