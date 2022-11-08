import { FC } from 'react'
import SideSideInterface from 'components/blocks/side_side/side_side.interface'

import SideSideBlock from 'components/blocks/side_side/side_side'

const placeholderSideSideBlock = {
  description: 'AI and Machine Learning are at the core of everything Outreach does for your Sales Leaders.',
} as unknown as SideSideInterface

const SideSide: FC = () => (
  <div>
    <SideSideBlock block={placeholderSideSideBlock} />
    <div style={{ margin: '3rem' }} />
  </div>
)

export default SideSide
