export default interface HeadlineTextInterface {
    type: string
    variant: string
    eyebrow: string
    headline: string
    description: string
    primaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
    secondaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
    background_image?: string;
}
