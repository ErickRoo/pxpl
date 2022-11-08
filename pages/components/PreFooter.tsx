import { FC } from 'react'
import PreFooterImageBlock from 'components/blocks/pre_footer/pre_footer'
import PreFooterInterface from 'components/blocks/pre_footer/pre_footer.interface'
import PlaceholderImage from '../../assets/Prefooter/placeholder.png'

const placeholderPreFooterImageBlock = {
  variant: 'image',
  headlineLeft: 'H3 headline that is titlecase.',
  description: 'Get the latest insights from the best in the industry. Every week we provide new content to help optimize your results.',
  primaryCta: {
    ctaText: 'Try Outreach',
    ctaLink: '#',
  },
  secondaryCta: {
    ctaText: 'Explore pricing',
    ctaLink: '#',
  },
  right_image: PlaceholderImage,
} as PreFooterInterface

const placeholderPreFooterHeadlineBlock = {
  variant: 'headline',
  headlineLeft: 'H2 headline that is titlecase.',
  headlineRight: 'H4 headline that is titlecase.',
  description: 'Get the latest insights from the best in the industry. Every week we provide new content to help optimize your results.',
  primaryCta: {
    ctaText: 'Try Outreach',
    ctaLink: '#',
  },
  secondaryCta: {
    ctaText: 'Explore pricing',
    ctaLink: '#',
  },
} as PreFooterInterface

const PreFooter: FC = () => (
  <div>
    <PreFooterImageBlock block={placeholderPreFooterImageBlock} />
    <div style={{ margin: '3rem' }} />
    <PreFooterImageBlock block={placeholderPreFooterHeadlineBlock} />
  </div>
)

export default PreFooter
