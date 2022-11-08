import React, { FunctionComponent } from 'react'
import styles from './side_side.module.scss'
import SideSideInterface from './side_side.interface'

export const typename = 'Set_Replicator_BlockSideSide'

const SideSideBlock:FunctionComponent<{ block: SideSideInterface }> = () => (
  <div
    className={`${styles.root} container`}
  >
    Side side Block
  </div>
)

export default SideSideBlock
