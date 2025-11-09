import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Ministries',
  description: 'Discover the ministries at Worldwide Acceptance Ministries in Calgary, AB. Children\'s Ministry, Choir, Young Adults, Counselling Ministry, and Evangelical programs serving Calgary.',
  path: '/ministries',
  keywords: ['Calgary church ministries', 'Calgary children ministry', 'Calgary church programs', 'Calgary church choir', 'Calgary young adults ministry'],
  image: '/images/Picture of congregation banner.jpeg',
})

export default function MinistriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

