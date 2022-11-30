import React, { FC } from 'react'
import Headline from 'components/generic/headline/headline'
import styles from '../wysiwyg.module.scss'

interface Content {
  headline?: {
    headline?: string
    headlineLevel?: number
  }
}

const InlineHeadline: FC<{ content: Content }> = ({ content }) => {
  const { headline } = content
  const headlineLevel = headline?.headlineLevel || 2
  const headlineText = headline?.headline || 'H2 headline of article blog story to give context for reader.'
  return (
    <Headline as={`h${headlineLevel}`} className={styles.inlineTextHeading}>{headlineText}</Headline>
  )
}

export default InlineHeadline
