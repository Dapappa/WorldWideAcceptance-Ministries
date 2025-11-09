import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Testimonies',
  description: 'Read testimonies and stories of how God has changed lives at Worldwide Acceptance Ministries in Calgary, AB. Share your own testimony of faith.',
  path: '/testimonies',
  keywords: ['Calgary church testimonies', 'Calgary church stories', 'Calgary church reviews', 'Calgary church testimonies'],
  image: '/images/Picture of congregation banner.jpeg',
})

export default function TestimoniesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

