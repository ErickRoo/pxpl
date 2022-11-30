import React, { FunctionComponent } from 'react'
import NumberSquareItemInterface from './number-square.interface'
import styles from './number-square.module.scss'

const NumberSquare: FunctionComponent<NumberSquareItemInterface> = ({
  order, isActive,
}) => {
  let numberList = `${order}`
  if (order < 10) {
    numberList = `0${order}`
  }
  return (
    <div
      className={
      `${styles.root} ${!isActive ? 'bg-passionBlue' : ''} border-2 border-passionBlue w-fit flex justify-center items-center`
      }
    >
      <span className={`eyebrow ${!isActive ? 'text-butterCream' : 'text-passionBlue'}`}>{numberList}</span>
    </div>
  )
}

export default NumberSquare
