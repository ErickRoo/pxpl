import React, { FC } from 'react'
import LogoGardenInterface from './logo_garden.interface'
import LogosLooping from './modules/logos_looping'
import LogosStatic from './modules/logos_static'

export const typename = 'Set_Replicator_BlockLogoGarden'

const LogoGardenSelector:FC<{ block: LogoGardenInterface, variant: string }> = ({ block, variant }) => {
  switch (variant) {
    case 'static':
      return <LogosStatic block={block} />
    case 'looping':
      return <LogosLooping block={block} />
    default:
      return <LogosStatic block={block} />
  }
}

const LogoGardenBlock:FC<{ block: LogoGardenInterface }> = ({ block }) => (<LogoGardenSelector block={block} variant={block.variant} />)

export default LogoGardenBlock
