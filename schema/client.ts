/**
 * Stub typed client -- replaced by `npm run sync-schema`.
 *
 * Run `npx decoupled-cli schema sync` after connecting to a Drupal space
 * to generate the real typed client with interfaces and queries.
 */

import type { DecoupledClient } from 'decoupled-client'
import type { DrupalNode } from 'decoupled-client'
import type { QueryOptions } from 'decoupled-client'

// Placeholder types -- sync-schema will replace with actual content types
export type ContentNode = DrupalNode
export type ContentTypeName = string

export interface ContentTypeMap {
  [key: string]: DrupalNode
}

export interface TypedClient {
  getEntries<K extends ContentTypeName>(type: K, options?: QueryOptions): Promise<DrupalNode[]>
  getEntry<K extends ContentTypeName>(type: K, id: string): Promise<DrupalNode | null>
  getEntryByPath(path: string): Promise<ContentNode | null>
  raw<T = any>(query: string, variables?: Record<string, any>): Promise<T>
}

const ROUTE_QUERY = `
  query ($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename id title path body { processed }
          }
          ... on NodeHomepage {
            __typename id title path
            heroTitle heroSubtitle
            heroDescription { processed }
            heroImage { url alt width height }
            statsItems {
              ... on ParagraphStatItem { id number label }
            }
            featuredItemsTitle
            ctaTitle ctaDescription { processed }
            ctaPrimary ctaSecondary
          }
          ... on NodeService {
            __typename id title path
            body { processed summary }
            image { url alt width height }
            summary { processed }
            sessionFormat sessionDuration ageGroup insuranceAccepted
            serviceCategory { ... on TermServiceCategory { id name } }
          }
          ... on NodeTherapist {
            __typename id title path
            body { processed summary }
            image { url alt width height }
            credentials licenseNumber specialties approaches
            education { processed }
            languages acceptingClients
            therapistRole { ... on TermTherapistRole { id name } }
          }
          ... on NodeResource {
            __typename id title path
            body { processed summary }
            image { url alt width height }
            summary { processed }
            resourceTopic { ... on TermResourceTopic { id name } }
            authorName publishedDate { timestamp }
          }
        }
      }
    }
  }
`

// Stub factory -- uses raw queryByPath with a basic route query
export function createTypedClient(client: DecoupledClient): TypedClient {
  return {
    async getEntries() { return [] },
    async getEntry() { return null },
    async getEntryByPath(path) {
      return client.queryByPath(path, ROUTE_QUERY)
    },
    async raw(query, variables) { return client.query(query, variables) },
  }
}
