
/*
NOTES: 

1. Gradient Border (gradient is 15) 
2. Hover State:
- flips gradient colors horizontally 
- button grows slightly in size 
- text changes from gray to white 
3. Center Button on Page 

*/

import styles from './colorfulButton.module.css';

const ColorfulButton = () => {


    return (
        <div className={styles.container}>
            <div className={styles.buttonBorder}>
                <button className={styles.colorfulButton}>Start Coding!</button>
            </div>
        </div>
    )
}

export default ColorfulButton;