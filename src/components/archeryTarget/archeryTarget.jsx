import styles from './archeryTarget.module.css'
import React from 'react'

const ArcheryTarget = () => {
  return (
    <div className={styles.container}>
        <div className={styles.black}>
            <div className={styles.blue}>
                <div className={styles.red}>
                    <div className={styles.yellow}>
                        <div className={styles.filter}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default ArcheryTarget