import { FC } from 'react'
import SideSideInterface from 'components/blocks/side_side/side_side.interface'
import SideSideBlock from 'components/blocks/side_side/side_side'
import PlaceholderImage from '../../assets/Sideside/placeholder.png'

const placeholderFirstSideSideBlock = {
  topTag: 'Eyebrow sentence case',
  heading: 'H2 headline that can be up to four lines or less ipsum.',
  description: 'AI and Machine Learning are at the core of everything Outreach does for your Sales Leaders.',
  image: PlaceholderImage,
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
  image: PlaceholderImage,
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  showCircles: true,
} as unknown as SideSideInterface

const SideSide: FC = () => (
  <div style={{ backgroundColor: '#eee' }}>
    <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
    <SideSideBlock block={placeholderFirstSideSideBlock} />
    <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
    <SideSideBlock block={placeholderSecondSideSideBlock} />
    <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
  </div>
)

export default SideSide
