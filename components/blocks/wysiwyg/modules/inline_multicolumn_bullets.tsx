import React, { FC } from 'react'
import styles from '../wysiwyg.module.scss'

interface Content {
  bullets?: []
  columns?: []
}

const random = (index: number) => Math.floor(Math.random() * (index * 1000 - 1000 + 1) + 1000)

const Bullet: FC<{ bullet: string, bgToggle: boolean }> = ({ bullet, bgToggle }) => (
  <div className={bgToggle ? styles.inlineMultiColumnsBulletTB : styles.inlineMultiColumnsBullet}>
    <div className={bgToggle ? styles.inlineMultiColumnsBulletIconTB : styles.inlineMultiColumnsBulletIcon}>
      <img src="/images/bullet.svg" alt="bullet" />
    </div>
    <div className={bgToggle ? styles.inlineMultiColumnsBulletContentTB : styles.inlineMultiColumnsBulletContent}>{bullet}</div>
  </div>
)

const Column: FC<{ column: [], bgToggle: boolean }> = ({ column, bgToggle }) => (
  <div className={bgToggle ? styles.inlineMultiColumnsBT : styles.inlineMultiColumns}>
    {column?.map((bullet, index) => (
      <Bullet key={`${bullet}-${random(index)}`} bullet={bullet} bgToggle={bgToggle} />
    ))}
  </div>
)

const InlineMultiColumnBullets: FC<{ content: Content, bgToggle: boolean }> = ({ content, bgToggle }) => {
  const { columns } = content

  return (
    <div className={styles.inlineMultiColumnsBulletsContainer}>
      {columns?.map((column, index) => (
        <Column key={random(index)} column={column} bgToggle={bgToggle} />
      ))}
    </div>
  )
}

export default InlineMultiColumnBullets
