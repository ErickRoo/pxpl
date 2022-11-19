import { StaticImageData } from 'next/image'

export default interface PromoToutImageItemInterface {
  variant: string;
  headline: string;
  description: string;
  image?: StaticImageData;
  imageAlignment?: string;
  centered?: boolean;
  bgImageCircles?: boolean;
  ctaLink?: string;
}
