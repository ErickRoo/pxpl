import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import TertiaryButton from 'components/generic/tertiary-button/tertiary-button'
import styles from './content_stack_item.module.scss'
import ContentStackItemInterface from './content_stack_item.interface'
import Checker from '../../../assets/checker.png'
import useWindowSize from '../../../styles/getBreakpointQuery'
import ArrowButton from '../../generic/arrow-button/arrow-button'
import UnderlinedButton from '../../generic/underlined-button/underlined-button'

export const typename = 'Set_Replicator_BlockContentStackItem'

const ContentStackItemBlock: FunctionComponent<{ block: ContentStackItemInterface }> = (
  {
    block,
  },
) => {
  const { width } = useWindowSize()

  return (
    <div className={`${styles.wrapper}`}>
      {block.TextAndImageBlocks.map((el, i) => {
        if (width <= 767) {
          return (
            <div className={`grid grid-cols-1 ${styles.stackContainer}`}>
              <div className={`${styles.imageContainer} image-container flex justify-center items-center sm:mb-10`}>
                <Image src={Checker} alt="Checker" />
              </div>
              <div className="text-container flex flex-col content-center justify-center items-center">
                <h4 className="typo-h4 text-darkBlue">{el.headline}</h4>
                <p className={`typo-body text-darkBlue ${styles.bodyText}`}>
                  {el.text}
                </p>
              </div>
            </div>
          )
        }

        if (i % 2 === 0) {
          return (
            <div className={`grid grid-cols-12 ${styles.stackContainer}`}>
              <div className={`${styles.imageContainer} col-span-5 flex justify-center items-start`}>
                <Image src={Checker} alt="Checker" />
              </div>
              <div className={`col-span-7 flex flex-col content-center justify-center ${styles.rightContent}`}>
                <h4 className="typo-h4 text-darkBlue">{el.headline}</h4>
                <p className={`typo-body text-darkBlue ${styles.bodyText}`}>
                  {el.text}
                </p>
              </div>
            </div>
          )
        }
        return (
          <div className={`grid grid-cols-12 ${styles.stackContainer}`}>
            <div className={`col-span-7 flex flex-col content-center justify-center ${styles.leftContent}`}>
              <h4 className="typo-h4 text-darkBlue">{el.headline}</h4>
              <p className={`typo-body text-darkBlue ${styles.bodyText}`}>
                {el.text}
              </p>
            </div>
            <div className={`${styles.imageContainer} flex lg:col-start-8 col-span-5 justify-center items-start ${styles.imgRight}`}>
              <Image src={Checker} alt="Checker" />
            </div>
          </div>
        )
      })}

      <div className={`${width <= 767 ? styles.buttonsContainer : ''} flex sm:flex-col md:flex-row justify-center`}>
        {
          width <= 767 ? (
            <TertiaryButton type="link" text="Learn more" href="/" />
          ) : (
            <ArrowButton text="Learn more" href="/" />
          )
        }
        <div className={`${styles.spacer}`} />
        <UnderlinedButton href="/" text="Learn more" underlineColor="passionBlue" />
      </div>
    </div>
  )
}

export default ContentStackItemBlock
