import React, { FunctionComponent } from 'react'
import styles from './left_right_feature.module.scss'
import LeftRightFeatureInterface from './left_right_feature.interface'

export const typename = 'Set_Replicator_BlockLeftRightFeature'

const LeftRightFeatureBlock:FunctionComponent<{ block: LeftRightFeatureInterface }> = () => (
  <div className={styles.root}>
    <section className={styles.wrapper}>
      Left right feature Block
    </section>
  </div>
)

export default LeftRightFeatureBlock
