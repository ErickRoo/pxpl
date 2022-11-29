import React, { FC } from 'react'
import HeaderInterface from './headline.interface'
import styles from './headline.module.scss'

const Headline: FC<HeaderInterface> = ({ as: Tag = 'div', className = '', children }) => {
  const tagName = Tag.toString()
  const headlineClass = tagName.indexOf('h') >= 0 ? `typo-${tagName}` : ''

  return <Tag className={`${styles.root} ${headlineClass} ${className}`}>{children}</Tag>
}

export default Headline
