import { FC } from 'react'

import { Feature5050ItemInterface } from 'components/blocks/feature_50_50/feature_50_50.interface'
import Feature5050Block from 'components/blocks/feature_50_50/feature_50_50'
import PlaceholderLeftImage from '../../assets/Feature5050/placeholder-left.png'
import PlaceholderRightImage from '../../assets/Feature5050/placeholder-right.png'

const placeholderFirstSideSideBlock = {
  left: {
    alignment: 'bottom',
    eyebrow: 'Use cases',
    headline: 'For every role. \nFor every goal.',
    description: 'Learn how the Outreach Sales Execution Platform serves your unique business.',
    primaryCta: {
      ctaText: 'Learn more',
      ctaLink: '#',
    },
    image: PlaceholderLeftImage,
  } as Feature5050ItemInterface,
  right: {
    alignment: 'top',
    eyebrow: 'Use cases',
    headline: 'Your process. Your \npeople. Better results.',
    description: 'Learn how the Outreach Sales Execution Platform serves your unique business.',
    primaryCta: {
      ctaText: 'Learn more',
      ctaLink: '#',
    },
    image: PlaceholderRightImage,
  } as Feature5050ItemInterface,
}

const Feature5050: FC = () => (
  <div style={{ backgroundColor: '#f1f1f1' }}>
    <Feature5050Block
      block={{
        type: 'Block',
        TextAndImageBlocks: [
          placeholderFirstSideSideBlock,
        ],
      }}
    />
  </div>
)

export default Feature5050
