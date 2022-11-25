import React, { FC } from 'react'

import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import useWindowSize from 'styles/getBreakpointQuery'
import HeadlineTextInterface from 'components/blocks/headline_text/headline_text.interface'
import HeadlineTextBlock from 'components/blocks/headline_text/headline_text'

const getHeadlinePlaceHolder = ({
  centered = false, bgLinkA = false, bgLinkB = false, alternativeA = false, alternativeB = false,
}) => {
  let headline = 'One platform to rule them all.'
  if (alternativeA) headline = 'H3 headline multi line'
  else if (alternativeB) headline = 'H2 headline single line'

  let background_image = ''
  if (bgLinkA) background_image = '/images/headline-text-bg-default.png'
  else if (bgLinkB) background_image = '/images/headline-text-bg-mobile.png'

  return {
    type: 'Set_Replicator_BlockHeadlineText',
    variant: centered ? 'centerText' : 'leftText',
    eyebrow: (alternativeA || alternativeB) ? 'Eyebrow' : 'The Outreach Sales Execution Platform',
    headline,
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
    background_image,
  } as HeadlineTextInterface
}

const placeholderCenterText = {
  normal: getHeadlinePlaceHolder({ centered: true, alternativeB: true }),
  sm: getHeadlinePlaceHolder({ centered: true, alternativeB: true }),
  md: getHeadlinePlaceHolder({ centered: true }),
  lg: getHeadlinePlaceHolder({ centered: true }),
  xl: getHeadlinePlaceHolder({ centered: true, alternativeB: true }),
  xxl: getHeadlinePlaceHolder({ centered: true, alternativeB: true }),
}

const placeholderCenterTextBgImage = {
  normal: getHeadlinePlaceHolder({ centered: true, alternativeA: true, bgLinkB: true }),
  sm: getHeadlinePlaceHolder({ centered: true, alternativeB: true, bgLinkB: true }),
  md: getHeadlinePlaceHolder({ centered: true, bgLinkA: true }),
  lg: getHeadlinePlaceHolder({ centered: true, bgLinkA: true }),
  xl: getHeadlinePlaceHolder({ centered: true, alternativeB: true, bgLinkA: true }),
  xxl: getHeadlinePlaceHolder({ centered: true, alternativeB: true, bgLinkA: true }),
}

const placeholderLeftText = {
  normal: getHeadlinePlaceHolder({ alternativeA: true }),
  sm: getHeadlinePlaceHolder({ alternativeB: true }),
  md: getHeadlinePlaceHolder({}),
  lg: getHeadlinePlaceHolder({}),
  xl: getHeadlinePlaceHolder({ alternativeB: true }),
  xxl: getHeadlinePlaceHolder({ alternativeB: true }),
}

const placeholderLeftTextBgImage = {
  normal: getHeadlinePlaceHolder({ alternativeA: true, bgLinkB: true }),
  sm: getHeadlinePlaceHolder({ alternativeB: true, bgLinkB: true }),
  md: getHeadlinePlaceHolder({ bgLinkA: true }),
  lg: getHeadlinePlaceHolder({ bgLinkA: true }),
  xl: getHeadlinePlaceHolder({ alternativeB: true, bgLinkA: true }),
  xxl: getHeadlinePlaceHolder({ alternativeB: true, bgLinkA: true }),
}

const HeadlineText: FC = () => {
  const { width } = useWindowSize()
  const { position = '' } = getCurrentBreakpoint(width) ?? {}

  return (
    <>
      <HeadlineTextBlock block={placeholderCenterText[position]} />
      <div style={{ padding: '2rem' }} />
      <HeadlineTextBlock block={placeholderLeftText[position]} />
      <div style={{ padding: '2rem' }} />
      <HeadlineTextBlock block={placeholderLeftTextBgImage[position]} />
      <div style={{ padding: '2rem' }} />
      <HeadlineTextBlock block={placeholderCenterTextBgImage[position]} />
      <div style={{ padding: '2rem' }} />
    </>
  )
}

export default HeadlineText
