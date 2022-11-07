import React, { FunctionComponent } from 'react'
import styles from './pre_footer.module.scss'
import PreFooterInterface from './pre_footer.interface'

export const typename = 'Set_Replicator_BlockPreFooter'

const PreFooterBlock:FunctionComponent<{ block: PreFooterInterface }> = ({ block }) => {
  console.log(block)
  return (
    <div
      className={`${styles.root} container`}
    >
      Pre footer Block
    </div>
  )
}

export default PreFooterBlock
