import React, { useState, FunctionComponent } from 'react';
import Image from 'next/image'
import styles from './description-list.module.scss'
import DescriptionListItemInterface from './description-list.interface'
import UnderlinedButton from '../underlined-button/underlined-button';
import NumberSquare from '../number-square/number-square';

const DescriptionList: FunctionComponent<DescriptionListItemInterface> = ({
  order, headline, description, initializeOpen, ctaButton, image,
}) => {
  const [collapse, setCollapse] = useState(!initializeOpen)
  return (
    <section className={`${styles.root} box-border border-b border-darkBlue grid grid-cols-1 md:border-0 md:grid-cols-12 md:grid-rows-6`} data-collapse={collapse}>
      <div className={`${styles.itemLeft} col-span-1 md:col-span-5 md:row-span-1`} data-collapse={collapse}>
        <div className={`${styles.itemBar} box-border flex flex-row`} data-collapse={collapse}>
          <NumberSquare order={order} isActive={collapse} />
          <h6 className={`typo-h6 ${styles.headline}`}>{headline}</h6>
          <button type="button" onClick={() => setCollapse(!collapse)}>
            <svg className={styles.icon} data-collapse={collapse} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16H27" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 5V27" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${styles.contentSection} col-span-1 md:col-span-5 md:row-span-4 md:row-start-3`} data-collapse={collapse}>
        <p className={`${styles.itemDescription} typo-body`}>{description}</p>
        <div className={styles.ctaButton}>
          <UnderlinedButton href={ctaButton.href} text={ctaButton.text} underlineColor="passionBlue" />
        </div>
        <div className={`${styles.itemMobileImage}`}>
          <Image src={image} alt={headline} objectFit="contain" sizes="100vh" />
        </div>
      </div>
      <div className={`${styles.itemImage} hidden md:block md:col-span-7 md:col-start-6 md:relative xl:col-start-7`} data-collapse={collapse}>
        <Image src={image} alt={headline} objectFit="contain" sizes="100vh" />
      </div>
    </section>
  )
}

export default DescriptionList
