import React, { FunctionComponent } from 'react'

import ArrowButton from '../arrow-button/arrow-button'
import CardOutlineItemInterface from './card_outline_item.interface'
import stylesVariant1 from './card_outline_item_variant1.module.scss'
import stylesVariant2 from './card_outline_item_variant2.module.scss'
import stylesVariant3 from './card_outline_item_variant3.module.scss'
import stylesVariant4 from './card_outline_item_variant4.module.scss'

const enumStyles = {
  variant1: stylesVariant1,
  variant2: stylesVariant2,
  variant3: stylesVariant3,
  variant4: stylesVariant4,
}

const CardOutlineItem: FunctionComponent<CardOutlineItemInterface> = ({
  variant = '', category, image, icon, eyebrow, date, headline, description, ctaLink, tags,
}) => {
  const styles = enumStyles[variant] ?? {}

  return (
    <div className={styles.root}>
      <section className={styles.wrapper}>
        <div className={styles.topSection}>
          {category && (
            <p className={`eyebrow ${styles.category}`}>
              {category}
            </p>
          )}
          {image && <img src={image.src} alt="placeholderImage" />}
        </div>
        <div className={styles.bottomSection}>
          {icon && (
            <img className={styles.icon} src={icon.src} alt="placeholderIcon" />
          )}
          {(eyebrow || date) && (
            <div className={`eyebrow ${styles.topTags}`}>
              <span>{eyebrow}</span>
              <span>{date}</span>
            </div>
          )}
          <h6 className={`typo-h6 ${styles.headline}`}>
            {headline}
          </h6>
          <p className={`typo-body ${styles.description}`}>
            {description}
          </p>
          <div className={styles.wrapperButton}>
            <ArrowButton text="" href={ctaLink} />
          </div>
          {tags?.length > 0 && (
            <div className={styles.bottomTags}>
              {tags?.map((oneText, idx) => {
                const key = `one-bottom-${idx}`
                return <span key={key} className="eyebrow">{oneText}</span>
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default CardOutlineItem
