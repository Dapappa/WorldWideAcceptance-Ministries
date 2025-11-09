'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, Send, CheckCircle, AlertCircle } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function TestimoniesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!recaptchaValue) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', { ...formData, recaptchaValue })
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setRecaptchaValue(null)
      recaptchaRef.current?.reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-accent rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border-2 border-accent-light rounded-full" />
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
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <Heart className="w-20 h-20 text-accent mx-auto drop-shadow-lg" />
                <Sparkles className="w-8 h-8 text-accent-light absolute -top-2 -right-2 animate-pulse" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Share Your Testimony
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-4">
              We will have some amazing stories of GOD changing lives, coming very soon!
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We would love to hear your story of how GOD has changed your life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 border-2 border-primary-dark rounded-full" />
          <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-accent rounded-full" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent" />
            <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-primary-light to-transparent" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            >
              {/* Form Header */}
              <div className="bg-gradient-to-r from-primary-dark to-primary text-white p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: 'spring' }}
                >
                  <Send className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h2 className="text-3xl font-serif font-bold mb-2">Leave Your Testimony</h2>
                  <p className="text-gray-200">Your story can inspire others</p>
                </motion.div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-8 md:p-12">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6"
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6"
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                    placeholder="Share your story of how GOD has changed your life..."
                  />
                </motion.div>

                {/* reCAPTCHA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-6 flex justify-center"
                >
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'} // Default test key
                    onChange={(value) => setRecaptchaValue(value)}
                    theme="light"
                  />
                </motion.div>

                {/* Privacy Notice */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mb-6 text-xs text-gray-500 text-center"
                >
                  This site is protected by reCAPTCHA and the{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Google Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Terms of Service
                  </a>{' '}
                  apply.
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col items-center"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting || !recaptchaValue}
                    className={`btn-primary w-full md:w-auto px-12 py-4 text-lg font-semibold flex items-center justify-center space-x-2 ${
                      (!recaptchaValue || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Testimony</span>
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 flex items-center space-x-2 text-green-600 bg-green-50 px-4 py-3 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Thank you! Your testimony has been submitted.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 flex items-center space-x-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-medium">
                        {!recaptchaValue ? 'Please complete the reCAPTCHA verification.' : 'Something went wrong. Please try again.'}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </form>
            </motion.div>

            {/* Decorative Bottom Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center space-x-2 text-gray-600">
                <Heart className="w-5 h-5 text-accent" />
                <span className="text-lg font-serif italic">
                  "For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."
                </span>
                <Heart className="w-5 h-5 text-accent" />
              </div>
              <p className="text-sm text-gray-500 mt-2">— Jeremiah 29:11</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

