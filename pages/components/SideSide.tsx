import { FC } from 'react'
import SideSideItemInterface from 'components/generic/side_side_item/side_side_item.interface'
import SideSideBlock from 'components/blocks/side_side/side_side'
import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import PlaceholderLeftImage from '../../assets/Sideside/placeholder-left.png'
import PlaceholderRightImage from '../../assets/Sideside/placeholder-right.png'
import PlaceholderSmBgImage from '../../assets/Sideside/placeholder-sm-bg-image.png'
import PlaceholderMdBgImage from '../../assets/Sideside/placeholder-md-bg-image.png'
import PlaceholderLgBgImage from '../../assets/Sideside/placeholder-lg-bg-image.png'
import PlaceholderXlBgImage from '../../assets/Sideside/placeholder-xl-bg-image.png'

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
}

const placeholderBodyB = {
  topTag: 'Machine learning #FTW',
  headline: 'Guide sellers to success with Kaia real-time intelligence.',
  description,
  primaryCta,
}

const placeholderFirstSideSideBlock = {
  normal: {
    variant: 'image-left',
    image: PlaceholderRightImage,
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideItemInterface,
  sm: {
    variant: 'image-left',
    image: PlaceholderRightImage,
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideItemInterface,
  md: {
    variant: 'image-left',
    image: PlaceholderRightImage,
    showCircles: true,
    ...placeholderBodyB,
  } as SideSideItemInterface,
  lg: {
    variant: 'image-left',
    image: PlaceholderRightImage,
    showCircles: true,
    ...placeholderBodyB,
  } as SideSideItemInterface,
  xl: {
    variant: 'image-left',
    image: PlaceholderLeftImage,
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideItemInterface,
  xxl: {
    variant: 'image-left',
    image: PlaceholderLeftImage,
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideItemInterface,
}

const placeholderSecondSideSideBlock = {
  md: {
    variant: 'image-right',
    image: PlaceholderRightImage,
    showCircles: true,
    ...placeholderBodyB,
  } as SideSideItemInterface,
  lg: {
    variant: 'image-right',
    image: PlaceholderRightImage,
    showCircles: true,
    ...placeholderBodyB,
  } as SideSideItemInterface,
  xl: {
    variant: 'image-right',
    image: PlaceholderLeftImage,
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideItemInterface,
  xxl: {
    variant: 'image-right',
    image: PlaceholderLeftImage,
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideItemInterface,
}

const placeholderThirdSideSideBlock = {
  normal: {
    variant: 'image-left',
    image: PlaceholderSmBgImage,
    ...placeholderBodyA,
  } as SideSideItemInterface,
  sm: {
    variant: 'image-left',
    image: PlaceholderSmBgImage,
    ...placeholderBodyA,
  } as SideSideItemInterface,
  md: {
    variant: 'image-left',
    image: PlaceholderMdBgImage,
    ...placeholderBodyB,
  } as SideSideItemInterface,
  lg: {
    variant: 'image-left',
    image: PlaceholderLgBgImage,
    ...placeholderBodyB,
  } as SideSideItemInterface,
  xl: {
    variant: 'image-left',
    image: PlaceholderXlBgImage,
    ...placeholderBodyA,
  } as SideSideItemInterface,
  xxl: {
    variant: 'image-left',
    image: PlaceholderXlBgImage,
    ...placeholderBodyA,
  } as SideSideItemInterface,
}

const placeholderFourthSideSideBlock = {
  md: {
    variant: 'image-right',
    image: PlaceholderMdBgImage,
    ...placeholderBodyB,
  } as SideSideItemInterface,
  lg: {
    variant: 'image-right',
    image: PlaceholderLgBgImage,
    ...placeholderBodyB,
  } as SideSideItemInterface,
  xl: {
    variant: 'image-right',
    image: PlaceholderXlBgImage,
    ...placeholderBodyA,
  } as SideSideItemInterface,
  xxl: {
    variant: 'image-right',
    image: PlaceholderXlBgImage,
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
