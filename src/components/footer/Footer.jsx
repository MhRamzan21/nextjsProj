import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>@2023 | FirstProj. All rights reserved.</div>
      <div className={styles.social}>
        <Image src='/1.png' width={15} height={15} className={styles.icon} alt='1st'/>
        <Image src='/2.png' width={15} height={15} className={styles.icon} alt='2st'/>
        <Image src='/3.png' width={15} height={15} className={styles.icon} alt='3st'/>
        <Image src='/4.png' width={15} height={15} className={styles.icon} alt='4st'/>
      </div>
    </div>
  )
}

export default Footer
