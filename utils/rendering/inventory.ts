import React, { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
import { typename as TextImageTypename } from '../../components/blocks/text_image/text_image'
import TextImageQuery from '../../components/blocks/text_image/text_image.graphql'

import { typename as ContentStackItemBlockTypename } from '../../components/blocks/content_stack_item/content_stack_item'
import ContentStackItemBlockQuery from '../../components/blocks/content_stack_item/content_stack_item.graphql'

// import { typename as PreFooterBlockTypename } from '../../components/blocks/pre_footer/pre_footer'
// import PreFooterBlockQuery from '../../components/blocks/pre_footer/pre_footer.graphql'

// import { typename as SideSideBlockTypename } from '../../components/blocks/side_side/side_side'
// import SideSideBlockQuery from '../../components/blocks/side_side/side_side.graphql'

<<<<<<< HEAD
// import { typename as TtacBlockTypename } from '../../components/blocks/ttac/ttac'
// import TtacBlockQuery from '../../components/blocks/ttac/ttac.graphql'

=======
>>>>>>> feature/module-side-side-2
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

<<<<<<< HEAD
  // {
  //   component: dynamic(() => import('../../components/blocks/ttac/ttac')),
  //   query: TtacBlockQuery,
  //   typename: TtacBlockTypename,
  //   extraQueries: undefined,
  // },

=======
>>>>>>> feature/module-side-side-2
  // ##HYGEN_START##
  // do not modify the above line since its used by hygen to generate the block list
]

export default blocks
