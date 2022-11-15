import { StaticImageData } from 'next/image'

export default interface LargeQuoteItemInterface {
    variant: string;
    quote_text: string;
    author_name: string;
    job_title: string;
    icon?: StaticImageData;
    image: StaticImageData;
    primaryCta?: {
        ctaText: string;
        ctaLink: string;
    };
}
