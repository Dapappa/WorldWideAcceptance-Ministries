import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Prayer Requests',
  description: 'Submit your prayer requests to Worldwide Acceptance Ministries in Calgary, AB. Our prayer team is here to intercede for you. Confidential and secure prayer requests.',
  path: '/prayer',
  keywords: ['Calgary church prayer', 'Calgary prayer requests', 'Calgary church prayer team', 'Calgary prayer ministry', 'submit prayer request Calgary'],
  image: '/images/Picture of congregation banner.jpeg',
})

export default function PrayerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

