import { StaticImageData } from 'next/image'

export default interface HorizontalCardItemInterface {
    variant: string;
    topEyebrow: string;
    icon: StaticImageData;
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
    bottomEyebrow: string;
    tags: string[];
    imageAlignment: string;
    image: StaticImageData;
}
