import { StaticImageData } from 'next/image'

export default interface CardOutlineItemInterface {
    variant: string;
    category: string;
    image?: StaticImageData;
    icon?: StaticImageData;
    eyebrow: string;
    date: string;
    headline: string;
    description: string;
    ctaLink: string;
    tags: string[];
}
