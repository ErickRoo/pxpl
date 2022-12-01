import React, { FC } from 'react'
import WysiwygInterface from '../wysiwyg.interface'
import styles from '../wysiwyg.module.scss'
import WysiwygBgToggle from './wysiwtg_bg_toggle'
import WysiwygSection from './wysiwyg_section'

interface Asset {
  image?: string
  video?: string
  caption?: string
}

const hasMultipleItems = (array: any[]) => array.length > 1

const SingleAsset: FC<{ asset: Asset }> = ({ asset }) => (
  <figure>
    {asset?.image && <img src={asset?.image} alt="" />}
    {asset?.video && (
      <video controls muted>
        <source src={asset?.video} type="video/mp4" />
      </video>
    )}
    {asset?.image && <figcaption>{asset?.caption}</figcaption>}
  </figure>
)

const Slider = ({ items }: { items: any[] }) => {
  const [current, setCurrent] = React.useState(0)
  const { length } = items
  const total = length
  const numberShow = current + 1

  return (
    <div>
      <div>
        <SingleAsset
          asset={items[current]}
        />
      </div>
      <div className={styles.sliderNav}>
        <div className={styles.arrowLeft}>
          <img
            src="/images/CaretCircleLeft.svg"
            alt="arrow-left"
            onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}
            onKeyDown={() => setCurrent(current === 0 ? length - 1 : current - 1)}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
          />
        </div>
        <span className={styles.navText}>
          {numberShow}
          /
          {total}
        </span>
        <div className={styles.arrowRight}>
          <img
            src="/images/CaretCircleRight.svg"
            alt="arrow-right"
            onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}
            onKeyDown={() => setCurrent(current === length - 1 ? 0 : current + 1)}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
          />
        </div>
      </div>
    </div>
  )
}

const Assets = ({ items }: { items: any[] }) => {
  if (hasMultipleItems(items)) {
    return <Slider items={items} />
  }
  return <SingleAsset asset={items[0]} />
}

const WysiwygInlineMedia: FC<{ block: WysiwygInterface }> = ({ block }) => {
  if (!block?.type) return null

  const { modules, backgroundToggle } = block
  const { inlineMedia } = modules

  return (
    <WysiwygSection>
      <WysiwygBgToggle
        bgToggle={backgroundToggle}
        stylesOn={styles.inlineMediaContainerBT}
        stylesOff={styles.inlineMediaContainer}
      >
        <Assets items={inlineMedia} />
      </WysiwygBgToggle>
    </WysiwygSection>
  )
}

export default WysiwygInlineMedia
