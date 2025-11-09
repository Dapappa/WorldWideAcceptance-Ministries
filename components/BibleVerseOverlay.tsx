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

interface VersePosition {
  id: number
  verse: BibleVerse
  position: {
    top: string
    left: string
    rotation: number
  }
}

export default function BibleVerseOverlay() {
  const [verses, setVerses] = useState<VersePosition[]>([])

  useEffect(() => {
    // Generate random positions for verses
    const generatePositions = (): VersePosition[] => {
      const positions: VersePosition[] = []
      const numVerses = 8 // Show 8 verses at a time for maximum visibility

      // Get random verses
      const shuffled = [...bibleVerses].sort(() => 0.5 - Math.random())
      const selectedVerses = shuffled.slice(0, numVerses)

      selectedVerses.forEach((verse, index) => {
        // More positions covering the entire screen with better mobile spacing
        const positionsConfig = [
          { top: '12%', left: '3%', rotation: -1.5 },
          { top: '18%', left: '68%', rotation: 2 },
          { top: '28%', left: '35%', rotation: -0.5 },
          { top: '38%', left: '78%', rotation: 1.5 },
          { top: '48%', left: '8%', rotation: 1 },
          { top: '58%', left: '62%', rotation: -2 },
          { top: '68%', left: '25%', rotation: 0.5 },
          { top: '78%', left: '72%', rotation: -1 },
          { top: '22%', left: '20%', rotation: 2 },
          { top: '43%', left: '45%', rotation: -0.5 },
          { top: '63%', left: '12%', rotation: 1 },
          { top: '83%', left: '50%', rotation: -1.5 },
        ]

        const pos = positionsConfig[index % positionsConfig.length]
        positions.push({
          id: Date.now() + index,
          verse,
          position: pos,
        })
      })

      return positions
    }

    // Initial verses immediately
    setVerses(generatePositions())

    // Rotate verses more frequently
    const rotationInterval = setInterval(() => {
      setVerses([]) // Clear first
      setTimeout(() => {
        setVerses(generatePositions())
      }, 300)
    }, 8000) // Change every 8 seconds for more frequent updates

    return () => {
      clearInterval(rotationInterval)
    }
  }, [])

  return (
    <>
      {/* Background verses - fixed position, visible through sections */}
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        <AnimatePresence mode="wait">
          {verses.map((versePos) => (
            <motion.div
              key={versePos.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 0.7, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="absolute max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] px-2 sm:px-3 md:px-4"
              style={{
                top: versePos.position.top,
                left: versePos.position.left,
                transform: `rotate(${versePos.position.rotation}deg)`,
              }}
            >
              <p className="text-primary-dark font-serif italic text-[10px] sm:text-xs md:text-sm lg:text-base leading-snug sm:leading-relaxed select-none" style={{ textShadow: '0 2px 6px rgba(255,255,255,0.98), 0 0 2px rgba(255,255,255,0.8)' }}>
                "{versePos.verse.text}"
              </p>
              <p className="text-accent text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold mt-0.5 sm:mt-1 select-none" style={{ textShadow: '0 2px 6px rgba(255,255,255,0.98), 0 0 2px rgba(255,255,255,0.8)' }}>
                — {versePos.verse.reference}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}
