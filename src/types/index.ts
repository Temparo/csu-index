// Define types for the BookmarkBlock component
interface UrlInter {
    id: string,
    url: string,
    text: string
    detail?: string
}

export type UrlBlock = Array<UrlInter>