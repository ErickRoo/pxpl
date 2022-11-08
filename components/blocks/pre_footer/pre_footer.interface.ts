import { StaticImageData } from 'next/image'

export default interface PreFooterInterface {
    type: string;
    variant: string;
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
