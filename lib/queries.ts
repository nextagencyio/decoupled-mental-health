// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_ARTICLE_TEASERS = gql`
  query GetArticleTeasers($first: Int = 10) {
    nodeArticles(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeArticle {
          body {
            processed
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ARTICLE_BY_PATH = gql`
  query GetArticleByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        heroImage { url alt width height }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename
            id
            title
            body {
              processed
            }
          }
          ... on NodeArticle {
            __typename
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeHomepage {
            __typename
            id
            title
            heroTitle
            heroSubtitle
            heroDescription { processed }
            heroImage { url alt width height }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription { processed }
            ctaPrimary
            ctaSecondary
          }
          ... on NodeService {
            __typename
            id
            title
            path
            body { processed summary }
            image { url alt width height }
            summary { processed }
            sessionFormat
            sessionDuration
            ageGroup
            insuranceAccepted
            serviceCategory {
              ... on TermServiceCategory { id name }
            }
          }
          ... on NodeTherapist {
            __typename
            id
            title
            path
            body { processed summary }
            image { url alt width height }
            credentials
            licenseNumber
            specialties
            approaches
            education { processed }
            languages
            acceptingClients
            therapistRole {
              ... on TermTherapistRole { id name }
            }
          }
          ... on NodeResource {
            __typename
            id
            title
            path
            body { processed summary }
            image { url alt width height }
            summary { processed }
            resourceTopic {
              ... on TermResourceTopic { id name }
            }
            authorName
            publishedDate { timestamp }
          }
        }
      }
    }
  }
`

export const GET_SERVICES = gql`
  query GetServices($first: Int = 10) {
    nodeServices(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeService {
          body { processed summary }
          image { url alt width height }
          summary { processed }
          sessionFormat
          sessionDuration
          ageGroup
          insuranceAccepted
          serviceCategory {
            ... on TermServiceCategory { id name }
          }
        }
      }
    }
  }
`

export const GET_SERVICE_BY_PATH = gql`
  query GetServiceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeService {
            id
            title
            path
            body { processed summary }
            image { url alt width height }
            summary { processed }
            sessionFormat
            sessionDuration
            ageGroup
            insuranceAccepted
            serviceCategory {
              ... on TermServiceCategory { id name }
            }
          }
        }
      }
    }
  }
`

export const GET_THERAPISTS = gql`
  query GetTherapists($first: Int = 10) {
    nodeTherapists(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeTherapist {
          body { processed summary }
          image { url alt width height }
          credentials
          licenseNumber
          specialties
          approaches
          education { processed }
          languages
          acceptingClients
          therapistRole {
            ... on TermTherapistRole { id name }
          }
        }
      }
    }
  }
`

export const GET_THERAPIST_BY_PATH = gql`
  query GetTherapistByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeTherapist {
            id
            title
            path
            body { processed summary }
            image { url alt width height }
            credentials
            licenseNumber
            specialties
            approaches
            education { processed }
            languages
            acceptingClients
            therapistRole {
              ... on TermTherapistRole { id name }
            }
          }
        }
      }
    }
  }
`

export const GET_RESOURCES = gql`
  query GetResources($first: Int = 10) {
    nodeResources(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeResource {
          body { processed summary }
          image { url alt width height }
          summary { processed }
          resourceTopic {
            ... on TermResourceTopic { id name }
          }
          authorName
          publishedDate { timestamp }
        }
      }
    }
  }
`

export const GET_RESOURCE_BY_PATH = gql`
  query GetResourceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeResource {
            id
            title
            path
            body { processed summary }
            image { url alt width height }
            summary { processed }
            resourceTopic {
              ... on TermResourceTopic { id name }
            }
            authorName
            publishedDate { timestamp }
          }
        }
      }
    }
  }
`
