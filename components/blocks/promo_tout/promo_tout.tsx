import React, { FunctionComponent } from 'react'

import FormNewsletter from 'components/generic/form-newsletter/form-newsletter'
import TertiaryButton from 'components/generic/tertiary-button/tertiary-button'
import PromoToutInterface from './promo_tout.interface'
import styles from './promo_tout.module.scss'

export const typename = 'Set_Replicator_BlockPromoTout'

const PromoToutBlock:FunctionComponent<{ block: PromoToutInterface }> = ({ block }) => (
  <div>
    {block.TextAndImageBlocks?.map((oneTextImageItem, idx) => {
      const key = `promo-tout-item-${idx}`

      if (oneTextImageItem.variant === 'image') {
        return (
          <div className={styles.root} key={key}>
            image
          </div>
        )
      }

      const wrapperStyles = `${styles.wrapper} ${oneTextImageItem?.centered ? styles.wrapper__centered : ''}`
      return (
        <div className={styles.root} key={key}>
          <section className={wrapperStyles}>
            <div className={styles.leftSide}>
              <h5 className={`typo-h5 ${styles.headline}`}>{oneTextImageItem.headline}</h5>
              <p className="typo-body">{oneTextImageItem.description}</p>
            </div>
            <div className={styles.rightSide}>
              {oneTextImageItem.variant === 'signup' && <FormNewsletter className={styles.wrapperForm} />}
              {oneTextImageItem.variant === 'cta' && (
                <div className={styles.wrapperButton}>
                  <TertiaryButton type="link" text="Learn more" variant="outline" href={oneTextImageItem.ctaLink} />
                </div>
              )}
            </div>
          </section>
        </div>
      )
    })}
  </div>
)

export default PromoToutBlock
