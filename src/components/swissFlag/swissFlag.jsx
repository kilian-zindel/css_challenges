import React from 'react'
import styles from './swissFlag.module.css'

const SwissFlag = () => {
  return (
    <div className={styles.background}>
        <div className={styles.verticalRect}></div>
        <div className={styles.horizontalRect}></div>
    </div>
  )
}

export default SwissFlag