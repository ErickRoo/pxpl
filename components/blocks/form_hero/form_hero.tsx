import React, { FunctionComponent } from 'react'
import styles from './form_hero.module.scss'
import FormHeroBlockInterface from './form_hero.interface'

export const typename = 'Set_Replicator_BlockFormHero'

const FormHeroBlock:FunctionComponent<{ block: FormHeroBlockInterface }> = () => (
  <div className={styles.root}>
    Form hero Block
  </div>
)

export default FormHeroBlock
