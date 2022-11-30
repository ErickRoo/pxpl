import { FC } from 'react'

import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import RelatedArticleBlock from 'components/blocks/related_article/related_article'
import RelatedArticleInterface from 'components/blocks/related_article/related_article.interface'
import CardOutlineItemInterface from 'components/generic/card_outline_item/card_outline_item.interface'
import PlaceholderImage from '../../assets/ContentCard/placeholder_image.png'
import PlaceholderIcon from '../../assets/ContentCard/placeholder_icon.png'

const placeholderCardBlock = {
  category: 'Category',
  image: PlaceholderImage,
  icon: PlaceholderIcon,
  eyebrow: 'Eyebrow',
  date: '02.22.2022',
  headline: 'H6 headline with multiple lines of text and other characters',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque auctor neque duis elit et, arcu quis.',
  ctaLink: '#',
  tags: ['Lorem ipsum', 'Lorem ipsum', 'Lorem', 'Lorem', 'Lorem ipsum diem'],
} as unknown as CardOutlineItemInterface

const getOnePlaceholder = (quantity: number) => {
  return {
    quantity,
    items: Array(quantity).fill({}).map(() => placeholderCardBlock),
  }
}

const placeholderRelatedArticleBlock = {
  type: 'block',
  headline: 'Related',
  cta: {
    ctaText: 'All Resources',
    ctaLink: '#',
  },
  articles: {},
  promo: {
    headline: 'Stay up-to-date with all things Outreach.',
    description: 'Get the latest product news, industry insights, and valueable resources in your inbox.',
  },
}

const RelatedArticle: FC = () => {
  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const isDesktop = ['lg', 'xl', 'xxl'].includes(currentBreakpoint?.position)

  const placeholder = {
    ...placeholderRelatedArticleBlock,
    articles: getOnePlaceholder(isDesktop ? 3 : 2),
  } as unknown as RelatedArticleInterface

  return (
    <RelatedArticleBlock block={placeholder} />
  )
}

export default RelatedArticle
