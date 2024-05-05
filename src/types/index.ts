// Define types for the BookmarkBlock component
interface UrlInter {
    id: string,
    url: string,
    text: string
    note?: string
}

export type UrlBlock = Array<UrlInter>