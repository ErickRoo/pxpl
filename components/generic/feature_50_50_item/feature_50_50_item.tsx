import React, { FunctionComponent } from 'react'
import styles from './feature_50_50_item.module.scss'
import Feature5050ItemInterface from './feature_50_50_item.interface'

const Feature5050Item:FunctionComponent<Feature5050ItemInterface> = () => (
  <div className={`${styles.root} container`}>
    Feature 50 50 Block
  </div>
)

export default Feature5050Item
