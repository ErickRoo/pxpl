import { FC } from 'react'

import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import { FormHeroItemInterface } from 'components/blocks/form_hero/form_hero.interface'
import FormHeroBlock from 'components/blocks/form_hero/form_hero'

const placeholderFormHeroCommon = {
  variant: 'normal',
  eyebrow: 'Eyebrow',
  headline: 'How top-performing teams use sales tech differently',
  subHeadline: 'Subheadline giving detail.',
  bodyTopText: 'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  listText: [
    'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  ],
  bodyBottomText: 'Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  secondaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
} as FormHeroItemInterface

const placeholderFormHeroABlock = {
  normal: placeholderFormHeroCommon,
  sm: placeholderFormHeroCommon,
  md: placeholderFormHeroCommon,
  lg: placeholderFormHeroCommon,
  xl: placeholderFormHeroCommon,
  xxl: placeholderFormHeroCommon,
}

const placeholderFormHeroBBlock = {
  normal: {
    ...placeholderFormHeroCommon,
    variant: 'alternative',
  },
  sm: {
    ...placeholderFormHeroCommon,
    variant: 'alternative',
  },
  md: {
    ...placeholderFormHeroCommon,
    variant: 'alternative',
  },
}

const FormHero: FC = () => {
  const { width } = useWindowSize()
  const { position = '' } = getCurrentBreakpoint(width) ?? {}

  return (
    <FormHeroBlock block={{
      type: 'block',
      TextAndImageBlocks: [
        placeholderFormHeroABlock?.[position],
        placeholderFormHeroBBlock?.[position],
      ],
    }}
    />
  )
}

export default FormHero
