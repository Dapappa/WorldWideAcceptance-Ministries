'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, BookOpen, Sparkles, Cross } from 'lucide-react'

const beliefs = [
  { id: 1, title: 'Holy Bible', icon: BookOpen },
  { id: 2, title: 'The Godhead', icon: Sparkles },
  { id: 3, title: 'The Virgin Birth of Jesus Christ', icon: Cross },
  { id: 4, title: 'All men are sinners from birth', icon: BookOpen },
  { id: 5, title: 'Repentance', icon: Sparkles },
  { id: 6, title: 'Justification', icon: Cross },
  { id: 7, title: 'Water baptism', icon: BookOpen },
  { id: 8, title: "The Lord's supper", icon: Sparkles },
  { id: 9, title: 'Salvation', icon: Cross },
  { id: 10, title: 'Holiness', icon: BookOpen },
  { id: 11, title: 'Sanctification', icon: Sparkles },
  { id: 12, title: 'Holy Ghost Baptism', icon: Cross },
  { id: 13, title: 'Healing and Deliverance', icon: BookOpen },
  { id: 14, title: 'Evangelism', icon: Sparkles },
  { id: 15, title: 'Marriage and family life', icon: Cross },
  { id: 16, title: 'The Rapture of the saints', icon: BookOpen },
  { id: 17, title: 'The Resurrection of the dead', icon: Sparkles },
  { id: 18, title: 'The Great tribulation', icon: Cross },
  { id: 19, title: 'Second Coming of Jesus', icon: BookOpen },
  { id: 20, title: "One thousand years of Jesus's Reign", icon: Sparkles },
  { id: 21, title: 'The great white Throne judgment', icon: Cross },
  { id: 22, title: 'The new Heaven and the New Earth', icon: BookOpen },
  { id: 23, title: 'Hell Fire', icon: Sparkles },
]

// Background gradient patterns for visual variety
const backgroundPatterns = [
  'from-primary-dark via-primary to-primary-light',
  'from-accent via-accent-light to-primary-dark',
  'from-primary-light via-accent to-primary-dark',
  'from-primary-dark via-accent-light to-accent',
]

export default function BeliefsSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % beliefs.length)
    }, 4000) // Change slide every 4 seconds
    
    return () => clearInterval(timer)
  }, [isPaused])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + beliefs.length) % beliefs.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % beliefs.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentBelief = beliefs[currentIndex]
  const IconComponent = currentBelief.icon
  const bgPattern = backgroundPatterns[currentIndex % backgroundPatterns.length]

  return (
    <div className="space-y-8">
      <div
        className="relative w-full min-h-[600px] md:min-h-[700px] rounded-3xl overflow-hidden shadow-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 bg-gradient-to-br ${bgPattern}`}
        >
          {/* Animated floating orbs */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -80, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary-light/15 rounded-full blur-3xl"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -50, rotateX: 15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto relative z-20 flex flex-col items-center"
          >
            {/* Icon with animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8 flex justify-center"
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
                  className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                />
                <div className="relative bg-white/20 backdrop-blur-md rounded-full p-6 md:p-8 border-2 border-white/30 shadow-2xl">
                  <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Belief Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-4"
            >
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold border border-white/30">
                Belief {currentBelief.id} of {beliefs.length}
              </span>
            </motion.div>

            {/* Title and Decorative Line Container */}
            <div className="w-full flex flex-col items-center">
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-12 leading-tight drop-shadow-2xl relative z-10"
              >
                {currentBelief.title}
              </motion.h2>

              {/* Decorative line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent max-w-md rounded-full relative z-0"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center px-4 md:px-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 md:p-4 rounded-full transition-all shadow-xl border border-white/30"
            aria-label="Previous belief"
          >
            <ChevronLeft size={24} className="md:w-8 md:h-8" />
          </motion.button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center px-4 md:px-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 md:p-4 rounded-full transition-all shadow-xl border border-white/30"
            aria-label="Next belief"
          >
            <ChevronRight size={24} className="md:w-8 md:h-8" />
          </motion.button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
              className="h-full bg-white/60 rounded-full"
            />
          </div>
        </div>

        {/* Dots Indicator - Moved up */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 max-w-4xl px-4">
          {beliefs.map((belief, index) => (
            <motion.button
              key={belief.id}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentIndex
                  ? 'bg-white w-3 h-3 md:w-4 md:h-4 shadow-lg'
                  : 'bg-white/40 hover:bg-white/60 w-2 h-2 md:w-3 md:h-3'
              }`}
              aria-label={`Go to ${belief.title}`}
            />
          ))}
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </div>
      </div>

      {/* Thumbnail Grid - All Beliefs at a Glance */}
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200">
        <h3 className="text-center text-xl md:text-2xl font-serif font-semibold text-primary-dark mb-6">
          All Our Beliefs
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3">
          {beliefs.map((belief, index) => {
            const Icon = belief.icon
            return (
              <button
                key={belief.id}
                onClick={() => goToSlide(index)}
                className={`group relative aspect-[3/4] rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-4 ring-accent shadow-lg scale-105'
                    : 'hover:scale-105 hover:shadow-md'
                }`}
              >
                {/* Background with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${backgroundPatterns[index % backgroundPatterns.length]} opacity-90`} />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-3 text-white">
                  <Icon className="w-6 h-6 mb-2 opacity-80" />
                  <div className="text-[10px] sm:text-xs font-medium text-center leading-tight line-clamp-3">
                    {belief.title}
                  </div>
                  <div className="absolute top-1 right-1 bg-white/20 backdrop-blur-sm rounded-full w-5 h-5 flex items-center justify-center text-[9px] font-bold">
                    {belief.id}
                  </div>
                </div>

                {/* Active indicator */}
                {index === currentIndex && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
                )}
              </button>
            )
          })}
        </div>
        <p className="text-center text-sm text-gray-600 mt-6">
          Click any belief to view it in the carousel above
        </p>
      </div>
    </div>
  )
}

