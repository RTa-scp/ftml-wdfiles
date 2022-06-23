import type { ViteSSGContext } from "vite-ssg"

export type UserModule = (ctx: ViteSSGContext) => void

export interface DataShare {
  icon: string
  url: string
  title: string
  description?: string
  quote?: string
  hashtags?: string
  twitterUser?: string
  media?: string
}


export interface RelatedArticles {
  limit: number
  tags: Array<string>
  title: string
}

export interface PaginateData {
  articles: Array<unknown>
  currentPage: number
  pageSize: number
}

export interface Paginate {
  totalItems: number
  currentPage: number
  pageSize: number
  maxPages?: number
}
