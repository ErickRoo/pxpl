import React, { FC } from 'react'
import WysiwygInterface from './wysiwyg.interface'
import WysiwygIntroText from './modules/wysiwyg_intro_text'
import WysiwygKeyResults from './modules/wysiwtg_key_results'
import WysiwygInlineText from './modules/wysiwyg_inline_text'
import WysiwygSpotlight from './modules/wysiwyg_spotlight'

export const typename = 'Set_Replicator_BlockWysiwyg'

const WysiwygSelector: FC<{ block: WysiwygInterface, type: string }> = ({ block, type }) => {
  switch (type) {
    case 'introText':
      return <WysiwygIntroText block={block} />
    case 'keyResults':
      return <WysiwygKeyResults block={block} />
    case 'inlineText':
      return <WysiwygInlineText block={block} />
    case 'spotlight':
      return <WysiwygSpotlight block={block} />
    default:
      return <WysiwygIntroText block={block} />
  }
}

const WysiwygBlock: FC<{ block: WysiwygInterface }> = ({ block }) => (
  <WysiwygSelector block={block} type={block?.type} />
)

export default WysiwygBlock
