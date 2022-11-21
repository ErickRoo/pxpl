import React, { FC } from 'react'
import HeadlineTextInterface from 'components/blocks/headline_text/headline_text.interface'
import HeadlineTextBlock from 'components/blocks/headline_text/headline_text'

const placeholderCenterText = {
  type: 'Set_Replicator_BlockHeadlineText',
  variant: 'centerText',
  eyebrow: 'The Outreach Sales Execution Platform',
  headline: 'One platform to rule them all.',
  description: `Give revenue leaders an unfair advantage through industry-leading workflows,
    AI-generated insights, and freakishly accurate forcasting.`,
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  secondaryCta: {
    ctaText: 'Explore pricing',
    ctaLink: '#',
  },
} as HeadlineTextInterface

const placeholderCenterTextBgImage = {
  type: 'Set_Replicator_BlockHeadlineText',
  variant: 'centerText',
  eyebrow: 'The Outreach Sales Execution Platform',
  headline: 'One platform to rule them all.',
  description: `Give revenue leaders an unfair advantage through industry-leading workflows,
    AI-generated insights, and freakishly accurate forcasting.`,
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  secondaryCta: {
    ctaText: 'Explore pricing',
    ctaLink: '#',
  },
  background_image: '/images/headline-text-bg-default.png',
} as HeadlineTextInterface

const placeholderLeftText = {
  type: 'Set_Replicator_BlockHeadlineText',
  variant: 'leftText',
  eyebrow: 'The Outreach Sales Execution Platform',
  headline: 'One platform to rule them all.',
  description: `Give revenue leaders an unfair advantage through industry-leading workflows,
    AI-generated insights, and freakishly accurate forcasting.`,
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  secondaryCta: {
    ctaText: 'Explore pricing',
    ctaLink: '#',
  },
} as HeadlineTextInterface

const placeholderLeftTextBgImage = {
  type: 'Set_Replicator_BlockHeadlineText',
  variant: 'leftText',
  eyebrow: 'The Outreach Sales Execution Platform',
  headline: 'One platform to rule them all.',
  description: `Give revenue leaders an unfair advantage through industry-leading workflows,
    AI-generated insights, and freakishly accurate forcasting.`,
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  secondaryCta: {
    ctaText: 'Explore pricing',
    ctaLink: '#',
  },
  background_image: '/images/headline-text-bg-default.png',
} as HeadlineTextInterface

const HeadlineText: FC = () => (
  <>
    <HeadlineTextBlock block={placeholderCenterText} />
    <div style={{ padding: '2rem' }} />
    <HeadlineTextBlock block={placeholderLeftText} />
    <div style={{ padding: '2rem' }} />
    <HeadlineTextBlock block={placeholderLeftTextBgImage} />
    <div style={{ padding: '2rem' }} />
    <HeadlineTextBlock block={placeholderCenterTextBgImage} />
    <div style={{ padding: '2rem' }} />
  </>
)

export default HeadlineText
