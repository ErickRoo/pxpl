import { FC } from 'react'
import SideSideInterface from 'components/blocks/side_side/side_side.interface'
import SideSideBlock from 'components/blocks/side_side/side_side'
<<<<<<< HEAD
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
=======
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
  } as SideSideInterface,
  sm: {
    variant: 'image-left',
    image: PlaceholderRightImage,
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideInterface,
  md: {
    variant: 'image-left',
    image: PlaceholderRightImage,
    showCircles: true,
    ...placeholderBodyB,
  } as SideSideInterface,
  lg: {
    variant: 'image-left',
    image: PlaceholderRightImage,
    showCircles: true,
    ...placeholderBodyB,
  } as SideSideInterface,
  xl: {
    variant: 'image-left',
    image: PlaceholderLeftImage,
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideInterface,
  xxl: {
    variant: 'image-left',
    image: PlaceholderLeftImage,
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideInterface,
}

const placeholderSecondSideSideBlock = {
  md: {
    variant: 'image-right',
    image: PlaceholderRightImage,
    showCircles: true,
    ...placeholderBodyB,
  } as SideSideInterface,
  lg: {
    variant: 'image-right',
    image: PlaceholderRightImage,
    showCircles: true,
    ...placeholderBodyB,
  } as SideSideInterface,
  xl: {
    variant: 'image-right',
    image: PlaceholderLeftImage,
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideInterface,
  xxl: {
    variant: 'image-right',
    image: PlaceholderLeftImage,
    showCircles: true,
    ...placeholderBodyA,
  } as SideSideInterface,
}

const placeholderThirdSideSideBlock = {
  normal: {
    variant: 'image-left',
    image: PlaceholderSmBgImage,
    ...placeholderBodyA,
  } as SideSideInterface,
  sm: {
    variant: 'image-left',
    image: PlaceholderSmBgImage,
    ...placeholderBodyA,
  } as SideSideInterface,
  md: {
    variant: 'image-left',
    image: PlaceholderMdBgImage,
    ...placeholderBodyB,
  } as SideSideInterface,
  lg: {
    variant: 'image-left',
    image: PlaceholderLgBgImage,
    ...placeholderBodyB,
  } as SideSideInterface,
  xl: {
    variant: 'image-left',
    image: PlaceholderXlBgImage,
    ...placeholderBodyA,
  } as SideSideInterface,
  xxl: {
    variant: 'image-left',
    image: PlaceholderXlBgImage,
    ...placeholderBodyA,
  } as SideSideInterface,
}

const placeholderFourthSideSideBlock = {
  md: {
    variant: 'image-right',
    image: PlaceholderMdBgImage,
    ...placeholderBodyB,
  } as SideSideInterface,
  lg: {
    variant: 'image-right',
    image: PlaceholderLgBgImage,
    ...placeholderBodyB,
  } as SideSideInterface,
  xl: {
    variant: 'image-right',
    image: PlaceholderXlBgImage,
    ...placeholderBodyA,
  } as SideSideInterface,
  xxl: {
    variant: 'image-right',
    image: PlaceholderXlBgImage,
    ...placeholderBodyA,
  } as SideSideInterface,
}

const SideSide: FC = () => {
  const { width } = useWindowSize()
  const { position = '' } = getCurrentBreakpoint(width) ?? {}

  return (
    <div style={{ backgroundColor: '#eee' }}>
      <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
      <SideSideBlock block={placeholderFirstSideSideBlock[position]} />
      <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
      <SideSideBlock block={placeholderSecondSideSideBlock[position]} />
      <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
      <SideSideBlock block={placeholderThirdSideSideBlock[position]} />
      <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
      <SideSideBlock block={placeholderFourthSideSideBlock[position]} />
      <div style={{ padding: '3rem', backgroundColor: '#fff' }} />
    </div>
  )
}
>>>>>>> feature/module-side-side-2

export default SideSide
