import React, { FunctionComponent } from 'react'

import ArrowButton from '../arrow-button/arrow-button'
import ArrowCorner from '../../../assets/LargeQuote/ArrowCorner.svg'
import LargeQuoteItemInterface from './large_quote_item.interface'
import styles from './large_quote_item.module.scss'

const LargeQuoteItem:FunctionComponent<LargeQuoteItemInterface> = ({
  variant, quote_text, author_name, job_title, icon, image, primaryCta,
}) => {
  if (variant === 'center') {
    return (
      <div className={`${styles.root} bg-butterCream`}>
        <section className={`${styles.inner} ${styles.inner__center}`}>
          <div className={styles.wrapperImage}>
            <img className={styles.image} src={image.src} alt="placeholder profile" />
          </div>
          <h4 className={`typo-h4 ${styles.testimony} ${styles.testimony__center}`}>
            {quote_text}
          </h4>
          <div className={styles.leftBottonSide}>
            <h4 className="typo-h4">{author_name}</h4>
            <p className="eyebrow">{job_title}</p>
            <hr />
            <ArrowButton text={primaryCta.ctaText} href={primaryCta.ctaLink} />
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className={`${styles.root} bg-warmGray`}>
      <section className={styles.inner}>
        <ArrowCorner className={styles.arrowCorner} />
        <div className={styles.wrapper}>
          <section className={styles.leftSide}>
            <h4 className={`typo-h4 ${styles.testimony}`}>
              {quote_text}
            </h4>
            <div className={styles.leftBottonSide}>
              <h4 className="typo-h4">{author_name}</h4>
              <p className="eyebrow">{job_title}</p>
              <hr />
              <img className={styles.profileImage} src={icon.src} alt="placeholder profile" />
            </div>
          </section>
          <section className={styles.rightSide}>
            <div className={styles.bgImage} style={{ backgroundImage: `url(${image?.src})` }} />
            <ArrowButton text={primaryCta.ctaText} href={primaryCta.ctaLink} />
          </section>
        </div>
      </section>
    </div>
  )
}

export default LargeQuoteItem
