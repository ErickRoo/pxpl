import React, { FC } from 'react'

import ArrowCorner from '../../../assets/FormNewsletter/ArrowCorner.svg'
import { FormNewsLetterInterface } from './form-newsletter.interface'
import styles from './form-newsletter.module.scss'

const FormNewsletter: FC<FormNewsLetterInterface> = ({
  className = '',
}) => {
  const handleOnSubmit = (ev) => {
    ev.preventDefault()
  }

  return (
    <form className={`${styles.root} ${className}`} onSubmit={handleOnSubmit}>
      <label htmlFor="firstField" className={styles.formGroup}>
        <div>
          <span className="eyebrow">Form label</span>
          <span className="eyebrow">Required*</span>
        </div>
        <input id="firstField" type="text" className={`${styles.formInput} typo-body`} placeholder="you@email.com" />
      </label>
      <button className={styles.button} type="submit" aria-label="submit">
        <ArrowCorner className={styles.icon} />
      </button>
    </form>
  )
}

export default FormNewsletter
