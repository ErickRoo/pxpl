import React, { FunctionComponent } from 'react'

import useWindowSize from 'styles/getBreakpointQuery'
import getCurrentBreakpoint from 'utils/breakpoints/getCurrentBreakpoint'
import ArrowButton from '../arrow-button/arrow-button'
import ArrowCorner from '../../../assets/LargeQuote/ArrowCorner.svg'
import LargeQuoteItemInterface from './large_quote_item.interface'
import styles from './large_quote_item.module.scss'

const LargeQuoteItem:FunctionComponent<LargeQuoteItemInterface> = ({
  quote_text, author_name, job_title, icon, image, primaryCta,
}) => {
  const { width } = useWindowSize()
  const currentBreakpoint = getCurrentBreakpoint(width)
  const isMobile = ['normal', 'sm'].includes(currentBreakpoint?.position)

  return (
    <div className={`${styles.root} bg-warmGray`}>
      <section className={styles.inner}>
        <ArrowCorner className={styles.arrowCorner} />
        <div className={styles.wrapper}>
          <section className={styles.leftSide}>
            <h4 className={`typo-h4 ${styles.testimony}`}>
              {quote_text}
            </h4>
            <h4 className={`typo-h4 ${styles.author}`}>{author_name}</h4>
            <p className={`eyebrow ${styles.jobTitle}`}>{job_title}</p>
            <div className={styles.leftBottonSide}>
              {!isMobile && <hr />}
              <img className={styles.profileImage} src={icon.src} alt="placeholder profile" />
              {isMobile && (
                <>
                  <hr />
                  <ArrowButton text={primaryCta.ctaText} href={primaryCta.ctaLink} />
                </>
              )}
            </div>
          </section>
          <section className={styles.rightSide}>
            <div className={styles.bgImage} style={{ backgroundImage: `url(${image?.src})` }} />
            {!isMobile && <ArrowButton text={primaryCta.ctaText} href={primaryCta.ctaLink} />}
          </section>
        </div>
      </section>
    </div>
  )
}

export default LargeQuoteItem
