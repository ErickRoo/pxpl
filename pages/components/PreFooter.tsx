import { FC } from 'react'
import PreFooterBlock from 'components/blocks/pre_footer/pre_footer'
import PlaceholderImage from '../../assets/Prefooter/placeholder.png'

const PreFooter: FC = () => (
  <div>
    <PreFooterBlock block={{ right_image: PlaceholderImage } as any} />
  </div>
)

export default PreFooter
