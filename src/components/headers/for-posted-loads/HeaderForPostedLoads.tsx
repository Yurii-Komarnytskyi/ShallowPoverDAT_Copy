import React from 'react';
import styles from './HeaderForPostedLoads.module.css'
const HeaderForPostedLoads = () => {
  return (
    <div className={styles.container}>
      <div>Pick-up</div>
      <div>Drop-off</div>
      <div className={styles.orig}>Origin</div>
      <div className={styles.dest}>Destination</div>
      <div>Truck</div>
      <div>F/P</div>
      <div>Length</div>
      <div>Weight</div>
      <div>Offer Rate</div>
    </div>
  )
}

export default HeaderForPostedLoads;