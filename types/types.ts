export interface TimelineItem {
    year: string
    title: string
    company: string
    description: string
    tags: string[]
    links: {
        website?: string
        github?: string
        tutorial?: string
    }
    icon: string
}
