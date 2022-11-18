/* eslint-disable react/no-danger */
import React, { useState, FunctionComponent } from 'react'

import UnderlinedButton from '../underlined-button/underlined-button'
import FaqAccordionItemInterface from './faq_accordion_item.interface'
import styles from './faq_accordion_item.module.scss'

const convertText = (content: string): string => {
  let contentSplitted = content.split(/__(.*?)__/g)
  let textContent = `${contentSplitted[0]} <u>${contentSplitted[1]}</u> ${contentSplitted[2]}`
  contentSplitted = textContent.split(/\*\*(.*?)\*\*/g)
  textContent = `${contentSplitted[0]} <b>${contentSplitted[1]}</b> ${contentSplitted[2]}`
  contentSplitted = textContent.split(/~~(.*?)~~/g)
  textContent = `${contentSplitted[0]} <ins>${contentSplitted[1]}</ins> ${contentSplitted[2]}`

  return textContent
}

const FaqAccordionItem: FunctionComponent<FaqAccordionItemInterface> = ({
  headline, content, primaryCta, initializeOpen,
}) => {
  const [collapse, setCollapse] = useState(!initializeOpen)

  return (
    <div className={styles.root}>
      <div className={styles.topSection}>
        <h6 className="typo-h6">{headline}</h6>
        <button type="button" onClick={() => setCollapse(!collapse)}>
          <svg className={styles.icon} data-collapse={collapse} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 16H27" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 5V27" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className={styles.contentSection} data-collapse={collapse}>
        <div className={styles.contentInner}>
          <p className="typo-body" dangerouslySetInnerHTML={{ __html: convertText(content) }} />
          <UnderlinedButton href={primaryCta.ctaLink} text={primaryCta.ctaText} underlineColor="passionBlue" />
        </div>
      </div>
    </div>
  )
}

export default FaqAccordionItem
