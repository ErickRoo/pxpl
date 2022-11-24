import React, { FC } from 'react'
import LogoGardenInterface from '../logo_garden.interface'
import styles from '../logo_garden.module.scss'

const LogosLooping: FC<{ block: LogoGardenInterface }> = ({ block }) => {
  const logoCount = block?.logos?.length ? block.logos.length * 3 : 0
  const animationDuration = logoCount * 2
  const sslideTrackStyles = {
    width: `calc(18rem * ${logoCount})`,
    animationDuration: `${animationDuration}s`,
    animationIterationCount: 'infinite',
  }
  const logos = block?.logos?.concat(block?.logos)
  const random = (index: number) => Math.floor(Math.random() * (index * 1000 - 1000 + 1) + 1000)

  return (
    <section className={`${styles.root}`}>
      <div className="container">
        <div className={`${styles.headline}`}>
          <h2 className="typo-h5">{block?.headline}</h2>
        </div>
      </div>
      <div className={` ${styles.slider}`}>
        <div className={styles.slideTrack} style={sslideTrackStyles}>
          {logos?.map((logo, index) => (
            <div key={`${logo?.alt}-${random(index)}`} className={`${styles.logo} ${styles.slide}`}>
              <img src={logo?.src} alt={logo?.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogosLooping
