import { FC } from 'react'

import FaqInterface from 'components/blocks/faq/faq.interface'
import FaqBlock from 'components/blocks/faq/faq'

const placeholderFaqBlock = {
  type: 'Block',
  topTag: 'Support',
  headline: 'Frequently asked questions',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque auctor neque duis elit et, 
  arcu quis. Discover resources and training for topics all over the Outreach app.`,
  primaryCta: {
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  questions: [
    {
      headline: 'Where is our data stored?',
      content: `__Protect your data__ and systems with a **platform backed** by the highest security 
      standards. Lorem ipsum soler imut. ~~Strikethrough option~~ also.`,
      primaryCta: {
        ctaText: 'Learn more',
        ctaLink: '#',
      },
    },
    {
      headline: `What is your approach to security incidents? When 
      and how are customers notified in the event of a 
      confirmed incident involving their data?`,
      content: `Protect your data and systems with a platform backed by the highest security 
      standards. Lorem ipsum soler imut. Strikethrough option also.`,
      primaryCta: {
        ctaText: 'Learn more',
        ctaLink: '#',
      },
    },
    {
      headline: 'Is our data used to sell or build advertising products?',
      content: `Protect your data and systems with a platform backed by the highest security 
      standards. Lorem ipsum soler imut. Strikethrough option also.`,
      primaryCta: {
        ctaText: 'Learn more',
        ctaLink: '#',
      },
    },
  ],
} as FaqInterface

const Faq: FC = () => (
  <div>
    <FaqBlock block={placeholderFaqBlock} />
  </div>
)

export default Faq
