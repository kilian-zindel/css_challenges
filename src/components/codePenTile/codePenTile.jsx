import styles from './codePenTile.module.css'
import { useState } from 'react'
import { Heart, MessageCircle } from 'lucide-react'

const CodePenTile = () => {

    // const [isHovering, setIsHovering] = useState(false) 
    const isHovering = true;

    const thumbnailURL = "https://holbornassets.com/wp-content/uploads/2021/04/spain-city-view.png"
    const avatarURL = "https://img.uefa.com/imgml/TP/players/3/2024/324x324/250176450.jpg"

    return (
        <div className={styles.card}
            // onMouseEnter={() => {setIsHovering(true)}}
            // onMouseLeave={() => {setIsHovering(false)}}
            >
            <div className={styles.cardThumbnail}>
                <img alt="" src={thumbnailURL}></img>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardAvatar}>
                    <img alt="card avatar" src={avatarURL}></img>
                </div>
                <div className={styles.cardDetails}>
                    <h3>Lamine Yamal</h3>
                    <p>FC Barcelona #19</p>
                </div>
            </div>
            { isHovering && <div className={styles.cardStats}>
                <div className={styles.likes}>
                    <Heart color="white" size="18px" fill="white"/>
                    <p>8</p>
                </div>
                <div className={styles.likes}> 
                    <MessageCircle color="white" size="18px" fill="white"/>
                    <p>12</p>
                </div>
            </div>}
        </div>
    )
}

export default CodePenTile;

