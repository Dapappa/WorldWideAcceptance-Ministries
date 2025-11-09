'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageSquare, User, Building } from 'lucide-react'
import StructuredData from '@/components/StructuredData'
import { createLocalBusinessSchema } from '@/lib/schema'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission (you can replace this with actual API call)
    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:worldwideacceptanceministry@yahoo.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`
      )}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Set success status
      setTimeout(() => {
        setSubmitStatus('success')
        setIsSubmitting(false)
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          })
          setSubmitStatus('idle')
        }, 3000)
      }, 500)
    } catch (error) {
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const localBusinessSchema = createLocalBusinessSchema()

  return (
    <div className="pt-20 min-h-screen">
      <StructuredData data={localBusinessSchema} />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <MessageSquare className="w-16 h-16 text-accent mx-auto" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              We'd love to hear from you. Reach out to us through any of the following ways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section-padding bg-pattern-warm-divine relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <a
                href="tel:+14036814688"
                className="block bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-accent/30 relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-dark to-primary rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-secondary text-xl mb-3">Phone</h3>
                  <p className="text-body font-semibold text-primary-dark group-hover:text-accent transition-colors">
                    +1 (403) 681-4688
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <a
                href="mailto:worldwideacceptanceministry@yahoo.com"
                className="block bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-accent/30 relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-secondary text-xl mb-3">Email</h3>
                  <p className="text-body font-semibold text-primary-dark group-hover:text-accent transition-colors break-all text-sm">
                    worldwideacceptanceministry@yahoo.com
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Office Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-accent/30 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-secondary text-xl mb-3">Office Hours</h3>
                  <p className="text-body font-semibold">
                    Mon to Thurs<br />
                    <span className="text-accent">9AM - 3PM</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form and Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="heading-secondary text-3xl mb-2 flex items-center gap-3">
                  <MessageSquare className="w-8 h-8 text-accent" />
                  Send Us a Message
                </h2>
                <p className="text-body mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary-dark mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                        errors.name
                          ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-200 bg-gray-50 focus:border-accent focus:ring-2 focus:ring-accent/20'
                      } focus:outline-none`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary-dark mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                        errors.email
                          ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-200 bg-gray-50 focus:border-accent focus:ring-2 focus:ring-accent/20'
                      } focus:outline-none`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Phone Field (Optional) */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary-dark mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all duration-300"
                      placeholder="+1 (403) 123-4567"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-primary-dark mb-2">
                      <Building className="w-4 h-4 inline mr-2" />
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                        errors.subject
                          ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-200 bg-gray-50 focus:border-accent focus:ring-2 focus:ring-accent/20'
                      } focus:outline-none`}
                      placeholder="What is this regarding?"
                    />
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.subject}
                      </motion.p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary-dark mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 resize-none ${
                        errors.message
                          ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-200 bg-gray-50 focus:border-accent focus:ring-2 focus:ring-accent/20'
                      } focus:outline-none`}
                      placeholder="Tell us how we can help you..."
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <p className="text-green-800 text-sm">
                        Your message has been prepared! Your email client should open shortly.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-3"
                    >
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                      <p className="text-red-800 text-sm">
                        Something went wrong. Please try again or contact us directly.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Location and Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Location Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light/5 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-dark to-primary rounded-xl flex items-center justify-center shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="heading-secondary text-3xl">Calgary Location</h2>
                  </div>
                  <div className="space-y-4 mb-6">
                    <p className="text-body text-lg">
                      <span className="font-semibold text-primary-dark">Unit 40, 2333 18 Avenue Northeast</span>
                    </p>
                    <p className="text-body text-lg">
                      Calgary, AB<br />
                      T2E 8T6<br />
                      Canada
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Unit+40,+2333+18+Avenue+Northeast+Calgary,+AB+T2E+8T6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 group"
                  >
                    <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    View Map
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-gray-100 overflow-hidden">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Unit+40,+2333+18+Avenue+Northeast+Calgary,+AB+T2E+8T6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light group cursor-pointer"
                >
                  {/* Map Placeholder with Address */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center z-10">
                    <motion.div
                      initial={{ scale: 0.9 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MapPin className="w-20 h-20 mx-auto mb-4 drop-shadow-lg" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                      Map to Worldwide Acceptance Ministries
                    </h3>
                    <p className="text-lg md:text-xl mb-2 opacity-95">
                      Calgary, AB
                    </p>
                    <p className="text-sm opacity-80 mb-6">
                      Click to view in Google Maps
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30 group-hover:bg-white/30 transition-all">
                      <span className="font-semibold">View Map</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                  
                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
                  </div>
                  
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent group-hover:from-primary-dark/40 transition-all duration-300" />
                </a>
                <div className="p-4 text-center bg-gradient-to-r from-gray-50 to-white">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-primary-dark">Unit 40, 2333 18 Avenue Northeast</span>
                    <br />
                    Calgary, AB T2E 8T6, Canada
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
