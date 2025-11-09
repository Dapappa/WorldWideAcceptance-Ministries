import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'About Us',
  description: 'Learn about Worldwide Acceptance Ministries in Calgary, AB. A Pentecostal church where we believe in the word of God, the manifestation of the Holy Spirit, and the power of prayer. Located in Northeast Calgary.',
  path: '/about',
  keywords: ['Calgary church', 'about Calgary church', 'Calgary Pentecostal church', 'Northeast Calgary church', 'Calgary ministry'],
  image: '/images/Picture of congregation banner.jpeg',
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

