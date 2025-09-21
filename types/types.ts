export interface TimelineItem {
    start: string
    end: string | null
    duration: string | null
    title: string
    icon_path: string
    description: string
    tags: string[]
    links: {
        name: string
        url: string
    }[]
}
