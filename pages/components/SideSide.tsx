import { FC } from 'react'
import SideSideInterface from 'components/blocks/side_side/side_side.interface'
import SideSideBlock from 'components/blocks/side_side/side_side'
import PlaceholderImage from '../../assets/Sideside/placeholder.png'

const placeholderSideSideBlock = {
  heading: 'H2 headline that can be up to four lines or less ipsum.',
  description: 'AI and Machine Learning are at the core of everything Outreach does for your Sales Leaders.',
  image: PlaceholderImage,
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
} as unknown as SideSideInterface

const SideSide: FC = () => (
  <div style={{ backgroundColor: '#eee' }}>
    <SideSideBlock block={placeholderSideSideBlock} />
    <div style={{ margin: '3rem' }} />
  </div>
)

export default SideSide
