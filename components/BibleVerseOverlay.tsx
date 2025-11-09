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
  { text: "The Lord bless you and keep you; the Lord make his face shine on you.", reference: "Numbers 6:24-25" },
  { text: "This is the day the Lord has made; let us rejoice and be glad in it.", reference: "Psalm 118:24" },
  { text: "But those who hope in the Lord will renew their strength.", reference: "Isaiah 40:31" },
  { text: "The Lord your God is with you, the Mighty Warrior who saves.", reference: "Zephaniah 3:17" },
  { text: "Give thanks to the Lord, for he is good; his love endures forever.", reference: "Psalm 107:1" },
  { text: "Love the Lord your God with all your heart and with all your soul.", reference: "Matthew 22:37" },
  { text: "The Lord is faithful to all his promises and loving toward all he has made.", reference: "Psalm 145:13" },
  { text: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.", reference: "Psalm 34:8" },
  { text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
  { text: "Rejoice in the Lord always. I will say it again: Rejoice!", reference: "Philippians 4:4" },
  { text: "The Lord is good, a refuge in times of trouble.", reference: "Nahum 1:7" },
  { text: "But seek first his kingdom and his righteousness.", reference: "Matthew 6:33" },
  { text: "Great is the Lord and most worthy of praise.", reference: "Psalm 48:1" },
  { text: "The Lord is compassionate and gracious, slow to anger, abounding in love.", reference: "Psalm 103:8" },
  { text: "Call to me and I will answer you and tell you great and unsearchable things.", reference: "Jeremiah 33:3" },
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
        // Position verses more to the sides, avoiding center content areas
        const positionsConfig = [
          { top: '15%', left: '1%', rotation: -1 },
          { top: '20%', left: '85%', rotation: 1.5 },
          { top: '30%', left: '2%', rotation: -0.5 },
          { top: '40%', left: '88%', rotation: 1 },
          { top: '50%', left: '1%', rotation: 0.5 },
          { top: '60%', left: '86%', rotation: -1.5 },
          { top: '70%', left: '3%', rotation: 1 },
          { top: '80%', left: '87%', rotation: -0.5 },
          { top: '25%', left: '90%', rotation: 1.5 },
          { top: '35%', left: '2%', rotation: -1 },
          { top: '55%', left: '89%', rotation: 0.5 },
          { top: '65%', left: '1%', rotation: -1.5 },
          { top: '75%', left: '88%', rotation: 1 },
          { top: '85%', left: '2%', rotation: -0.5 },
          { top: '45%', left: '90%', rotation: 1.5 },
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

    // Rotate verses very frequently - disappear and reappear every few seconds
    const rotationInterval = setInterval(() => {
      setVerses([]) // Clear first (disappear)
      setTimeout(() => {
        setVerses(generatePositions()) // Reappear with new verses
      }, 500) // Wait 0.5s before showing new verses
    }, 3000) // Change every 3 seconds for frequent rotation

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
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg">
                <p className="text-primary-dark font-serif italic text-[10px] sm:text-xs md:text-sm lg:text-base leading-snug sm:leading-relaxed select-none">
                  "{versePos.verse.text}"
                </p>
                <p className="text-accent text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold mt-0.5 sm:mt-1 select-none">
                  — {versePos.verse.reference}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}
