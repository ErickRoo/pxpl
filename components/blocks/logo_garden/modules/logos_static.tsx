import React, { FC } from 'react'
import LogoGardenInterface from '../logo_garden.interface'
import styles from '../logo_garden.module.scss'

const LogosStatic: FC<{ block: LogoGardenInterface }> = ({ block }) => (
  <section className={`${styles.root}`}>
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.headline}>
        <h2 className="typo-h5">{block?.headline}</h2>
      </div>
      <div className={styles.logos}>
        {block?.logos?.map((logo) => (
          <div key={logo?.alt} className={styles.logo}>
            <img src={logo?.src} alt={logo?.alt} />
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default LogosStatic
