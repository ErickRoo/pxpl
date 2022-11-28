import { StaticImageData } from 'next/image'

export default interface SmallQuoteItemInterface {
  quote_text: string;
  author_name: string;
  eyebrow: string;
  image: StaticImageData;
}
