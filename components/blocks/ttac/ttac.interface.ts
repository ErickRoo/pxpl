import { StaticImageData } from 'next/image'

export default interface TtacInterface {
    type: string;
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
}
