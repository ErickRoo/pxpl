import React, { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
import { typename as TextImageTypename } from '../../components/blocks/text_image/text_image'
import TextImageQuery from '../../components/blocks/text_image/text_image.graphql'

import { typename as ContentStackItemBlockTypename } from '../../components/blocks/content_stack_item/content_stack_item'
import ContentStackItemBlockQuery from '../../components/blocks/content_stack_item/content_stack_item.graphql'

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

  // ##HYGEN_START##
  // do not modify the above line since its used by hygen to generate the block list
]

export default blocks
