import { FC } from 'react'
import ContentStackItemBlock from '../../components/blocks/content_stack_item/content_stack_item'

const ContentStack: FC = () => (
  <div className="container mx-auto max-w-screen-xl">
    <ContentStackItemBlock block={{
      type: 'Block',
      TextAndImageBlocks: [
        {
          // eslint-disable-next-line max-len
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque auctor neque duis elit et, arcu quis. Discover resources and training for topics all over the Outreach app.',
          image: '',
          headline: 'H4 headline with multiple lines of text and other characters.',
        },
        {
          // eslint-disable-next-line max-len
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque auctor neque duis elit et, arcu quis. Discover resources and training for topics all over the Outreach app.',
          image: '',
          headline: 'H4 headline with multiple lines of text and other characters.',
        },
        {
          // eslint-disable-next-line max-len
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque auctor neque duis elit et, arcu quis. Discover resources and training for topics all over the Outreach app.',
          image: '',
          headline: 'H4 headline with multiple lines of text and other characters.',
        },
      ],
    }}
    />
  </div>
)

export default ContentStack
