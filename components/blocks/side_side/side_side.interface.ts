import { StaticImageData } from 'next/image'

export default interface SideSideInterface {
    type: string;
    reverse?: boolean;
    topTag?: string;
    heading: string;
    description: string;
    primaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
    image?: StaticImageData;
    showCircles?: boolean;
}
