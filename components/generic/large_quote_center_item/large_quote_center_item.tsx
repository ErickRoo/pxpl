import React, { FunctionComponent } from 'react'

import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import ArrowButton from '../arrow-button/arrow-button'
import LargeQuoteCenterItemInterface from './large_quote_center_item.interface'
import styles from './large_quote_center_item.module.scss'

const LargeQuoteCenterItem:FunctionComponent<LargeQuoteCenterItemInterface> = ({
  quote_text, author_name, job_title, icon, image, primaryCta,
}) => {
  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const isLargeDesktop = ['xl', 'xxl'].includes(currentBreakpoint?.position)

  return (
    <div className={styles.root}>
      <section className={styles.wrapper}>
        <div className={styles.wrapperImage}>
          <img className={styles.image} src={isLargeDesktop ? image?.src : icon?.src} alt="placeholder profile" />
        </div>
        <h4 className={`typo-h4 ${styles.testimony}`}>
          {quote_text}
        </h4>
        <h4 className={`typo-h4 ${styles.author}`}>{author_name}</h4>
        <p className={`eyebrow ${styles.jobTitle}`}>{job_title}</p>
        <div className={styles.leftBottonSide}>
          <hr />
          <ArrowButton text={primaryCta.ctaText} href={primaryCta.ctaLink} />
        </div>
      </section>
    </div>
  )
}

export default LargeQuoteCenterItem
