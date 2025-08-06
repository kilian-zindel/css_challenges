import React from 'react'
import styles from './nigerFlag.module.css'

const NigerFlag = () => {
  return (
    <div className={styles.container}>
        <div className={styles.orangeStripe}></div>
        <div className={styles.circle}></div>
        <div className={styles.greenStripe}></div>
    </div>
  )
}

export default NigerFlag