import React from 'react';
import styles from './HeaderForPostedLoads.module.scss'
const HeaderForPostedLoads = () => {
  return (
    <div className={styles.container}>
      {/* <div>Pick-up</div>
      <div>Drop-off</div>
      <div className={styles.orig}>Origin</div>
      <div className={styles.dest}>Destination</div>
      <div>Truck</div>
      <div>F/P</div>
      <div>Length</div>
      <div>Weight</div>
      <div>Offer Rate</div> */}

      <div className={styles.pu}>Pick-up</div>
      <div className={styles.dropOff}>Drop-off</div>
      <div className={styles.orig}>Origin</div>
      <div className={styles.dest}>Destination</div>
      <div className={styles.equipment}>Truck</div>
      <div className={styles.fp}>F/P</div>
      <div className={styles.len}>Length</div>
      <div className={styles.weight}>Weight</div>
      <div className={styles.price}>Offer Rate</div>
    </div>
  )
}

export default HeaderForPostedLoads;