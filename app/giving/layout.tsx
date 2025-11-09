import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Giving',
  description: 'Support Worldwide Acceptance Ministries in Calgary, AB through generous giving. Secure online donations through Tithe.ly. Your giving helps spread the Gospel in Calgary and beyond.',
  path: '/giving',
  keywords: ['Calgary church giving', 'Calgary church donations', 'Calgary church tithe', 'Calgary church online giving', 'donate Calgary church'],
  image: '/images/Picture of congregation banner.jpeg',
})

export default function GivingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

