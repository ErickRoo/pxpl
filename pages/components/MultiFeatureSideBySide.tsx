import React, { FC } from 'react'
import MultiFeatureSideBySideBlock from 'components/blocks/multi_feature_side_by_side/multi_feature_side_by_side'
import placeholderImage from '../../assets/MultiFeatureSideBySide/placeholder.png'

const ctaButton = {
  text: 'Learn more',
  href: '#',
}
const headline = 'The benefits are clear'
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Consectetur'
const items = [
  {
    order: 1,
    headline: 'Item name',
    description:
      'Manage profiles, workflows, and teams. Outreach maintains multiple 3rd party certifications for security and privacy.',
    ctaButton,
    image: placeholderImage,
  },
  {
    order: 2,
    headline: 'Item name',
    description:
      'Manage profiles, workflows, and teams. Outreach maintains multiple 3rd party certifications for security and privacy.',
    ctaButton,
    image: placeholderImage,
  },
  {
    order: 3,
    headline: 'Item name',
    description:
      'Manage profiles, workflows, and teams. Outreach maintains multiple 3rd party certifications for security and privacy.',
    ctaButton,
    image: placeholderImage,
  },
  {
    order: 4,
    headline: 'Item name',
    description:
      'Manage profiles, workflows, and teams. Outreach maintains multiple 3rd party certifications for security and privacy.',
    ctaButton,
    image: placeholderImage,
  },
  {
    order: 5,
    headline: 'Item name',
    description:
      'Manage profiles, workflows, and teams. Outreach maintains multiple 3rd party certifications for security and privacy.',
    ctaButton,
    image: placeholderImage,
  },
  {
    order: 6,
    headline: 'Item name',
    description:
      'Manage profiles, workflows, and teams. Outreach maintains multiple 3rd party certifications for security and privacy.',
    ctaButton,
    image: placeholderImage,
  },
  {
    order: 7,
    headline: 'Item name',
    description:
      'Manage profiles, workflows, and teams. Outreach maintains multiple 3rd party certifications for security and privacy.',
    ctaButton,
    image: placeholderImage,
  },
  {
    order: 8,
    headline: 'Item name',
    description:
      'Manage profiles, workflows, and teams. Outreach maintains multiple 3rd party certifications for security and privacy.',
    ctaButton,
    image: placeholderImage,
  },
]

const placeholder = {
  headline,
  description,
  items,
}

const MultiFeatureSideBySide: FC = () => (
  <MultiFeatureSideBySideBlock
    block={{
      type: 'Block',
      ...placeholder,
    }}
  />

)

export default MultiFeatureSideBySide
