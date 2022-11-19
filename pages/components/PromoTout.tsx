import { FC } from 'react'

import PromoToutInterface from 'components/blocks/promo_tout/promo_tout.interface'
import PromoToutBlock from 'components/blocks/promo_tout/promo_tout'
import PlaceholderImage from '../../assets/PromoTout/placeholder.png'

const placeholderPromoToutBlock = {
  variant: 'signup',
  headline: 'Stay up-to-date with all things Outreach.',
  description: 'Get the latest product news, industry insights, and valueable resources in your inbox.',
  image: PlaceholderImage,
}

const PromoTout: FC = () => (
  <PromoToutBlock
    block={{
      type: 'block',
      TextAndImageBlocks: [
        placeholderPromoToutBlock,
      ],
    } as unknown as PromoToutInterface}
  />
)

export default PromoTout
