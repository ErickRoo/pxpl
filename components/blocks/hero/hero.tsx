import React, { FC } from 'react'
import HeroInterface from './hero.interface'
import HeroModuleLeftTextImageRight from './modules/hero_left_text_image_right'
import HeroModuleRightTextImageLeft from './modules/hero_right_text_image_left'
import HeroModuleLeftText from './modules/hero_left_text'
import HeroModuleFullBleedImageDarkenRightText from './modules/hero_full_bleed_image_darken_right_text'
import HeroModuleFullBleedImageDarkenLeftText from './modules/hero_full_bleed_image_darken_left_text'
import HeroModuleRightText from './modules/hero_right_text'

export const typename = 'Set_Replicator_BlockHero'

const HeroModuleSelector: FC<{ block: HeroInterface, variant: string }> = ({ block, variant }) => {
  switch (variant) {
    case 'leftTextImageRight':
      return <HeroModuleLeftTextImageRight block={block} />
    case 'rightTextImageLeft':
      return <HeroModuleRightTextImageLeft block={block} />
    case 'leftText':
      return <HeroModuleLeftText block={block} />
    case 'rightText':
      return <HeroModuleRightText block={block} />
    case 'fullBleedImageDarkenRightText':
      return <HeroModuleFullBleedImageDarkenRightText block={block} />
    case 'fullBleedImageDarkenLeftText':
      return <HeroModuleFullBleedImageDarkenLeftText block={block} />
    default:
      return <HeroModuleLeftTextImageRight block={block} />
  }
}

const HeroBlock:FC<{ block: HeroInterface }> = ({ block }) => (<HeroModuleSelector block={block} variant={block?.variant} />)

export default HeroBlock
