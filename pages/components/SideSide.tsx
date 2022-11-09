import { FC } from 'react'
import SideSideInterface from 'components/blocks/side_side/side_side.interface'
import SideSideBlock from 'components/blocks/side_side/side_side'
import PlaceholderAImage from '../../assets/Sideside/placeholder-a.png'
import PlaceholderBImage from '../../assets/Sideside/placeholder-b.png'

const placeholderFirstSideSideBlock = {
  topTag: 'Eyebrow sentence case',
  heading: 'H2 headline that can be up to four lines or less ipsum.',
  description: 'AI and Machine Learning are at the core of everything Outreach does for your Sales Leaders.',
  image: PlaceholderAImage,
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  showCircles: true,
} as unknown as SideSideInterface

const placeholderSecondSideSideBlock = {
  topTag: 'Eyebrow sentence case',
  reverse: true,
  heading: 'H2 headline that can be up to four lines or less ipsum.',
  description: 'AI and Machine Learning are at the core of everything Outreach does for your Sales Leaders.',
  image: PlaceholderAImage,
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  showCircles: true,
} as unknown as SideSideInterface

const placeholderThirdSideSideBlock = {
  topTag: 'Eyebrow sentence case',
  heading: 'H2 headline that can be up to four lines or less ipsum.',
  description: 'AI and Machine Learning are at the core of everything Outreach does for your Sales Leaders.',
  image: PlaceholderBImage,
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
} as unknown as SideSideInterface

const placeholderFourthSideSideBlock = {
  topTag: 'Eyebrow sentence case',
  reverse: true,
  heading: 'H2 headline that can be up to four lines or less ipsum.',
  description: 'AI and Machine Learning are at the core of everything Outreach does for your Sales Leaders.',
  image: PlaceholderBImage,
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
} as unknown as SideSideInterface

const SideSide: FC = () => (
  <div style={{ backgroundColor: '#eee' }}>
    <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
    <SideSideBlock block={placeholderFirstSideSideBlock} />
    <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
    <SideSideBlock block={placeholderSecondSideSideBlock} />
    <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
    <SideSideBlock block={placeholderThirdSideSideBlock} />
    <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
    <SideSideBlock block={placeholderFourthSideSideBlock} />
    <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
  </div>
)

export default SideSide
