import { StaticImageData } from 'next/image'

export interface LeftRightFeatureItemInterface {
    variant: string;
    eyebrow: string;
    headline: string;
    subHeadline: string;
    bodyText: string;
    listText: string[];
    primaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
    secondaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
    image: StaticImageData;
    imageAlignment: string;
    quote: {
        quote_text: string;
        author_name: string;
        eyebrow: string;
        image: StaticImageData;
    }
}

export default interface LeftRightFeatureBlockInterface {
    type: string;
    TextAndImageBlocks: LeftRightFeatureItemInterface[]
}
