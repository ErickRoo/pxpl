import { StaticImageData } from 'next/image'

export default interface SideSideItemInterface {
    variant: string;
    topTag?: string;
    headline: string;
    description: string;
    primaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
    image?: StaticImageData;
    showCircles?: boolean;
}
