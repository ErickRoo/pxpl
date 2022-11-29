import { FC } from 'react'

import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import HorizontalCardBlock from 'components/blocks/horizontal_card/horizontal_card'
import PlaceholderIconImage from '../../assets/HorizontalCard/placeholder-icon.png'
import PlaceholderImage from '../../assets/HorizontalCard/placeholder.png'

const getPlaceholder = ({
  large = false,
  medium = false,
  right = false,
  tagsA = false,
  tagsB = false,
  tagsC = false,
  textPrimaryCta = false,
  secondaryCta = false,
  quantity = 1,
}) => {
  let tags = []
  if (tagsA) tags = ['Lorem ipsum', 'Lorem ipsum longer', 'Lorem ipsum']
  else if (tagsB) tags = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']
  else if (tagsC) tags = ['Lorem ipsum', 'Lorem ipsum']

  let variant = 'small'
  if (medium) variant = 'medium'
  else if (large) variant = 'large'

  const onePlaceholder = {
    variant,
    topEyebrow: 'Use Cases',
    icon: PlaceholderIconImage,
    headline: 'Your process. Your people. Better results.',
    description: 'Learn how the Outreach Sales Execution Platform serves your unique business.',
    primaryCta: {
      ctaText: textPrimaryCta ? 'Learn more' : '',
      ctaLink: '#',
    },
    secondaryCta: secondaryCta ? {
      ctaText: 'Learn more',
      ctaLink: '#',
    } : false,
    bottomEyebrow: tags.length > 0 && 'Services provided',
    tags,
    imageAlignment: right ? 'right' : 'left',
    image: PlaceholderImage,
  }

  return {
    quantity,
    items: Array(quantity).fill(onePlaceholder),
  }
}

const cardAConfig = { large: true, secondaryCta: true, textPrimaryCta: true }
const placeholderHorizontalCardABlock = {
  normal: getPlaceholder({ ...cardAConfig, tagsB: true }),
  sm: getPlaceholder({ ...cardAConfig, tagsB: true }),
  md: getPlaceholder({ ...cardAConfig, tagsB: true }),
  lg: getPlaceholder({ ...cardAConfig, tagsB: true }),
  xl: getPlaceholder({ ...cardAConfig, tagsA: true }),
  xxl: getPlaceholder({ ...cardAConfig, tagsA: true }),
}

const cardBConfig = {
  large: true, right: true, secondaryCta: true, textPrimaryCta: true,
}
const placeholderHorizontalCardBBlock = {
  normal: getPlaceholder({ ...cardBConfig, tagsB: true }),
  sm: getPlaceholder({ ...cardBConfig, tagsB: true }),
  md: getPlaceholder({ ...cardBConfig, tagsB: true }),
  lg: getPlaceholder({ ...cardBConfig, tagsB: true }),
  xl: getPlaceholder({ ...cardBConfig, tagsA: true }),
  xxl: getPlaceholder({ ...cardBConfig, tagsA: true }),
}

const cardCConfig = { medium: true, tagsC: true }
const placeholderHorizontalCardCBlock = {
  normal: getPlaceholder(cardCConfig),
  sm: getPlaceholder(cardCConfig),
  md: getPlaceholder(cardCConfig),
  lg: getPlaceholder(cardCConfig),
  xl: getPlaceholder({ ...cardCConfig, right: true, quantity: 2 }),
  xxl: getPlaceholder({ ...cardCConfig, right: true, quantity: 2 }),
}

const cardDConfig = { medium: true, right: true, tagsC: true }
const placeholderHorizontalCardDBlock = {
  normal: getPlaceholder(cardDConfig),
  sm: getPlaceholder(cardDConfig),
  md: getPlaceholder(cardDConfig),
  lg: getPlaceholder(cardDConfig),
  xl: getPlaceholder({ ...cardDConfig, right: false, quantity: 2 }),
  xxl: getPlaceholder({ ...cardDConfig, right: false, quantity: 2 }),
}

const placeholderHorizontalCardEBlock = {
  normal: getPlaceholder({}),
  sm: getPlaceholder({}),
  md: getPlaceholder({ right: true }),
  lg: getPlaceholder({ right: true }),
  xl: getPlaceholder({ right: true, quantity: 2 }),
  xxl: getPlaceholder({ right: true, quantity: 2 }),
}

const placeholderHorizontalCardFBlock = {
  normal: getPlaceholder({ right: true }),
  sm: getPlaceholder({ right: true }),
  md: getPlaceholder({}),
  lg: getPlaceholder({}),
  xl: getPlaceholder({ quantity: 2 }),
  xxl: getPlaceholder({ quantity: 2 }),
}

const additionalPlaceholderHorizontalCardGBlock = {
  lg: getPlaceholder(cardCConfig),
  xl: getPlaceholder(cardCConfig),
  xxl: getPlaceholder(cardCConfig),
}

const additionalPlaceholderHorizontalCardHBlock = {
  lg: getPlaceholder({}),
  xl: getPlaceholder({}),
  xxl: getPlaceholder({}),
}

const HorizontalCard: FC = () => {
  const { width } = useWindowSize()
  const { position = '' } = getCurrentBreakpoint(width) ?? {}

  return (
    <HorizontalCardBlock block={{
      type: 'block',
      rows: [
        placeholderHorizontalCardABlock[position],
        placeholderHorizontalCardBBlock[position],
        placeholderHorizontalCardCBlock[position],
        placeholderHorizontalCardDBlock[position],
        placeholderHorizontalCardEBlock[position],
        placeholderHorizontalCardFBlock[position],
        additionalPlaceholderHorizontalCardGBlock[position],
        additionalPlaceholderHorizontalCardHBlock[position],
      ],
    }}
    />
  )
}

export default HorizontalCard
