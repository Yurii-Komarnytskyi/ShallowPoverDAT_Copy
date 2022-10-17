import React from 'react';
import { IshippingLoadInfo } from '../../ts/interfaces';
import styles from './PostedLoadBar.module.scss';


const PostedLoadBar: React.FC<IshippingLoadInfo> = ({
  deliveryDate,
  destination,
  equipment,
  fp,
  loadWeight,
  offerRate,
  origin,
  pickUpDate,
  truckLength,
  comments,
  extraLoadOptions, 
  loadHeight,
  pallets,
  pieces,
  referenceId,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.pu}>{pickUpDate}</div>
      <div className={styles.dropOff}>{deliveryDate}</div>
      <div className={styles.orig}>{origin}</div>
      <div className={styles.dest}>{destination}</div>
      <div className={styles.equipment}>{equipment}</div>
      <div className={styles.fp}>{fp}</div>
      <div className={styles.len}>{truckLength} ft</div>
      <div className={styles.weight}>{loadWeight} lbs</div>
      <div className={styles.price}>${offerRate}</div>
    </div>
  )
}

export default PostedLoadBar;