import React, { FC } from 'react'
import Link from 'next/link'
import styles from './arrow-button.module.scss'
import { ArrowButtonInterface } from './arrow-button.interface'
import ArrowRight from '../../../assets/ArrowRight.svg'

const ArrowButton: FC<ArrowButtonInterface> = ({
  href,
  text,
}) => (
  <Link href={href}>
    <div className={`${styles.arrowButtonContainer}`}>
      <div className={`${styles.arrowButtonLabel}`}>
        <p className="eyebrow">{text}</p>
      </div>
      <div className={`${styles.arrowButton}`}>
        <ArrowRight />
      </div>
    </div>
  </Link>
)

export default ArrowButton
