// Define types for the BookmarkBlock component
interface UrlInter {
    id: string,
    url: string,
    text: string
    description?: string
}

export type UrlBlock = Array<UrlInter>

export interface FullUrlInfo {
    cardName: string,
    urlList: UrlBlock
}
