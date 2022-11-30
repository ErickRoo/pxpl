export interface FormHeroItemInterface {
    variant: string;
    eyebrow: string;
    headline: string;
    subHeadline: string;
    bodyTopText: string;
    bodyBottomText: string;
    listText: string[];
    primaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
    secondaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
}

export default interface FormHeroBlockInterface {
    type: string;
    TextAndImageBlocks: FormHeroItemInterface[]
}
