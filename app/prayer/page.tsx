'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Send, CheckCircle, AlertCircle, Sparkles, Cross, BookOpen, Shield, Users, Clock, Star, ArrowRight } from 'lucide-react'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function PrayerPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
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

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please share more details (at least 10 characters)'
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

    try {
      const mailtoLink = `mailto:worldwideacceptanceministry@yahoo.com?subject=Prayer Request from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `Prayer Request\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nPrayer Request:\n${formData.message}`
      )}`
      
      window.location.href = mailtoLink
      
      setTimeout(() => {
        setSubmitStatus('success')
        setIsSubmitting(false)
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' })
          setSubmitStatus('idle')
        }, 5000)
      }, 500)
    } catch (error) {
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light rounded-full blur-3xl"
          />
        </div>
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-accent/30 rounded-full blur-2xl"
                />
                <div className="relative bg-white/20 backdrop-blur-md rounded-full p-6 border-2 border-white/30">
                  <Heart className="w-16 h-16 text-white" />
                </div>
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Need Prayer?
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Submit your prayer requests and we would love to pray for you.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
            >
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Sparkles className="w-4 h-4 inline mr-2" />
                Confidential
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Shield className="w-4 h-4 inline mr-2" />
                Secure
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Users className="w-4 h-4 inline mr-2" />
                Prayer Team
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Prayer Matters Section */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-primary text-4xl md:text-5xl mb-4">The Power of Prayer</h2>
            <p className="text-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Prayer is our direct line to God. It's where we find strength, peace, and divine intervention.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Prayer Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Sparkles className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="heading-secondary text-2xl mb-4">Why We Pray</h3>
                <ul className="text-body space-y-3 text-left">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prayer connects us directly with God</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>It brings peace in times of trouble</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prayer invites God's intervention</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>It strengthens our faith and trust</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* What We Pray For */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-dark to-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-secondary text-2xl mb-4">What We Pray For</h3>
                <ul className="text-body space-y-3 text-left">
                  <li className="flex items-start">
                    <Cross className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Healing and restoration</span>
                  </li>
                  <li className="flex items-start">
                    <Cross className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Guidance and wisdom</span>
                  </li>
                  <li className="flex items-start">
                    <Cross className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Financial breakthrough</span>
                  </li>
                  <li className="flex items-start">
                    <Cross className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Family and relationships</span>
                  </li>
                  <li className="flex items-start">
                    <Cross className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Spiritual growth</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Our Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-light to-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="heading-secondary text-2xl mb-4">Our Commitment</h3>
                <ul className="text-body space-y-3 text-left">
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>We pray for every request</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Your privacy is protected</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>We believe in God's power</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prayer changes everything</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Bible Verse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary-dark to-primary rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
            <div className="relative z-10 text-center">
              <BookOpen className="w-12 h-12 text-accent mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic mb-4 leading-relaxed">
                "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours."
              </blockquote>
              <p className="text-accent font-semibold text-lg">— Mark 11:24</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prayer Request Form Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="inline-block mb-4"
                  >
                    <div className="bg-gradient-to-br from-accent to-accent-light rounded-full p-4 shadow-lg">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  <h2 className="heading-secondary text-3xl md:text-4xl mb-4">Submit Your Prayer Request</h2>
                  <p className="text-body text-lg text-gray-600">
                    Share your prayer needs with us. We're here to intercede on your behalf.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary-dark mb-2">
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

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={8}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 resize-none ${
                        errors.message
                          ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-200 bg-gray-50 focus:border-accent focus:ring-2 focus:ring-accent/20'
                      } focus:outline-none`}
                      placeholder="Share your prayer request here... Be as detailed as you'd like. We're here to pray for you."
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
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg py-4"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Prayer Request Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Prayer Request
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-green-800 font-semibold mb-1">Thank you for your prayer request!</p>
                        <p className="text-green-700 text-sm">
                          Your email client should open shortly. We will pray for you and your needs. God bless you!
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3"
                    >
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-red-800 font-semibold mb-1">Something went wrong</p>
                        <p className="text-red-700 text-sm">
                          Please try again or contact us directly at worldwideacceptanceministry@yahoo.com
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* reCAPTCHA Notice */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 text-center leading-relaxed">
                      This site is protected by reCAPTCHA and the{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        Google Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        Terms of Service
                      </a>{' '}
                      apply.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              You Are Not Alone
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              We believe in the power of prayer and the faithfulness of God. Whatever you're facing, 
              bring it to the Lord in prayer. He hears, He cares, and He answers.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Heart className="w-5 h-5 inline mr-2" />
                We're praying for you
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Sparkles className="w-5 h-5 inline mr-2" />
                God is faithful
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
