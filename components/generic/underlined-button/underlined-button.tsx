import React, { FC } from 'react'
import Link from 'next/link'
import { UnderlinedButtonInterface } from './underlined-button.interface'
import styles from './underlined-button.module.scss'

const UnderlinedButton: FC<UnderlinedButtonInterface> = ({ underlineColor, text, href }) => (
  <Link href={href}>
    <div className="flex flex-col align-center justify-center">
      <div>
        <p className="eyebrow">{text}</p>
      </div>
      <div className={`flex bg-${underlineColor} ${styles.underline}`} />
    </div>
  </Link>
)

export default UnderlinedButton
