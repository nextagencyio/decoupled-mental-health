import { getClient } from '@/lib/drupal-client'
import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { checkConfiguration } from '../lib/config-check'
import { GET_HOMEPAGE_DATA } from '@/lib/queries'

// Enable ISR with 1 hour revalidation
export const revalidate = 3600
export const dynamic = 'force-dynamic'



export async function generateMetadata(): Promise<Metadata> {
  const title = 'Clearpath Counseling & Wellness - Your Journey to Wellness Starts Here'
  const description = 'Compassionate, evidence-based mental health care for individuals, couples, and families. Our licensed therapists create a safe, supportive space to help you build a more fulfilling life.'

  return {
    title,
    description,
    keywords: ['Mental Health', 'Therapy', 'Counseling', 'Anxiety Treatment', 'Depression', 'Couples Therapy'],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function Home() {
  // Check if the app is properly configured
  const configStatus = checkConfiguration()

  if (!configStatus.isConfigured) {
    return <SetupGuide missingVars={configStatus.missingVars} />
  }

  const client = getClient()

  // Try getEntryByPath first (works when homepage has path alias '/')
  let homepageContent = await client.getEntryByPath('/') as any

  // If that didn't return homepage content, try the direct query
  if (!homepageContent || !homepageContent.heroTitle) {
    try {
      const data = await client.raw(GET_HOMEPAGE_DATA)
      homepageContent = data?.nodeHomepages?.nodes?.[0] || null
    } catch (error) {
      console.error('Error fetching homepage data:', error)
      homepageContent = null
    }
  }

  // Check if connected but no content exists - show content import guide
  if (!homepageContent) {
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }

  return <HomepageRenderer homepageContent={homepageContent} />
}
