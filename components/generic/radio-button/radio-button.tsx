import React, { useState, FC } from 'react'
// import Link from 'next/link'
import { RadioButtonInterface } from './radio-button.interface'
import styles from './radio-button.module.scss'
import Check from '../../../assets/RadioButton/check.svg'

const RadioButton: FC<RadioButtonInterface> = ({ className = '', id }) => {
  const [selected, setSelected] = useState(false)

  return (
    <div className={`${styles.root} ${className}`}>
      <label htmlFor={id}>
        <Check className={styles.icon} data-checked={selected} />
        <input
          className={styles.input}
          id={id}
          type="radio"
          checked={selected}
          onClick={() => setSelected(!selected)}
          onChange={() => {}}
        />
      </label>
    </div>
  )
}

export default RadioButton
