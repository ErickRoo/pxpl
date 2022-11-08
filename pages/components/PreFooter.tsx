import { FC } from 'react'
import PreFooterImageBlock from 'components/blocks/pre_footer/pre_footer'
import PreFooterInterface from 'components/blocks/pre_footer/pre_footer.interface'
import PlaceholderImage from '../../assets/Prefooter/placeholder.png'

const placeholderPreFooterImageBlock = {
  variant: 'image',
  headline: 'H3 headline that is titlecase.',
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

const PreFooter: FC = () => (
  <div>
    <PreFooterImageBlock block={placeholderPreFooterImageBlock} />
  </div>
)

export default PreFooter
