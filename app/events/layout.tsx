import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Events',
  description: 'Join us for events at Worldwide Acceptance Ministries in Calgary, AB. Sunday services, Bible study, revival hours, and night vigils. Check our calendar for upcoming events.',
  path: '/events',
  keywords: ['Calgary church events', 'Calgary church calendar', 'Calgary Sunday service', 'Calgary Bible study', 'Calgary church events calendar'],
  image: '/images/Weekly sunday service.png',
})

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

