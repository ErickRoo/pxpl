import { FC } from 'react'

import PromoToutInterface from 'components/blocks/promo_tout/promo_tout.interface'
import PromoToutBlock from 'components/blocks/promo_tout/promo_tout'
import PlaceholderImage from '../../assets/PromoTout/placeholder.png'

const placeholderPromoToutABlock = {
  variant: 'signup',
  headline: 'Stay up-to-date with all things Outreach.',
  description: 'Get the latest product news, industry insights, and valueable resources in your inbox.',
  image: PlaceholderImage,
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

const PromoTout: FC = () => (
  <PromoToutBlock
    block={{
      type: 'block',
      TextAndImageBlocks: [
        placeholderPromoToutABlock,
        placeholderPromoToutBBlock,
        placeholderPromoToutCBlock,
        placeholderPromoToutDBlock,
      ],
    } as unknown as PromoToutInterface}
  />
)

export default PromoTout
