import React, { FunctionComponent } from 'react'
import styles from './feature_50_50_item.module.scss'
import Feature5050ItemInterface from './feature_50_50_item.interface'

export const typename = 'Set_Replicator_BlockFeature5050'

const Feature5050Item:FunctionComponent<{ block: Feature5050ItemInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Feature 50 50 Block
    {console.log(block)}
  </div>
)

export default Feature5050Item
