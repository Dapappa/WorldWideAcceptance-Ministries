import { Metadata } from 'next'
import { nearbyCommunities, allCalgaryCommunities } from './calgary-communities'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://worldwideacceptanceministries.com'
const siteName = 'Worldwide Acceptance Ministries'
const defaultDescription = 'Come worship with us at Worldwide Acceptance Ministries in Calgary, AB. A Pentecostal church dedicated to spreading God\'s love and building a strong foundation of faith.'

export interface PageMetadataOptions {
  title: string
  description: string
  path?: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

export function generateMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    path = '',
    keywords = [],
    image = '/images/Picture of congregation banner.jpeg',
    type = 'website',
    noindex = false,
  } = options

  const fullTitle = `${title} | ${siteName}`
  const url = `${siteUrl}${path}`
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`
  
  // Add Calgary keywords and community names if not already present
  const communityKeywords = nearbyCommunities.slice(0, 20).flatMap(community => [
    `church in ${community}`,
    `${community} church`,
    `${community} Calgary church`
  ])
  
  const allKeywords = [
    ...keywords,
    'Calgary',
    'Calgary church',
    'Calgary Pentecostal church',
    'church in Calgary',
    'Calgary AB church',
    'Northeast Calgary church',
    'Worldwide Acceptance Ministries Calgary',
    ...communityKeywords,
    // Major Calgary communities for broader SEO
    'church in Marlborough', 'church in Rundle', 'church in Temple', 'church in Whitehorn',
    'church in Falconridge', 'church in Castleridge', 'church in Saddle Ridge',
    'church in Martindale', 'church in Coventry Hills', 'church in Harvest Hills',
    'church in Panorama Hills', 'church in Skyview Ranch', 'church in Country Hills',
    'church in Beddington Heights', 'church in Sandstone', 'church in Thorncliffe',
    'church in Greenview', 'church in Huntington Hills', 'church in Taradale',
    'church in Coral Springs', 'church in Redstone', 'church in Cityscape',
  ]

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      type,
      locale: 'en_CA',
      url,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
    other: {
      'geo.region': 'CA-AB',
      'geo.placename': 'Calgary',
      'geo.position': '51.0447;-114.0719',
      'ICBM': '51.0447, -114.0719',
    },
  }
}

export const defaultMetadata: Metadata = generateMetadata({
  title: siteName,
  description: defaultDescription,
  keywords: [
    'Calgary church',
    'Pentecostal church',
    'Calgary worship',
    'Calgary Bible study',
    'Calgary prayer',
  ],
})

