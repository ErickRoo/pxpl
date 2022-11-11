import { StaticImageData } from 'next/image'

export default interface SideSideInterface {
    type: string;
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
