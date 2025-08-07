import React from 'react'
import styles from './githubProfileLayout.module.css'
import ProfilePic from '../../assets/image.png'

const GithubProfileLayout = () => {
  return (
    <div className={styles.card}>
        <img src={ProfilePic}></img>
        <h3>Kilian Zindel</h3>
        <p className={styles.username}>kilianz1861</p>
        <p className={styles.bio}>Panet Earth's best CSS programmer.</p>
        <button>Edit Profile</button>
    </div>
  )
}

export default GithubProfileLayout