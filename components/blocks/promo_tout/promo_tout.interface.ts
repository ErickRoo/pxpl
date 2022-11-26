import { StaticImageData } from 'next/image'

export default interface PromoToutInterface {
  type: string
  TextAndImageBlocks: {
    variant: string;
    headline: string;
    description: string;
    image?: StaticImageData;
    imageAlignment?: string;
    centered?: boolean;
    bgImageCircles?: boolean;
    ctaLink?: string;
  }[];
}
