import React from 'react';
import { IshippingLoadInfo } from '../../ts/interfaces';
import styles from './PostedLoadBar.module.css';


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
      <div>{pickUpDate}</div>
      <div>{deliveryDate}</div>
      <div className={styles.orig}>{origin}</div>
      <div className={styles.dest}>{destination}</div>
      <div>{equipment}</div>
      <div>{fp}</div>
      <div>{truckLength} ft</div>
      <div>{loadWeight} lbs</div>
      <div className={styles.price}>${offerRate}</div>
    </div>
  )
}

export default PostedLoadBar;