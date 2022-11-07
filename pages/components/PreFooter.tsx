import { FC } from 'react'
import PreFooterImageBlock from 'components/blocks/pre_footer_image/pre_footer_image'
import PlaceholderImage from '../../assets/Prefooter/placeholder.png'

const PreFooter: FC = () => (
  <div>
    <PreFooterImageBlock block={{ right_image: PlaceholderImage } as any} />
  </div>
)

export default PreFooter
