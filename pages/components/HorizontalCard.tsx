import { FC } from 'react'

import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import HorizontalCardBlock from 'components/blocks/horizontal_card/horizontal_card'
import PlaceholderIconImage from '../../assets/HorizontalCard/placeholder-icon.png'
import PlaceholderImage from '../../assets/HorizontalCard/placeholder.png'

const getPlaceholder = ({
  large = false, medium = false, right = false, tagsA = false, tagsB = false, tagsC = false, textPrimaryCta = false, secondaryCta = false,
}) => {
  let tags = []
  if (tagsA) tags = ['Lorem ipsum', 'Lorem ipsum longer', 'Lorem ipsum']
  else if (tagsB) tags = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']
  else if (tagsC) tags = ['Lorem ipsum', 'Lorem ipsum']

  let variant = 'small'
  if (medium) variant = 'medium'
  else if (large) variant = 'large'

  return {
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
}

const placeholderHorizontalCardABlock = {
  normal: getPlaceholder({
    large: true, tagsB: true, secondaryCta: true, textPrimaryCta: true,
  }),
  sm: getPlaceholder({
    large: true, tagsB: true, secondaryCta: true, textPrimaryCta: true,
  }),
  md: getPlaceholder({
    large: true, tagsB: true, secondaryCta: true, textPrimaryCta: true,
  }),
  lg: getPlaceholder({
    large: true, tagsB: true, secondaryCta: true, textPrimaryCta: true,
  }),
  xl: getPlaceholder({
    large: true, tagsA: true, secondaryCta: true, textPrimaryCta: true,
  }),
  xxl: getPlaceholder({
    large: true, tagsA: true, secondaryCta: true, textPrimaryCta: true,
  }),
}

const placeholderHorizontalCardBBlock = {
  normal: getPlaceholder({
    large: true, right: true, tagsB: true, secondaryCta: true, textPrimaryCta: true,
  }),
  sm: getPlaceholder({
    large: true, right: true, tagsB: true, secondaryCta: true, textPrimaryCta: true,
  }),
  md: getPlaceholder({
    large: true, right: true, tagsB: true, secondaryCta: true, textPrimaryCta: true,
  }),
  lg: getPlaceholder({
    large: true, right: true, tagsB: true, secondaryCta: true, textPrimaryCta: true,
  }),
  xl: getPlaceholder({
    large: true, right: true, tagsA: true, secondaryCta: true, textPrimaryCta: true,
  }),
  xxl: getPlaceholder({
    large: true, right: true, tagsA: true, secondaryCta: true, textPrimaryCta: true,
  }),
}

const placeholderHorizontalCardCBlock = {
  normal: getPlaceholder({ medium: true, tagsC: true }),
  sm: getPlaceholder({ medium: true, tagsC: true }),
  md: getPlaceholder({ medium: true, tagsC: true }),
  lg: getPlaceholder({ medium: true, tagsC: true }),
  xl: getPlaceholder({ medium: true, right: true, tagsC: true }),
  xxl: getPlaceholder({ medium: true, right: true, tagsC: true }),
}

const placeholderHorizontalCardDBlock = {
  normal: getPlaceholder({ medium: true, right: true, tagsC: true }),
  sm: getPlaceholder({ medium: true, right: true, tagsC: true }),
  md: getPlaceholder({ medium: true, right: true, tagsC: true }),
  lg: getPlaceholder({ medium: true, right: true, tagsC: true }),
  xl: getPlaceholder({ medium: true, right: true, tagsC: true }),
  xxl: getPlaceholder({ medium: true, right: true, tagsC: true }),
}

const placeholderHorizontalCardEBlock = {
  xl: getPlaceholder({ medium: true, tagsC: true }),
  xxl: getPlaceholder({ medium: true, tagsC: true }),
}

const placeholderHorizontalCardFBlock = {
  xl: getPlaceholder({ medium: true, tagsC: true }),
  xxl: getPlaceholder({ medium: true, tagsC: true }),
}

const placeholderHorizontalCardGBlock = {
  normal: getPlaceholder({}),
  sm: getPlaceholder({ right: true }),
  md: getPlaceholder({ right: true }),
  lg: getPlaceholder({ right: true }),
  xl: getPlaceholder({ right: true }),
  xxl: getPlaceholder({ right: true }),
}

const placeholderHorizontalCardHBlock = {
  normal: getPlaceholder({ right: true }),
  sm: getPlaceholder({}),
  md: getPlaceholder({}),
  lg: getPlaceholder({}),
  xl: getPlaceholder({ right: true }),
  xxl: getPlaceholder({ right: true }),
}

const placeholderHorizontalCardIBlock = {
  xl: getPlaceholder({}),
  xxl: getPlaceholder({}),
}

const placeholderHorizontalCardJBlock = {
  xl: getPlaceholder({}),
  xxl: getPlaceholder({}),
}

const HorizontalCard: FC = () => {
  const { width } = useWindowSize()
  const { position = '' } = getCurrentBreakpoint(width) ?? {}

  return (
    <HorizontalCardBlock block={{
      type: 'block',
      TextAndImageBlocks: [
        placeholderHorizontalCardABlock[position],
        placeholderHorizontalCardBBlock[position],
        placeholderHorizontalCardCBlock[position],
        placeholderHorizontalCardDBlock[position],
        placeholderHorizontalCardEBlock[position],
        placeholderHorizontalCardFBlock[position],
        placeholderHorizontalCardGBlock[position],
        placeholderHorizontalCardHBlock[position],
        placeholderHorizontalCardIBlock[position],
        placeholderHorizontalCardJBlock[position],
      ],
    }}
    />
  )
}

export default HorizontalCard
