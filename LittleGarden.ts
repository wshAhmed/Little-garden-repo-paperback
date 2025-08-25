/* LittleGarden – Paperback Source
 * Site: https://littlexgarden.com
 * Auteur: toi :)
 */

import {
  Source,
  Request,
  Manga,
  Chapter,
  ChapterDetails,
  SearchRequest,
  PagedResults,
  SourceInfo,
  LanguageCode,
  MangaStatus,
  ContentRating,
  RequestHeaders
} from "paperback-extensions-common"

const BASE = "https://littlexgarden.com"

const headers: RequestHeaders = {
  "referer": BASE + "/",
  "user-agent": "Mozilla/5.0 (Paperback Source)"
}

export const LittleGardenInfo: SourceInfo = {
  version: "1.0.0",
  name: "Little Garden (FR)",
  description: "Scans FR depuis littlexgarden.com",
  author: "toi",
  authorWebsite: "",
  icon: "icon.png",
  contentRating: ContentRating.EVERYONE,
  language: LanguageCode.FRENCH,
  websiteBaseURL: BASE,
  sourceTags: []
}

export class LittleGarden extends Source {
  getMangaShareUrl(mangaId: string): string { return `${BASE}/mangas/${mangaId}` }

  async getMangaDetails(mangaId: string): Promise<Manga> {
    return this.createManga({
      id: mangaId,
      titles: [mangaId.replace(/-/g, " ")],
      image: BASE + "/favicon.ico",
      status: MangaStatus.ONGOING
    })
  }

  async getChapters(mangaId: string): Promise<Chapter[]> {
    return []
  }

  async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
    return this.createChapterDetails({
      id: chapterId,
      mangaId,
      pages: []
    })
  }

  async searchRequest(query: SearchRequest): Promise<PagedResults> {
    return this.createPagedResults({ results: [] })
  }
}
