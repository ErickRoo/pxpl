import React, { FC } from 'react'
import styles from '../wysiwyg.module.scss'

interface Content {
  bullets?: []
}

const Bullet: FC<{ bullet: string }> = ({ bullet }) => (
  <div className={styles.inlineTextBullet}>
    <div className={styles.inlineTextBulletIcon}>
      <img src="/images/bullet.svg" alt="bullet" />
    </div>
    <div className={styles.inlineTextBulletContent}>{bullet}</div>
  </div>
)

const InlineBullets: FC<{ content: Content }> = ({ content }) => {
  const { bullets } = content
  const random = (index: number) => Math.floor(Math.random() * (index * 1000 - 1000 + 1) + 1000)

  return (
    <div className={styles.inlineTextBullets}>
      {bullets?.map((bullet, index) => (
        <Bullet key={`${bullet}-${random(index)}`} bullet={bullet} />
      ))}
    </div>
  )
}

export default InlineBullets
