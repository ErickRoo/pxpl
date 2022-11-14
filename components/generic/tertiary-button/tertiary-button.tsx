import React, { FC } from 'react'
import Link from 'next/link'
import styles from './tertiary-button.module.scss'
import { TertiaryButtonInterface } from './tertiary-button.interface'
import ArrowRight from '../../../assets/ArrowRight.svg'

const TertiaryButton: FC<TertiaryButtonInterface> = ({
  type, className = '', href, text,
}) => {
  if (!type) {
    return null
  }

  const renderBody = () => (
    <section className={styles.inner}>
      <div className={styles.label}>
        <p className="eyebrow">{text}</p>
      </div>
      <div className={styles.icon}>
        <ArrowRight />
      </div>
    </section>
  )

  if (type === 'link') {
    return <Link className={`${styles.link} ${className}`} href={href}>{renderBody()}</Link>
  }
  if (type === 'submit') {
    return <button className={`${styles.button} ${className}`} type="submit">{renderBody()}</button>
  }

  return null
}

export default TertiaryButton
