import { FC } from 'react'

import { LeftRightFeatureItemInterface } from 'components/blocks/left_right_feature/left_right_feature.interface'
import LeftRightFeatureBlock from 'components/blocks/left_right_feature/left_right_feature'
import PlaceholderImage from '../../assets/LeftRightFeature/placeholder_image.png'

const placeholderLeftRightBlock = {
  variant: 'normal',
  eyebrow: 'Eyebrow',
  headline: 'Subheadline giving detail.',
  bodyText: 'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  listText: [
    'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  ],
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  secondaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  image: PlaceholderImage,
  imageAlignment: 'left',
  quote: {
    quote_text: `“Quote - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
    Consectetur adipiscing dolor sit amet.”`,
    author_name: 'First Lastname',
    eyebrow: 'Associate Content Editor, Company',
    image: PlaceholderImage,
  },
} as LeftRightFeatureItemInterface

const LeftRightFeature: FC = () => (
  <LeftRightFeatureBlock block={{
    type: 'block',
    TextAndImageBlocks: [
      placeholderLeftRightBlock,
    ],
  }}
  />
)

export default LeftRightFeature
