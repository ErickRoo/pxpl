import React, { FC } from 'react'
import { OneColumnBodyInterface } from './one-column-body.interface'
import styles from './one-column-body.module.scss'

const OneColumnBody: FC<OneColumnBodyInterface> = () => (
  <div className={styles.root}>something</div>
)

export default OneColumnBody
