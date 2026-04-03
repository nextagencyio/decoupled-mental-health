
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalArticle extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface ArticleTeaserData {
  nodeArticles: {
    nodes: DrupalArticle[]
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalStatItem {
  id: string
  number?: string
  label?: string
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  heroImage?: DrupalImage
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'

export interface TermRef {
  id: string
  name: string
}

export interface DrupalService {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  image?: DrupalImage
  summary?: { processed: string }
  sessionFormat?: string
  sessionDuration?: string
  ageGroup?: string
  insuranceAccepted?: boolean
  serviceCategory?: TermRef[]
}

export interface ServicesData {
  nodeServices: {
    nodes: DrupalService[]
  }
}

export interface DrupalTherapist {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  image?: DrupalImage
  credentials?: string
  licenseNumber?: string
  specialties?: string[]
  approaches?: string[]
  education?: { processed: string }
  languages?: string[]
  acceptingClients?: boolean
  therapistRole?: TermRef[]
}

export interface TherapistsData {
  nodeTherapists: {
    nodes: DrupalTherapist[]
  }
}

export interface DrupalResource {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  image?: DrupalImage
  summary?: { processed: string }
  resourceTopic?: TermRef[]
  authorName?: string
  publishedDate?: { timestamp: string }
}

export interface ResourcesData {
  nodeResources: {
    nodes: DrupalResource[]
  }
}
