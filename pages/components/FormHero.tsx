import { FC } from 'react'

import { FormHeroItemInterface } from 'components/blocks/form_hero/form_hero.interface'
import FormHeroBlock from 'components/blocks/form_hero/form_hero'

const placeholderFormHeroABlock = {
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

const FormHero: FC = () => (
  <FormHeroBlock block={{
    type: 'block',
    TextAndImageBlocks: [
      placeholderFormHeroABlock,
    ],
  }}
  />
)

export default FormHero
