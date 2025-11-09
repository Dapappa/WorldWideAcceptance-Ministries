'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BibleVerse {
  text: string
  reference: string
}

const bibleVerses: BibleVerse[] = [
  { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", reference: "Jeremiah 29:11" },
  { text: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
  { text: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
  { text: "Be still and know that I am God.", reference: "Psalm 46:10" },
  { text: "The Lord is my shepherd, I lack nothing.", reference: "Psalm 23:1" },
  { text: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
  { text: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16" },
  { text: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
  { text: "Come to me, all you who are weary and burdened, and I will give you rest.", reference: "Matthew 11:28" },
  { text: "And we know that in all things God works for the good of those who love him.", reference: "Romans 8:28" },
  { text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", reference: "Philippians 4:6" },
  { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
  { text: "For where two or three gather in my name, there am I with them.", reference: "Matthew 18:20" },
  { text: "Let everything that has breath praise the Lord.", reference: "Psalm 150:6" },
  { text: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
]

export default function BibleVerseOverlay() {
  const [currentVerse, setCurrentVerse] = useState<BibleVerse | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show first verse after initial delay (longer delay to not distract from initial page load)
    const initialDelay = setTimeout(() => {
      const randomVerse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)]
      setCurrentVerse(randomVerse)
      setIsVisible(true)
    }, 5000) // Wait 5 seconds before first verse

    return () => clearTimeout(initialDelay)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Hide verse after 7 seconds (shorter display time to be less distracting)
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 7000)

    // Show next verse after 20 seconds (13 seconds after hiding - longer gap)
    const nextVerseTimer = setTimeout(() => {
      const randomVerse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)]
      setCurrentVerse(randomVerse)
      setIsVisible(true)
    }, 20000)

    return () => {
      clearTimeout(hideTimer)
      clearTimeout(nextVerseTimer)
    }
  }, [isVisible, currentVerse])

  return (
    <AnimatePresence>
      {isVisible && currentVerse && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ 
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] // Custom easing for smooth animation
          }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[9998] pointer-events-none max-w-2xl w-[90%] px-4"
        >
          <motion.div
            initial={{ filter: 'blur(10px)' }}
            animate={{ filter: 'blur(0px)' }}
            exit={{ filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="bg-white/92 backdrop-blur-md rounded-2xl p-5 md:p-7 shadow-xl border border-accent/15 relative overflow-hidden"
          >
            {/* Subtle golden glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-50" />
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full" />
            
            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-primary-dark text-base md:text-lg font-serif italic text-center mb-2 leading-relaxed"
              >
                "{currentVerse.text}"
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-accent text-xs md:text-sm font-semibold text-center"
              >
                — {currentVerse.reference}
              </motion.p>
            </div>

            {/* Subtle shimmer effect */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_200%] opacity-30"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

