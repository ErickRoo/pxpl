import { StaticImageData } from 'next/image'

export default interface PreFooterInterface {
    type: string;
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
    right_image: StaticImageData;
}
