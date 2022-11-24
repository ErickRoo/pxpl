import React, { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
import { typename as TextImageTypename } from '../../components/blocks/text_image/text_image'
import TextImageQuery from '../../components/blocks/text_image/text_image.graphql'

import { typename as ContentStackItemBlockTypename } from '../../components/blocks/content_stack_item/content_stack_item'
import ContentStackItemBlockQuery from '../../components/blocks/content_stack_item/content_stack_item.graphql'

// import { typename as PreFooterBlockTypename } from '../../components/blocks/pre_footer/pre_footer'
// import PreFooterBlockQuery from '../../components/blocks/pre_footer/pre_footer.graphql'

// import { typename as Feature5050BlockTypename } from '../../components/blocks/feature_50_50/feature_50_50'
// import Feature5050BlockQuery from '../../components/blocks/feature_50_50/feature_50_50.graphql'

// import { typename as LargeQuoteBlockTypename } from '../../components/blocks/large_quote/large_quote'
// import LargeQuoteBlockQuery from '../../components/blocks/large_quote/large_quote.graphql'

// import { typename as SideSideBlockTypename } from '../../components/blocks/side_side/side_side'
// import SideSideBlockQuery from '../../components/blocks/side_side/side_side.graphql'

// import { typename as TtacBlockTypename } from '../../components/blocks/ttac/ttac'
// import TtacBlockQuery from '../../components/blocks/ttac/ttac.graphql'

// import { typename as PromoToutBlockTypename } from '../../components/blocks/promo_tout/promo_tout'
// import PromoToutBlockQuery from '../../components/blocks/promo_tout/promo_tout.graphql'

// import { typename as LogoGardenBlockTypename } from '../../components/blocks/logo_garden/logo_garden'
// import LogoGardenBlockQuery from '../../components/blocks/logo_garden/logo_garden.graphql'

// import { typename as FaqBlockTypename } from '../../components/blocks/faq/faq'
// import FaqBlockQuery from '../../components/blocks/faq/faq.graphql'

// import { typename as HorizontalCardBlockTypename } from '../../components/blocks/horizontal_card/horizontal_card'
// import HorizontalCardBlockQuery from '../../components/blocks/horizontal_card/horizontal_card.graphql'

// ##HYGEN_IMPORT##
// do not modify the above line since its used by hygen to generate the block list

interface Block {
  component: FunctionComponent | React.ComponentType<any>,
  query: string,
  extraQueries: string[],
  typename: string
}

const blocks:Block[] = [
  {
    component: dynamic(() => import('../../components/blocks/text_image/text_image')),
    query: TextImageQuery,
    typename: TextImageTypename,
    extraQueries: undefined,
  },
  {
    component: dynamic(() => import('../../components/blocks/content_stack_item/content_stack_item')),
    query: ContentStackItemBlockQuery,
    typename: ContentStackItemBlockTypename,
    extraQueries: undefined,
  },

  // {
  //   component: dynamic(() => import('../../components/blocks/pre_footer/pre_footer')),
  //   query: PreFooterBlockQuery,
  //   typename: PreFooterBlockTypename,
  //   extraQueries: undefined,
  // },

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
  //   component: dynamic(() => import('../../components/blocks/faq/faq')),
  //   query: FaqBlockQuery,
  //   typename: FaqBlockTypename,
  //   extraQueries: undefined,
  // },

  // {
  //   component: dynamic(() => import('../../components/blocks/horizontal_card/horizontal_card')),
  //   query: HorizontalCardBlockQuery,
  //   typename: HorizontalCardBlockTypename,
  //   extraQueries: undefined,
  // },

  // ##HYGEN_START##
  // do not modify the above line since its used by hygen to generate the block list
]

export default blocks
