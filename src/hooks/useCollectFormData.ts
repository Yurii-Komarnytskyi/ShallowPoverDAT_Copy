import { useReducer } from 'react';
import { IshippingLoadInfo } from '../ts/interfaces';
import { keysOf_IshippingLoadInfo } from '../ts/types';
import { prettyfyDate } from '../utils/utils';

type actionTypes = 'UPD_INPUT_FIELD' | 'UPD_SELECT_FIELD' | 'UPD_DATE_FIELD' | 'UPD_TEXTAREA_FIELD';  
type postingFormAction = {
    type: actionTypes,
    payload: {
        updStateByKey: keysOf_IshippingLoadInfo
        value: string | number,
    }
}

export const useManagePostFreightDate = (stateType: IshippingLoadInfo): 
    [IshippingLoadInfo, Function, Function, Function, Function] => {
        const initState: typeof stateType = {} as typeof stateType;
        const handleInputChange = (updKey: keysOf_IshippingLoadInfo) => {
            return (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({type: 'UPD_INPUT_FIELD', payload: {updStateByKey: updKey, value: e.target.value}})
            }
        }
        const handleDateChange = (updKey: keysOf_IshippingLoadInfo) => {
            return (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({type: 'UPD_DATE_FIELD', payload: {updStateByKey: updKey, value: e.target.value}})
            }
        }
        const handleSelectChange = (updKey: keysOf_IshippingLoadInfo) => {
            return (e: React.ChangeEvent<HTMLSelectElement>) => {
            dispatch({type: 'UPD_SELECT_FIELD', payload: {updStateByKey: updKey, value: e.target.value}})
            }
        }
        const handleTextAreaChange = (updKey: keysOf_IshippingLoadInfo) => {
            return (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            dispatch({type: 'UPD_TEXTAREA_FIELD', payload: {updStateByKey: updKey, value: e.target.value}})
            }
        }
        function reducer (state: typeof initState, action: postingFormAction) {
            switch (action.type) {
                case 'UPD_INPUT_FIELD':
                    return {...state, [action.payload.updStateByKey] : action.payload.value}
                case 'UPD_SELECT_FIELD':
                    return {...state, [action.payload.updStateByKey] : action.payload.value}
                case 'UPD_DATE_FIELD':
                    return {...state, [action.payload.updStateByKey] : prettyfyDate(`${action.payload.value}`)}
                case 'UPD_TEXTAREA_FIELD':
                    return {...state, [action.payload.updStateByKey] : action.payload.value}
                default:
                return state;
            }
        }
        const [formState, dispatch] = useReducer(reducer, initState)
        return [formState, handleInputChange, handleDateChange, handleSelectChange, handleTextAreaChange];
}

