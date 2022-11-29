import React, { FC } from 'react'
import Ttac from 'components/blocks/ttac/ttac'
import TtacItemInterface from 'components/generic/ttac_item/ttac_item.interface'
import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import PlaceholderImage from '../../assets/Ttac/placeholder.png'

const topTagA = 'Eyebrow'
const topTagB = 'The Outreach Sales Execution Platform'

const headlineA = 'H2 headline single line'
const headlineB = 'One platform to rule them all.'
const headlineC = 'H3 headline multi line'

const placeholderElements = {
  headline: headlineB,
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
  image: PlaceholderImage,
}

const placeholderTtacABlock = {
  normal: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineA,
  } as TtacItemInterface,
  sm: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineA,
  } as TtacItemInterface,
  md: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'center',
    topTag: topTagB,
  } as TtacItemInterface,
  lg: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'center',
    topTag: topTagB,
  } as TtacItemInterface,
  xl: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineA,
  } as TtacItemInterface,
  xxl: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineA,
  } as TtacItemInterface,
}

const placeholderTtacBBlock = {
  normal: {
    ...placeholderElements,
    variant: 'headline-top',
    alignment: 'left',
    topTag: topTagA,
    headline: headlineC,
  } as TtacItemInterface,
  sm: {
    ...placeholderElements,
    variant: 'headline-top',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineC,
  } as TtacItemInterface,
  md: {
    ...placeholderElements,
    variant: 'headline-top',
    alignment: 'center',
    topTag: topTagB,
  } as TtacItemInterface,
  lg: {
    ...placeholderElements,
    variant: 'headline-top',
    alignment: 'center',
    topTag: topTagB,
  } as TtacItemInterface,
  xl: {
    ...placeholderElements,
    variant: 'headline-top',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineA,
  } as TtacItemInterface,
  xxl: {
    ...placeholderElements,
    variant: 'headline-top',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineA,
  } as TtacItemInterface,
}

const placeholderTtacCBlock = {
  normal: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineC,
    additionalSpace: true,
  } as TtacItemInterface,
  sm: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'left',
    topTag: topTagA,
    headline: headlineC,
    additionalSpace: true,
  } as TtacItemInterface,
  md: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'left',
    topTag: topTagB,
  } as TtacItemInterface,
  lg: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'left',
    topTag: topTagB,
  } as TtacItemInterface,
  xl: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'left',
    topTag: topTagA,
    headline: headlineA,
  } as TtacItemInterface,
  xxl: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'left',
    topTag: topTagA,
    headline: headlineA,
  } as TtacItemInterface,
}

const PreFooter: FC = () => {
  const { width } = useWindowSize()
  const { position = '' } = getCurrentBreakpoint(width) ?? {}

  return (
    <div style={{ backgroundColor: '#f1f1f1' }}>
      <Ttac block={{
        type: 'block',
        TextAndImageBlocks: [
          placeholderTtacABlock?.[position],
          placeholderTtacBBlock?.[position],
          placeholderTtacCBlock?.[position],
        ],
      }}
      />
    </div>
  )
}

export default PreFooter
