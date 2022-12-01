interface KeyResult {
    icon: string
    content: string
}

interface InlineTextItem {
    type: string
    content: object
}

interface Media {
    image?: string
    video?: string
    caption?: string
}

export default interface WysiwygInterface {
    type: string
    backgroundToggle: boolean
    modules: {
        type: string
        introText?: {
            headline: {
                headline: string
                headlineLevel: number
            }
            eyebrow: string
            body: string
        }
        keyResults?: {
            eyebrow: string
            items: KeyResult[]
        }
        inlineText?: InlineTextItem[]
        spotlight?: {
            headline: {
                headline: string
                headlineLevel: number
            }
            body: string
            image: string
        }
        quote?: {
            text: string
            author: string
            about: string
        }
        inlineMedia?: Media[]
    }
}
