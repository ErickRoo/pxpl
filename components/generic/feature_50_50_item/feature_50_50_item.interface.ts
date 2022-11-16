import { StaticImageData } from 'next/image'

export default interface Feature5050ItemInterface {
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
