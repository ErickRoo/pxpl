import React, { FunctionComponent } from 'react'
import Image from 'next/image'
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
    <div>
      {block.TextAndImageBlocks.map((el, i) => {
        if (width <= 768) {
          return (
            <div className="grid grid-cols-1">
              <div className="image-container flex justify-center items-center sm:mb-10">
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
            <div className={`grid grid-cols-10 ${styles.stackContainer}`}>
              <div className="image-container col-span-4 flex justify-center items-center sm:mb-10">
                <Image src={Checker} alt="Checker" />
              </div>
              <div className="text-container col-span-6 flex flex-col content-center justify-center items-center">
                <h4 className="typo-h4 text-darkBlue">{el.headline}</h4>
                <p className={`typo-body text-darkBlue ${styles.bodyText}`}>
                  {el.text}
                </p>
              </div>
            </div>
          )
        }
        return (
          <div className={`grid grid-cols-10 ${styles.stackContainer}`}>
            <div className="text-container col-span-6 flex flex-col content-center justify-center items-center">
              <h4 className="typo-h4 text-darkBlue">{el.headline}</h4>
              <p className={`typo-body text-darkBlue ${styles.bodyText}`}>
                {el.text}
              </p>
            </div>
            <div className="image-container flex col-span-4 justify-center items-center">
              <Image src={Checker} alt="Checker" />
            </div>
          </div>
        )
      })}

      <div className={`${styles.buttonsContainer} flex justify-center`}>
        <ArrowButton text="Learn More" href="/" />
        <div className={`${styles.spacer}`} />
        <UnderlinedButton href="/" text="Learn More" underlineColor="passionBlue" />
      </div>
    </div>
  )
}

export default ContentStackItemBlock
