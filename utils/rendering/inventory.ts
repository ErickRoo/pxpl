import React, { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
// import { typename as TextImageTypename } from '../../components/blocks/text_image/text_image'
// import TextImageQuery from '../../components/blocks/text_image/text_image.graphql'

// import { typename as ContentStackItemBlockTypename } from '../../components/blocks/content_stack_item/content_stack_item'
// import ContentStackItemBlockQuery from '../../components/blocks/content_stack_item/content_stack_item.graphql'

import { typename as HeroBlockTypename } from '../../components/blocks/hero/hero'
import HeroBlockQuery from '../../components/blocks/hero/hero.graphql'

// import { typename as Feature5050BlockTypename } from '../../components/blocks/feature_50_50/feature_50_50'
// import Feature5050BlockQuery from '../../components/blocks/feature_50_50/feature_50_50.graphql'

// import { typename as LargeQuoteBlockTypename } from '../../components/blocks/large_quote/large_quote'
// import LargeQuoteBlockQuery from '../../components/blocks/large_quote/large_quote.graphql'

// import { typename as SideSideBlockTypename } from '../../components/blocks/side_side/side_side'
// import SideSideBlockQuery from '../../components/blocks/side_side/side_side.graphql'

// import { typename as TtacBlockTypename } from '../../components/blocks/ttac/ttac'
// import TtacBlockQuery from '../../components/blocks/ttac/ttac.graphql'

// import { typename as ContentCardBlockTypename } from '../../components/blocks/content_card/content_card'
// import ContentCardBlockQuery from '../../components/blocks/content_card/content_card.graphql'

// import { typename as HeadlineTextBlockTypename } from '../../components/blocks/headline_text/headline_text'
// import HeadlineTextBlockQuery from '../../components/blocks/headline_text/headline_text.graphql'

// import { typename as PromoToutBlockTypename } from '../../components/blocks/promo_tout/promo_tout'
// import PromoToutBlockQuery from '../../components/blocks/promo_tout/promo_tout.graphql'

// import { typename as LogoGardenBlockTypename } from '../../components/blocks/logo_garden/logo_garden'
// import LogoGardenBlockQuery from '../../components/blocks/logo_garden/logo_garden.graphql'

// import { typename as FaqBlockTypename } from '../../components/blocks/faq/faq'
// import FaqBlockQuery from '../../components/blocks/faq/faq.graphql'

// ##HYGEN_IMPORT##
// do not modify the above line since its used by hygen to generate the block list

interface Block {
  component: FunctionComponent | React.ComponentType<any>,
  query: string,
  extraQueries: string[],
  typename: string
}

const blocks:Block[] = [
  // {
  //   component: dynamic(() => import('../../components/blocks/text_image/text_image')),
  //   query: TextImageQuery,
  //   typename: TextImageTypename,
  //   extraQueries: undefined,
  // },
  // {
  //   component: dynamic(() => import('../../components/blocks/content_stack_item/content_stack_item')),
  //   query: ContentStackItemBlockQuery,
  //   typename: ContentStackItemBlockTypename,
  //   extraQueries: undefined,
  // },

  {
    component: dynamic(() => import('../../components/blocks/hero/hero')),
    query: HeroBlockQuery,
    typename: HeroBlockTypename,
    extraQueries: undefined,
  },

  // {
  //   component: dynamic(() => import('../../components/blocks/side_side/side_side')),
  //   query: SideSideBlockQuery,
  //   typename: SideSideBlockTypename,
  //   extraQueries: undefined,
  // },

  // {
  //   component: dynamic(() => import('../../components/blocks/ttac/ttac')),
  //   query: TtacBlockQuery,
  //   typename: TtacBlockTypename,
  //   extraQueries: undefined,
  // },
  // {
  //   component: dynamic(() => import('../../components/blocks/promo_tout/promo_tout')),
  //   query: PromoToutBlockQuery,
  //   typename: PromoToutBlockTypename,
  //   extraQueries: undefined,
  // },
  //   component: dynamic(() => import('../../components/blocks/logo_garden/logo_garden')),
  //   query: LogoGardenBlockQuery,
  //   typename: LogoGardenBlockTypename,
  //   extraQueries: undefined,
  // },
  // {
  //   component: dynamic(() => import('../../components/blocks/headline_text/headline_text')),
  //   query: HeadlineTextBlockQuery,
  //   typename: HeadlineTextBlockTypename,
  //   extraQueries: undefined,
  // },

  // {
  //   component: dynamic(() => import('../../components/blocks/content_card/content_card')),
  //   query: ContentCardBlockQuery,
  //   typename: ContentCardBlockTypename,
  //   extraQueries: undefined,
  // },

  //   component: dynamic(() => import('../../components/blocks/faq/faq')),
  //   query: FaqBlockQuery,
  //   typename: FaqBlockTypename,
  //   extraQueries: undefined,
  // },

  // ##HYGEN_START##
  // do not modify the above line since its used by hygen to generate the block list
]

export default blocks
