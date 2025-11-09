import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Our Staff',
  description: 'Meet the staff and leadership team at Worldwide Acceptance Ministries in Calgary, AB. Our dedicated team serves the Calgary community with faith and love.',
  path: '/staff',
  keywords: ['Calgary church staff', 'Calgary church pastor', 'Calgary church leadership', 'Calgary church team'],
  image: '/images/Random pciture.jpeg',
})

export default function StaffLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

