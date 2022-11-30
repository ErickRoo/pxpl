import React, { Fragment, FunctionComponent } from 'react'

import FormHeroItem from './modules/form_hero_item'
import FormHeroBlockInterface from './form_hero.interface'
import styles from './form_hero.module.scss'

export const typename = 'Set_Replicator_BlockFormHero'

const FormHeroBlock:FunctionComponent<{ block: FormHeroBlockInterface }> = ({ block }) => {
  if (!block) {
    return null
  }

  return (
    <div className={styles.main}>
      {block?.TextAndImageBlocks?.map((oneItem, idx) => {
        const key = `one-item-${idx}`

        if (!oneItem) {
          return <Fragment key={key} />
        }

        return <FormHeroItem key={key} oneItem={oneItem} />
      })}
    </div>
  )
}

export default FormHeroBlock
