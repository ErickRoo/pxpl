import { FC } from 'react'

import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import ContentCardBlock from 'components/blocks/content_card/content_card'
import CardOutlineItemInterface from 'components/generic/card_outline_item/card_outline_item.interface'
import PlaceholderImage from '../../assets/ContentCard/placeholder_image.png'
import PlaceholderIcon from '../../assets/ContentCard/placeholder_icon.png'

const placeholderCardCommon = {
  category: 'Category',
  icon: PlaceholderIcon,
  headline: 'H4 headline with multiple lines of text and other characters',
  ctaLink: '#',
} as unknown as CardOutlineItemInterface

const placeholderCardABlock = {
  ...placeholderCardCommon,
  image: PlaceholderImage,
  eyebrow: 'Eyebrow',
  date: '02.22.2022',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque auctor neque duis elit et, arcu quis.',
  ctaLink: '#',
  tags: ['Lorem ipsum', 'Lorem ipsum', 'Lorem', 'Lorem', 'Lorem ipsum diem'],
} as unknown as CardOutlineItemInterface

const placeholderCardBBlock = {
  ...placeholderCardCommon,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque auctor neque duis elit et, arcu quis.',
  ctaLink: '#',
  tags: ['Lorem ipsum', 'Lorem ipsum', 'Lorem', 'Lorem', 'Lorem ipsum diem'],
} as unknown as CardOutlineItemInterface

const placeholderCardCBlock = {
  ...placeholderCardCommon,
  tags: ['Lorem ipsum', 'Lorem ipsum', 'Lorem', 'Lorem', 'Lorem ipsum diem'],
} as unknown as CardOutlineItemInterface

const placeholderCardDBlock = {
  ...placeholderCardCommon,
} as unknown as CardOutlineItemInterface

const placeholderCardEBlock = {
  category: 'Category',
  headline: 'H6 headline with multiple lines of text and other characters',
  ctaLink: '#',
} as unknown as CardOutlineItemInterface

const placeholderCardFBlock = {
  icon: PlaceholderIcon,
  headline: 'H6 headline with multiple lines of text and other characters',
  ctaLink: '#',
} as unknown as CardOutlineItemInterface

const placeholderCardGBlock = {
  ...placeholderCardCommon,
  eyebrow: 'Eyebrow',
  date: '02.22.2022',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque auctor neque duis elit et, arcu quis.',
  ctaLink: '#',
  tags: ['Lorem ipsum', 'Lorem ipsum', 'Lorem', 'Lorem', 'Lorem ipsum diem'],
} as unknown as CardOutlineItemInterface

const placeholdersEnum = {
  a: placeholderCardABlock,
  b: placeholderCardBBlock,
  c: placeholderCardCBlock,
  d: placeholderCardDBlock,
  e: placeholderCardEBlock,
  f: placeholderCardFBlock,
  g: placeholderCardGBlock,
}

const getOnePlaceholder = (type: string, quantity: number) => {
  return {
    quantity,
    items: Array(quantity).fill({}).map(() => placeholdersEnum[type]),
  }
}

const getRows = (rowList: string[]) => rowList.map((oneRow) => {
  const oneConfig = oneRow.split('-')
  return getOnePlaceholder(oneConfig[0], Number(oneConfig[1]))
})

const placeholder = {
  normal: getRows(['a-2', 'a-1', 'g-1', 'c-1', 'd-1', 'e-1', 'f-1']),
  sm: getRows(['a-2', 'a-1', 'g-1', 'c-1', 'd-1', 'e-1', 'f-1']),
  md: getRows(['a-2', 'a-3', 'a-4', 'a-2', 'g-2', 'c-2', 'd-2', 'e-2', 'f-2']),
  lg: getRows(['a-2', 'a-3', 'a-4', 'a-3', 'g-3', 'c-3', 'd-3', 'e-3', 'f-3']),
  xl: getRows(['a-2', 'a-3', 'a-4', 'a-3', 'b-3', 'c-3', 'd-3', 'e-3', 'f-3']),
  xxl: getRows(['a-2', 'a-3', 'a-4', 'a-3', 'b-3', 'c-3', 'd-3', 'e-3', 'f-3']),
}

const ContentCard: FC = () => {
  const { width } = useWindowSize()
  const { position = '' } = getCurrentBreakpoint(width) ?? {}

  return (
    <ContentCardBlock block={{
      type: 'block',
      rows: placeholder[position],
    }}
    />
  )
}

export default ContentCard
