interface HeroHeadline {
    text: string
    color: string
}

export default interface HeroInterface {
    type: string
    variant: string
    headline: Array<HeroHeadline>
    description: string
    primaryCta?: {
        ctaText: string
        ctaLink: string
    }
    secondaryCta?: {
        ctaText: string
        ctaLink: string
    }
    image?: string
    imageMobile?: string
    circle?: boolean
}
