import { FC } from 'react'
import Feature5050ItemInterface from 'components/generic/feature_50_50_item/feature_50_50_item.interface'
import Feature5050Block from 'components/blocks/feature_50_50/feature_50_50'
// import useWindowSize from 'styles/getBreakpointQuery'
// import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
// import PlaceholderImage from '../../assets/Feature5050/placeholder.png'

const placeholderFirstSideSideBlock = {

} as Feature5050ItemInterface

const Feature5050: FC = () => {
  // const { width } = useWindowSize()
  // const { position = '' } = getCurrentBreakpoint(width) ?? {}

  return (
    <div style={{ backgroundColor: '#f1f1f1' }}>
      <Feature5050Block
        block={{
          type: 'Block',
          TextAndImageBlocks: [
            placeholderFirstSideSideBlock,
          ],
        }}
      />
    </div>
  )
}

export default Feature5050
