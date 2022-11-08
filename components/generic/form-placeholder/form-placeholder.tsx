import React, { FC } from 'react'
import RadioButton from '../radio-button/radio-button'
// import ArrowButton from '../arrow-button/arrow-button'
import UnderlinedButton from '../underlined-button/underlined-button'
import { FormPlaceHolderInterface } from './form-placeholder.interface'
import ArrowRight from '../../../assets/ArrowRight.svg'
import styles from './form-placeholder.module.scss'

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
        <button type="submit" className={styles.button}>
          <span>Submit</span>
          <ArrowRight />
        </button>
        <section className={styles.bottom}>
          <UnderlinedButton text="Terms of service" href="#" underlineColor="#5951FF" />
          <UnderlinedButton text="Privacy" href="#" underlineColor="#5951FF" />
        </section>
      </form>
    </div>
  )
}

export default FormPlaceHolder
