import React, { FC } from 'react'
import { FormPlaceHolderInterface } from './form-placeholder.interface'

import styles from './form-placeholder.module.scss'

import RadioButton from '../radio-button/radio-button'
import UnderlinedButton from '../underlined-button/underlined-button'
import TertiaryButton from '../tertiary-button/tertiary-button'

const FormPlaceHolder: FC<FormPlaceHolderInterface> = ({
  className = '',
}) => {
  const handleOnSubmit = (ev) => {
    ev.preventDefault()
  }

  return (
    <div className={`${styles.root} ${className}`}>
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <label htmlFor="firstField" className={styles.formGroup}>
          <div>
            <span>Form label</span>
            <span>Required*</span>
          </div>
          <input id="firstField" type="text" className={styles.formInput} />
        </label>
        <label htmlFor="secondField" className={styles.formGroup}>
          <div>
            <span>Form label</span>
            <span>Required*</span>
          </div>
          <textarea id="secondField" className={styles.formTextarea} rows={15} />
        </label>
        <p>By submitting this form, you confirm that you have read and agree to the Terms of Service and Privacy Policy.</p>
        <section className={styles.terms}>
          <RadioButton id="thirdField" />
          <span>
            I agree to
            <a href="/"> the terms and conditions.</a>
          </span>
        </section>
        <TertiaryButton className={styles.button} type="submit" text="Submit" />
        <section className={styles.bottom}>
          <UnderlinedButton text="Terms of service" href="#" underlineColor="passionBlue" />
          <UnderlinedButton text="Privacy" href="#" underlineColor="passionBlue" />
        </section>
      </form>
    </div>
  )
}

export default FormPlaceHolder
