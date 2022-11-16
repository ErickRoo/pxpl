import { FC } from 'react'
import Feature5050ItemInterface from 'components/generic/feature_50_50_item/feature_50_50_item.interface'
import Feature5050Block from 'components/blocks/feature_50_50/feature_50_50'
// import useWindowSize from 'styles/getBreakpointQuery'
// import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import PlaceholderLeftImage from '../../assets/Feature5050/placeholder-left.png'
import PlaceholderRightImage from '../../assets/Feature5050/placeholder-right.png'

const placeholderFirstSideSideBlock = {
  left: {
    alignment: 'bottom',
    eyebrow: 'Use Cases',
    headline: 'For every role. \nFor every goal.',
    description: 'Learn how the Outreach Sales Execution Platform serves your unique business.',
    primaryCta: {
      ctaText: 'Learn more',
      ctaLink: '#',
    },
    image: PlaceholderLeftImage,
  } as Feature5050ItemInterface,
  right: {
    alignment: 'top',
    eyebrow: 'Use Cases',
    headline: 'Your process. Your \npeople. Better results.',
    description: 'Learn how the Outreach Sales Execution Platform serves your unique business.',
    primaryCta: {
      ctaText: 'Learn more',
      ctaLink: '#',
    },
    image: PlaceholderRightImage,
  } as Feature5050ItemInterface,
}

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
