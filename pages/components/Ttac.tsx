import { FC } from 'react'
import Ttac from 'components/blocks/ttac/ttac'
import TtacInterface from 'components/blocks/ttac/ttac.interface'
import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import PlaceholderImage from '../../assets/Ttac/placeholder.png'

const topTagA = 'Eyebrow'
const topTagB = 'The Outreach Sales Execution Platform'

const headlineA = 'H2 headline single line'
const headlineB = 'One platform to rule them all.'
const headlineC = 'H3 headline \nmulti line'

const placeholderElements = {
  headline: headlineB,
  description: `Give revenue leaders an unfair advantage through industry-leading workflows, \n${
    'AI-generated insights, and freakishly accurate forcasting.'}`,
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
  } as TtacInterface,
  sm: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineA,
  } as TtacInterface,
  md: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'center',
    topTag: topTagB,
  } as TtacInterface,
  lg: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'center',
    topTag: topTagB,
  } as TtacInterface,
  xl: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineA,
  } as TtacInterface,
  xxl: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineA,
  } as TtacInterface,
}

const placeholderTtacBBlock = {
  normal: {
    ...placeholderElements,
    variant: 'headline-top',
    alignment: 'left',
    topTag: topTagA,
    headline: headlineC,
  } as TtacInterface,
  sm: {
    ...placeholderElements,
    variant: 'headline-top',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineC,
  } as TtacInterface,
  md: {
    ...placeholderElements,
    variant: 'headline-top',
    alignment: 'center',
    topTag: topTagB,
  } as TtacInterface,
  lg: {
    ...placeholderElements,
    variant: 'headline-top',
    alignment: 'center',
    topTag: topTagB,
  } as TtacInterface,
  xl: {
    ...placeholderElements,
    variant: 'headline-top',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineA,
  } as TtacInterface,
  xxl: {
    ...placeholderElements,
    variant: 'headline-top',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineA,
  } as TtacInterface,
}

const placeholderTtacCBlock = {
  normal: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'center',
    topTag: topTagA,
    headline: headlineC,
  } as TtacInterface,
  sm: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'left',
    topTag: topTagA,
    headline: headlineC,
  } as TtacInterface,
  md: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'left',
    topTag: topTagB,
  } as TtacInterface,
  lg: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'left',
    topTag: topTagB,
  } as TtacInterface,
  xl: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'left',
    topTag: topTagA,
    headline: headlineA,
  } as TtacInterface,
  xxl: {
    ...placeholderElements,
    variant: 'normal',
    alignment: 'left',
    topTag: topTagA,
    headline: headlineA,
  } as TtacInterface,
}

const PreFooter: FC = () => {
  const { width } = useWindowSize()
  const { position = '' } = getCurrentBreakpoint(width) ?? {}

  return (
    <div style={{ backgroundColor: '#eee' }}>
      <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
      <Ttac block={placeholderTtacABlock?.[position]} />
      <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
      <Ttac block={placeholderTtacBBlock?.[position]} />
      <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
      <Ttac block={placeholderTtacCBlock?.[position]} />
      <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
    </div>
  )
}

export default PreFooter
