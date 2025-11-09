import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Social Media',
  description: 'Connect with Worldwide Acceptance Ministries in Calgary, AB on social media. Follow us on Facebook and YouTube for updates, events, and ministry content.',
  path: '/social-media',
  keywords: ['Calgary church Facebook', 'Calgary church social media', 'Calgary church YouTube', 'Calgary church online'],
  image: '/images/Picture of congregation banner.jpeg',
})

export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

