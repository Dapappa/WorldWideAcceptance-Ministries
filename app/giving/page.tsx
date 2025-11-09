'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Lock, Sparkles, Gift, Users, BookOpen, ArrowRight, CheckCircle, CreditCard, Smartphone, Mail, Phone, Clock, TrendingUp } from 'lucide-react'

export default function GivingPage() {
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
                  <Gift className="w-16 h-16 text-white" />
                </div>
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Generous Giving
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Your generous giving helps us continue our mission to spread the Gospel, 
              serve our community, and transform lives through the power of God's Word.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
            >
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Lock className="w-4 h-4 inline mr-2" />
                Secure & Encrypted
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Shield className="w-4 h-4 inline mr-2" />
                Powered by Tithe.ly
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Heart className="w-4 h-4 inline mr-2" />
                Heartfelt Impact
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why We Give Section */}
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
            <h2 className="heading-primary text-4xl md:text-5xl mb-4">Why We Give</h2>
            <p className="text-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Giving is an act of worship and faith. It's a way to honor God and partner with Him in His work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Biblical Foundation */}
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
                  <BookOpen className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="heading-secondary text-2xl mb-4">Biblical Foundation</h3>
                <ul className="text-body space-y-3 text-left">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Honor the Lord with your wealth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cheerful giving is blessed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Store up treasures in heaven</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>God loves a cheerful giver</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Impact of Giving */}
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
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-secondary text-2xl mb-4">Your Impact</h3>
                <ul className="text-body space-y-3 text-left">
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Supporting ministry programs</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Helping those in need</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Spreading the Gospel</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Transforming lives</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Ways to Give */}
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
                  <CreditCard className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="heading-secondary text-2xl mb-4">Easy & Secure</h3>
                <ul className="text-body space-y-3 text-left">
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>One-time or recurring gifts</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Bank account or card</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mobile-friendly</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Secure encryption</span>
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
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
              </blockquote>
              <p className="text-accent font-semibold text-lg">— 2 Corinthians 9:7</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tithe.ly Giving Section */}
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
            className="max-w-4xl mx-auto"
          >
            {/* Main Giving Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="inline-block mb-6"
                  >
                    <div className="bg-gradient-to-br from-accent to-accent-light rounded-full p-4 shadow-lg">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                  <h2 className="heading-secondary text-3xl md:text-4xl mb-4">
                    Give Securely Online
                  </h2>
                  <p className="text-body text-lg text-gray-600 mb-6">
                    Your giving is secure, encrypted, and processed through Tithe.ly, 
                    a trusted platform used by thousands of churches worldwide.
                  </p>
                  
                  {/* Security Badges */}
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                      <Lock className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold text-gray-700">SSL Encrypted</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                      <Shield className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold text-gray-700">PCI Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold text-gray-700">Secure & Trusted</span>
                    </div>
                  </div>
                </div>

                {/* Tithe.ly Integration Area */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-10 border-2 border-gray-200 mb-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif font-bold text-primary-dark mb-2">
                      Make a Donation
                    </h3>
                    <p className="text-gray-600">
                      Choose an amount or enter a custom amount
                    </p>
                  </div>

                  {/* Tithe.ly Button Container */}
                  <div className="space-y-4">
                    {/* Primary Give Button - Replace with actual Tithe.ly embed */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                    >
                      <a
                        href="https://tithe.ly/give?c=YOUR_CHURCH_ID"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-white font-bold py-5 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center text-lg flex items-center justify-center gap-3 group"
                      >
                        <Gift className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        Give Now with Tithe.ly
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>

                    {/* Secondary Button - Recurring Giving */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                    >
                      <a
                        href="https://tithe.ly/give?c=YOUR_CHURCH_ID&recurring=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold py-5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center text-lg flex items-center justify-center gap-3 group"
                      >
                        <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        Set Up Recurring Giving
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  </div>

                  {/* Tithe.ly Branding */}
                  <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-500 mb-2">
                      Powered and secured by
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      <span className="font-bold text-primary-dark">Tithe.ly</span>
                      <span className="text-gray-500">Church Giving</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      Trusted by thousands of churches worldwide
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>One-time or recurring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Credit card or bank account</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Mobile-friendly platform</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-primary text-3xl md:text-4xl mb-4">Other Ways to Give</h2>
            <p className="text-body text-lg text-gray-600 max-w-2xl mx-auto">
              We offer multiple convenient ways for you to give and support the ministry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
                  <h3 className="heading-secondary text-xl mb-3">Email Us</h3>
                  <p className="text-body mb-3">
                    For information about giving or to discuss other giving options:
                  </p>
                  <p className="text-accent font-semibold group-hover:underline transition-colors break-all text-sm">
                    worldwideacceptanceministry@yahoo.com
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <a
                href="tel:+14036814688"
                className="block bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-accent/30 relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-dark to-primary rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-secondary text-xl mb-3">Call Us</h3>
                  <p className="text-body mb-3">
                    Reach out to us during office hours:
                  </p>
                  <p className="text-accent font-semibold text-lg group-hover:underline transition-colors">
                    +1 (403) 681-4688
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Mon to Thurs 9AM - 3PM</span>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
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
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block mb-6"
            >
              <Heart className="w-16 h-16 text-accent" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Thank You for Your Generosity
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Your giving makes a difference. Every gift, no matter the size, helps us fulfill 
              our mission to spread the Gospel and serve our community. We are grateful for 
              your partnership in ministry.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Users className="w-5 h-5 inline mr-2" />
                Together we serve
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Sparkles className="w-5 h-5 inline mr-2" />
                God bless you
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
