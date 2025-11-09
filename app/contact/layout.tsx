import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Contact Us',
  description: 'Contact Worldwide Acceptance Ministries in Calgary, AB. Visit us at Unit 40, 2333 18 Avenue Northeast, Calgary, AB T2E 8T6. Call (403) 681-4688 or email us.',
  path: '/contact',
  keywords: ['Calgary church contact', 'Calgary church address', 'Calgary church phone', 'contact Calgary church', 'Calgary church location'],
  image: '/images/Picture of congregation banner.jpeg',
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

