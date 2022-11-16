import { StaticImageData } from 'next/image'

export default interface TtacItemInterface {
    variant: string;
    alignment?: string;
    topTag?: string;
    headline: string;
    description: string;
    primaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
    secondaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
    image?: StaticImageData;
    additionalSpace?: boolean;
}
