import { StaticImageData } from 'next/image'

export interface Feature5050ItemInterface {
    alignment: string;
    eyebrow?: string;
    headline: string;
    description?: string;
    primaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
    image?: StaticImageData;
}

export default interface Feature5050Interface {
    type: string;
    TextAndImageBlocks: Array<{
        left: Feature5050ItemInterface;
        right: Feature5050ItemInterface;
    }>;
}
