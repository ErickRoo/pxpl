import { StaticImageData } from 'next/image'

export default interface PreFooterInterface {
    type: string;
    variant: string;
    topTag: string;
    headlineLeft: string;
    headlineRight?: string;
    description: string;
    primaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
    secondaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
    right_image?: StaticImageData;
}
