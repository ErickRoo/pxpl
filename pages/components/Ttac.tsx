import { FC } from 'react'
import Ttac from 'components/blocks/ttac/ttac'
import TtacInterface from 'components/blocks/ttac/ttac.interface'
import PlaceholderImage from '../../assets/Ttac/placeholder.png'

const placeholderTtacABlock = {
  variant: 'normal',
  alignment: 'center',
  topTag: 'The Outreach Sales Execution Platform',
  headline: 'H2 headline single line',
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
} as TtacInterface

const placeholderTtacBBlock = {
  variant: 'headline-top',
  alignment: 'center',
  topTag: 'The Outreach Sales Execution Platform',
  headline: 'H2 headline single line',
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
} as TtacInterface

const placeholderTtacCBlock = {
  variant: 'normal',
  alignment: 'left',
  topTag: 'The Outreach Sales Execution Platform',
  headline: 'H2 headline single line',
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
} as TtacInterface

const PreFooter: FC = () => (
  <div style={{ backgroundColor: '#eee' }}>
    <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
    <Ttac block={placeholderTtacABlock} />
    <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
    <Ttac block={placeholderTtacBBlock} />
    <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
    <Ttac block={placeholderTtacCBlock} />
    <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
  </div>
)

export default PreFooter
