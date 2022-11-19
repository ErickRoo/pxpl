import { FC } from 'react'

import PromoToutInterface from 'components/blocks/promo_tout/promo_tout.interface'
import PromoToutBlock from 'components/blocks/promo_tout/promo_tout'
import PlaceholderImage from '../../assets/PromoTout/placeholder.png'

const placeholderPromoToutABlock = {
  variant: 'signup',
  headline: 'Stay up-to-date with all things Outreach.',
  description: 'Get the latest product news, industry insights, and valueable resources in your inbox.',
}

const placeholderPromoToutBBlock = {
  variant: 'signup',
  headline: 'Stay up-to-date with all things Outreach.',
  description: 'Get the latest product news, industry insights, and valueable resources in your inbox.',
  centered: true,
}

const placeholderPromoToutCBlock = {
  variant: 'cta',
  headline: 'Lorem ipsum dolor sit amet.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  ctaLink: '#',
}

const placeholderPromoToutDBlock = {
  variant: 'cta',
  headline: 'Lorem ipsum dolor sit amet.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  ctaLink: '#',
  centered: true,
}

const placeholderPromoToutEBlock = {
  variant: 'image',
  headline: 'Lorem ipsum dolor sit amet.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  ctaLink: '#',
  imageAlignment: 'right',
  image: PlaceholderImage,
}

const placeholderPromoToutFBlock = {
  variant: 'image',
  headline: 'Lorem ipsum dolor sit amet.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  ctaLink: '#',
  imageAlignment: 'left',
  image: PlaceholderImage,
}

const placeholderPromoToutGBlock = {
  variant: 'cta',
  headline: 'Lorem ipsum dolor sit amet.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  ctaLink: '#',
  bgImageCircles: true,
}

const placeholderPromoToutHBlock = {
  variant: 'cta',
  headline: 'Lorem ipsum dolor sit amet.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  ctaLink: '#',
  bgImageCircles: true,
  centered: true,
}

const placeholderPromoToutIBlock = {
  variant: 'image',
  headline: 'Lorem ipsum dolor sit amet.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  ctaLink: '#',
  imageAlignment: 'right',
  image: PlaceholderImage,
  bgImageCircles: true,
}

const placeholderPromoToutJBlock = {
  variant: 'image',
  headline: 'Lorem ipsum dolor sit amet.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  ctaLink: '#',
  imageAlignment: 'left',
  image: PlaceholderImage,
  bgImageCircles: true,
}

const PromoTout: FC = () => (
  <PromoToutBlock
    block={{
      type: 'block',
      TextAndImageBlocks: [
        placeholderPromoToutABlock,
        placeholderPromoToutBBlock,
        placeholderPromoToutCBlock,
        placeholderPromoToutDBlock,
        placeholderPromoToutEBlock,
        placeholderPromoToutFBlock,
        placeholderPromoToutGBlock,
        placeholderPromoToutHBlock,
        placeholderPromoToutIBlock,
        placeholderPromoToutJBlock,
      ],
    } as unknown as PromoToutInterface}
  />
)

export default PromoTout
