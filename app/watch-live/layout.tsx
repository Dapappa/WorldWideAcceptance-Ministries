import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Watch Live',
  description: 'Watch live services and previous sermons from Worldwide Acceptance Ministries in Calgary, AB on our YouTube channel. Join us online for worship and the Word.',
  path: '/watch-live',
  keywords: ['Calgary church live', 'Calgary church online', 'Calgary church YouTube', 'Calgary church streaming', 'watch Calgary church'],
  image: '/images/Picture of congregation banner.jpeg',
})

export default function WatchLiveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

