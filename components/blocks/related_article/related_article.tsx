import React, { FunctionComponent } from 'react'

import ArrowButton from 'components/generic/arrow-button/arrow-button'
import CardOutlineItem from 'components/generic/card_outline_item/card_outline_item'
import PromoToutSignUpItem from 'components/generic/promo_tout_signup_item/promo_tout_signup_item'
import RelatedArticleInterface from './related_article.interface'
import styles from './related_article.module.scss'

export const typename = 'Set_Replicator_BlockRelatedArticle'

const RelatedArticleBlock:FunctionComponent<{ block: RelatedArticleInterface }> = ({ block }) => (
  <div className={styles.root}>
    <section className={styles.wrapper}>
      <div className={styles.topSection}>
        <h3 className="typo-h3">{block.headline}</h3>
        {block.cta && <ArrowButton text={block.cta.ctaText} href={block.cta.ctaLink} />}
      </div>
      <div className={styles.middleSection}>
        {block.articles.items.map((oneItem, index) => {
          const subkey = `one-item-${index}`

          return (
            <CardOutlineItem
              key={subkey}
              variant={`variant${block.articles.quantity}`}
              category={oneItem.category}
              image={oneItem.image}
              icon={oneItem.icon}
              eyebrow={oneItem.eyebrow}
              date={oneItem.date}
              headline={oneItem.headline}
              description={oneItem.description}
              ctaLink={oneItem.ctaLink}
              tags={oneItem.tags}
            />
          )
        })}
      </div>
      <div className={styles.bottomSection}>
        <PromoToutSignUpItem
          headline={block.promo.headline}
          description={block.promo.description}
        />
      </div>
    </section>
  </div>
)

export default RelatedArticleBlock
