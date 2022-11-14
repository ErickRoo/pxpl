import { StaticImageData } from 'next/image'

export default interface LargeQuoteItemInterface {
    variant: string;
    testimony: string;
    author: string;
    position: string;
    profile_image?: StaticImageData;
    image: StaticImageData;
    primaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
}
