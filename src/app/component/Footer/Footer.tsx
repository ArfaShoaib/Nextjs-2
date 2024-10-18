import React from 'react'
import styles from './Footer.module.css'
import { PiLineVerticalLight } from 'react-icons/pi';


const Footer = () => {
    return(
      <div className={styles.head}>
            <header className={styles.heads}>
                <h1>@ 2024 Nextjs Footer</h1>
            </header>
            <div className={styles.spans}>
                <div className={styles.support}>
                    <p>SupportUs</p>
                    <PiLineVerticalLight />
                </div>
                <div className={styles.support}>
                    <p>FollowUs</p>
                    <PiLineVerticalLight />
                </div>
                <div className={styles.support}>
                    <p>AboutUs</p>
                    <PiLineVerticalLight />
                </div>
                <div className={styles.support}>
                    <p>ContactUs</p>
                    <PiLineVerticalLight />
                </div>
            </div>
        </div>
    )
}

export default Footer
