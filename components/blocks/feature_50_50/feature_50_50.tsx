import React, { FunctionComponent } from 'react'
import styles from './feature_50_50.module.scss'
import Feature5050Interface from './feature_50_50.interface'

export const typename = 'Set_Replicator_BlockFeature5050'

const Feature5050Block:FunctionComponent<{ block: Feature5050Interface }> = () => (
  <div className={`${styles.root} container`}>
    Feature 50 50 Block
  </div>
)

export default Feature5050Block
