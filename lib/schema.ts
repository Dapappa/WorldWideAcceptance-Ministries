// Schema.org JSON-LD structured data helpers

export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  logo?: string
  image?: string
  description?: string
  address?: {
    '@type': string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    '@type': string
    latitude: string
    longitude: string
  }
  telephone?: string
  email?: string
  sameAs?: string[]
}

export interface LocalBusinessSchema extends OrganizationSchema {
  '@type': 'LocalBusiness' | 'ReligiousOrganization'
  openingHours?: string[]
  priceRange?: string
  areaServed?: {
    '@type': string
    name: string
    addressRegion?: string
    addressCountry?: string
  }
}

export interface EventSchema {
  '@context': string
  '@type': string
  name: string
  description?: string
  startDate: string
  endDate?: string
  eventAttendanceMode?: string
  eventStatus?: string
  location: {
    '@type': string
    name?: string
    address: {
      '@type': string
      streetAddress: string
      addressLocality: string
      addressRegion: string
      postalCode: string
      addressCountry: string
    }
  }
  organizer?: {
    '@type': string
    name: string
    url?: string
  }
  image?: string
}

export interface PersonSchema {
  '@context': string
  '@type': string
  name: string
  jobTitle?: string
  worksFor?: {
    '@type': string
    name: string
  }
  image?: string
}

export interface ReviewSchema {
  '@context': string
  '@type': string
  itemReviewed: {
    '@type': string
    name: string
    address?: {
      '@type': string
      streetAddress: string
      addressLocality: string
      addressRegion: string
      postalCode: string
      addressCountry: string
    }
  }
  reviewRating?: {
    '@type': string
    ratingValue: number
    bestRating: number
  }
  author: {
    '@type': string
    name: string
  }
  reviewBody: string
  datePublished?: string
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://worldwideacceptanceministries.com'

export function createOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ReligiousOrganization',
    name: 'Worldwide Acceptance Ministries',
    url: siteUrl,
    logo: `${siteUrl}/images/Logo.png`,
    image: `${siteUrl}/images/Picture of congregation banner.jpeg`,
    description: 'A Pentecostal church in Calgary, AB dedicated to spreading God\'s love and building a strong foundation of faith.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 40, 2333 18 Avenue Northeast',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      postalCode: 'T2E 8T6',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.0447',
      longitude: '-114.0719',
    },
    telephone: '+1-403-681-4688',
    email: 'worldwideacceptanceministry@yahoo.com',
    sameAs: [],
  }
}

export function createLocalBusinessSchema(): LocalBusinessSchema {
  const schema: LocalBusinessSchema = {
    ...createOrganizationSchema(),
    '@type': 'LocalBusiness',
    openingHours: ['Mo-Th 09:00-15:00'],
    priceRange: 'Free',
    areaServed: {
      '@type': 'City',
      name: 'Calgary',
      addressRegion: 'AB',
      addressCountry: 'CA',
    },
  }
  return schema
}

export function createEventSchema(
  name: string,
  startDate: string,
  endDate: string,
  description?: string,
  image?: string
): EventSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    endDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Worldwide Acceptance Ministries',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 40, 2333 18 Avenue Northeast',
        addressLocality: 'Calgary',
        addressRegion: 'AB',
        postalCode: 'T2E 8T6',
        addressCountry: 'CA',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Worldwide Acceptance Ministries',
      url: siteUrl,
    },
    image: image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : undefined,
  }
}

export function createPersonSchema(
  name: string,
  jobTitle?: string,
  image?: string
): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    worksFor: {
      '@type': 'Organization',
      name: 'Worldwide Acceptance Ministries',
    },
    image: image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : undefined,
  }
}

export function createReviewSchema(
  authorName: string,
  reviewBody: string,
  ratingValue?: number,
  datePublished?: string
): ReviewSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'Worldwide Acceptance Ministries',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 40, 2333 18 Avenue Northeast',
        addressLocality: 'Calgary',
        addressRegion: 'AB',
        postalCode: 'T2E 8T6',
        addressCountry: 'CA',
      },
    },
    reviewRating: ratingValue
      ? {
          '@type': 'Rating',
          ratingValue,
          bestRating: 5,
        }
      : undefined,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    reviewBody,
    datePublished,
  }
}

export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  }
}

