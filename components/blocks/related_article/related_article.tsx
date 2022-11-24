import React, { FunctionComponent } from 'react'

import RelatedArticleInterface from './related_article.interface'
import styles from './related_article.module.scss'

export const typename = 'Set_Replicator_BlockRelatedArticle'

const RelatedArticleBlock:FunctionComponent<{ block: RelatedArticleInterface }> = () => (
  <div className={styles.root}>
    Related article Block
  </div>
)

export default RelatedArticleBlock
