import { StaticImageData } from 'next/image'

export default interface DescriptionListItemInterface {
  order: number,
  headline: string,
  description: string,
  ctaButton: {
      text: string,
      href: string,
  },
  initializeOpen?: boolean,
  image: StaticImageData,
}
