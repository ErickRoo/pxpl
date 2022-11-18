import React, { FunctionComponent } from 'react'

import FaqAccordionItemInterface from './faq_accordion_item.interface'
import styles from './faq_accordion_item.module.scss'

const FaqAccordionItem: FunctionComponent<FaqAccordionItemInterface> = () => (
  <div className={`${styles.root} container`}>
    Faq Block
  </div>
)

export default FaqAccordionItem
