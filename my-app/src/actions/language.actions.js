import {GET_LANGUAGE, DEL_NAME_LANGUAGE} from '../helpers/actionsConst';
import {getAllLanguage} from '../helpers/api';


export const getLanguage = async (dispatch)=>{
    const language = await getAllLanguage();
    dispatch( {
        type: GET_LANGUAGE,
        payload: language,
    } )
};

export const delLanguage = () => {
    return {type: DEL_NAME_LANGUAGE};
}