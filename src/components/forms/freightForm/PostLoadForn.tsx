import React from 'react';
import { useManagePostFreightDate } from '../../../hooks/useCollectFormData';
import { useAppDispatch } from '../../../store/appHooks';
import { postNewLoad } from '../../../store/shippingLoadsSlice';
import { IshippingLoadInfo } from '../../../ts/interfaces';
import styles from './PostLoadForn.module.scss';

const PostLoadForn = () => {
  const [formState, 
    handleInputChange, 
    handleDateChange, 
    handleSelectChange, 
    handleTextAreaChange] = useManagePostFreightDate({} as IshippingLoadInfo);
  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <form className={styles.wrapper}>
        <input 
          className={styles.pu}
          onChange={handleDateChange('pickUpDate')}
          type='date'
        />
        <input 
          className={styles.dropOff}
          onChange={handleDateChange('deliveryDate')}
          type='date'
        />
        <div className={styles.orig}>
          <input
            onChange={handleInputChange('origin')}
            placeholder='City, ST'
          />
        </div>
        <div className={styles.dest}>
          <input
            onChange={handleInputChange('destination')}
            placeholder='City, ST'
          />
        </div>   
        <select 
          className={styles.equipment}
          onChange={handleSelectChange('equipment')}
        >
          <option value="VAN">VAN</  option>
          <option value="FB">FB</option>
          <option value="CONG">CONG</option>
          <option value="HS">HS</option>
        </select>

        <select 
          className={styles.fp}
          onChange={handleSelectChange('fp')}
        >
          <option value="Full">Full</option>
          <option value="Partial">Partial</option>
        </select>

        <input 
          className={styles.len}
          onChange={handleInputChange('truckLength')}
          placeholder='Length'
          type="number" 
        />

        <input 
          className={styles.weight}
          onChange={handleInputChange('loadWeight')}
          placeholder='Weight'
          type="number" 
        />
        <input 
          className={styles.rate}
          onChange={handleInputChange('offerRate')}
          placeholder='Rate in $'
          type="number" 
        />
      </form>
    
      <div className={styles.testCont}>
        <input 
          className={styles.refN}
          onChange={handleInputChange('referenceId')}
          placeholder='Reference number'
        />
        <select 
          className={styles.agInf}
        >
          <option value="(724) 584-5957"> (724) 584-5957 </option>
          <option value="ykomarnytskyi@plslogistics.com"> ykomarnytskyi@plslogistics.com </option>
        </select>
        <select 
          className={styles.opt}
          onChange={handleSelectChange('extraLoadOptions')}
        >
          <option value="TARPS">TARPS</option>
          <option value="STRAPS">STRAPS</option>
          <option value="HAZMAT">HAZMAT</option>
          <option value="TEAM">TEAM</option>
        </select>
        <input 
          className={styles.hei} 
          onChange={handleInputChange('loadHeight')}
          placeholder='Height'
          type="number" 
        />
        <input 
          className={styles.pall}
          onChange={handleInputChange('pallets')}
          placeholder='Pallets'
          type="number" 
        />
        <input 
          className={styles.pc}
          onChange={handleInputChange('pieces')}
          placeholder='Pieces'
          type="number" 
        />
        <textarea 
          className={styles.txtA} 
          onChange={handleTextAreaChange('comments')}
          rows={3}
        >
          
        </textarea>
        <button className={styles.saveBttn} onClick={()=> dispatch(postNewLoad(formState))}>SAVE</button>
      </div>
    </React.Fragment>
  )
}

export default PostLoadForn;
