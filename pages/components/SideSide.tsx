import { FC } from 'react'
import SideSideItemInterface from 'components/generic/side_side_item/side_side_item.interface'
import SideSideBlock from 'components/blocks/side_side/side_side'
import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import PlaceholderImage from '../../assets/Sideside/placeholder.png'

const description = 'AI and Machine Learning are at the core of everything \nOutreach does for your Sales Leaders.'

const primaryCta = {
  ctaText: 'Learn more',
  ctaLink: '#',
}

const placeholderBodyA = {
  topTag: 'Eyebrow sentence case',
  headline: 'H2 headline that can be up to four lines or less ipsum.',
  description,
  primaryCta,
  image: PlaceholderImage,
}

const placeholderBodyB = {
  topTag: 'Machine learning #FTW',
  headline: 'Guide sellers to success with Kaia real-time intelligence.',
  description,
  primaryCta,
  image: PlaceholderImage,
}

const placeholderFirstSideSideBlock = {
  normal: {
    variant: 'image-left',
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideItemInterface,
  sm: {
    variant: 'image-left',
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideItemInterface,
  md: {
    variant: 'image-left',
    showCircles: true,
    ...placeholderBodyB,
  } as SideSideItemInterface,
  lg: {
    variant: 'image-left',
    showCircles: true,
    ...placeholderBodyB,
  } as SideSideItemInterface,
  xl: {
    variant: 'image-left',
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideItemInterface,
  xxl: {
    variant: 'image-left',
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideItemInterface,
}

const placeholderSecondSideSideBlock = {
  md: {
    variant: 'image-right',
    showCircles: true,
    ...placeholderBodyB,
  } as SideSideItemInterface,
  lg: {
    variant: 'image-right',
    showCircles: true,
    ...placeholderBodyB,
  } as SideSideItemInterface,
  xl: {
    variant: 'image-right',
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideItemInterface,
  xxl: {
    variant: 'image-right',
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideItemInterface,
}

const placeholderThirdSideSideBlock = {
  normal: {
    variant: 'image-left',
    ...placeholderBodyA,
  } as SideSideItemInterface,
  sm: {
    variant: 'image-left',
    ...placeholderBodyA,
  } as SideSideItemInterface,
  md: {
    variant: 'image-left',
    ...placeholderBodyB,
  } as SideSideItemInterface,
  lg: {
    variant: 'image-left',
    ...placeholderBodyB,
  } as SideSideItemInterface,
  xl: {
    variant: 'image-left',
    ...placeholderBodyA,
  } as SideSideItemInterface,
  xxl: {
    variant: 'image-left',
    ...placeholderBodyA,
  } as SideSideItemInterface,
}

const placeholderFourthSideSideBlock = {
  md: {
    variant: 'image-right',
    ...placeholderBodyB,
  } as SideSideItemInterface,
  lg: {
    variant: 'image-right',
    ...placeholderBodyB,
  } as SideSideItemInterface,
  xl: {
    variant: 'image-right',
    ...placeholderBodyA,
  } as SideSideItemInterface,
  xxl: {
    variant: 'image-right',
    ...placeholderBodyA,
  } as SideSideItemInterface,
}

const SideSide: FC = () => {
  const { width } = useWindowSize()
  const { position = '' } = getCurrentBreakpoint(width) ?? {}

  return (
    <div style={{ backgroundColor: '#f1f1f1' }}>
      <SideSideBlock
        block={{
          type: 'Block',
          TextAndImageBlocks: [
            placeholderFirstSideSideBlock[position],
            placeholderSecondSideSideBlock[position],
            placeholderThirdSideSideBlock[position],
            placeholderFourthSideSideBlock[position],
          ],
        }}
      />
    </div>
  )
}

export default SideSide
