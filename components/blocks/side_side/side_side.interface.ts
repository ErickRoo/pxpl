import { StaticImageData } from 'next/image'

export default interface SideSideInterface {
    type: string;
<<<<<<< HEAD
    reverse?: boolean;
    topTag?: string;
    heading: string;
=======
    variant: string;
    topTag?: string;
    headline: string;
>>>>>>> feature/module-side-side-2
    description: string;
    primaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
    image?: StaticImageData;
    showCircles?: boolean;
}
