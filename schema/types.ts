// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroImage: { url: string; alt: string; width: number; height: number };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeResource {
  id: string;
  authorName: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  publishedDate: { time: string };
  resourceTopic: any[];
  summary: { value: string };
  title: string;
}

export interface NodeService {
  id: string;
  ageGroup: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  insuranceAccepted: boolean;
  path: string;
  serviceCategory: any[];
  sessionDuration: string;
  sessionFormat: string;
  summary: { value: string };
  title: string;
}

export interface NodeTherapist {
  id: string;
  acceptingClients: boolean;
  approaches: string[];
  body: { value: string; summary?: string };
  credentials: string;
  education: { value: string };
  image: { url: string; alt: string; width: number; height: number };
  languages: string[];
  licenseNumber: string;
  path: string;
  specialties: string[];
  therapistRole: any[];
  title: string;
}
