import { FC } from 'react'

import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import { LeftRightFeatureItemInterface } from 'components/blocks/left_right_feature/left_right_feature.interface'
import LeftRightFeatureBlock from 'components/blocks/left_right_feature/left_right_feature'
import PlaceholderImage from '../../assets/LeftRightFeature/placeholder_image.png'

const getPlaceholder = ({ bgImage = false, right = false, center = false }) => {
  let imageAlignment = 'left'

  if (center) imageAlignment = 'center'
  else if (right) imageAlignment = 'right'

  return {
    variant: bgImage ? 'bgImage' : 'normal',
    eyebrow: 'Eyebrow',
    headline: 'Guide sellers to success.',
    subHeadline: center ? 'Subheadline giving detail lorem sipsum dolor sit amet.' : 'Subheadline giving detail.',
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
    imageAlignment,
    quote: {
      quote_text: `“Quote - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
        Consectetur adipiscing dolor sit amet.”`,
      author_name: 'First Lastname',
      eyebrow: 'Associate Content Editor, Company',
      image: PlaceholderImage,
    },
  } as LeftRightFeatureItemInterface
}

const placeholderLeftRightBlockA = {
  normal: getPlaceholder({}),
  sm: getPlaceholder({}),
  md: getPlaceholder({ bgImage: true, right: true }),
  lg: getPlaceholder({}),
  xl: getPlaceholder({}),
  xxl: getPlaceholder({}),
}

const placeholderLeftRightBlockB = {
  md: getPlaceholder({ bgImage: true }),
  lg: getPlaceholder({ bgImage: true }),
  xl: getPlaceholder({ bgImage: true }),
  xxl: getPlaceholder({ bgImage: true }),
}

const placeholderLeftRightBlockC = {
  md: getPlaceholder({ center: true }),
  lg: getPlaceholder({ right: true }),
  xl: getPlaceholder({ right: true }),
  xxl: getPlaceholder({ right: true }),
}

const placeholderLeftRightBlockD = {
  lg: getPlaceholder({ bgImage: true, right: true }),
  xl: getPlaceholder({ bgImage: true, right: true }),
  xxl: getPlaceholder({ bgImage: true, right: true }),
}

const LeftRightFeature: FC = () => {
  const { width } = useWindowSize()
  const { position = '' } = getCurrentBreakpoint(width) ?? {}

  return (
    <LeftRightFeatureBlock block={{
      type: 'block',
      TextAndImageBlocks: [
        placeholderLeftRightBlockA[position],
        placeholderLeftRightBlockB[position],
        placeholderLeftRightBlockC[position],
        placeholderLeftRightBlockD[position],
      ],
    }}
    />
  )
}

export default LeftRightFeature
