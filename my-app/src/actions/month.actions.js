import {GET_MONTH} from '../helpers/actionsConst';
import {getAllMonth} from '../helpers/api';


export const getMonth = async (dispatch)=>{
    const month = await getAllMonth();
    dispatch ( {
        type: GET_MONTH,
        payload: month,
    } )
};