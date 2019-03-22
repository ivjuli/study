import {GET_MONTH} from '../helpers/actionsConst';

const iniState = [
    {
     "idMonth": 1,
     "nameMonth": "ЯНВАРЬ"
   },
   
   {
     "idMonth": 2,
     "nameMonth": "ФЕВРАЛЬ"
   },
   {
     "idMonth": 3,
     "nameMonth": "МАРТ"
   },
   {
     "idMonth": 4,
     "nameMonth": "АПРЕЛЬ"
   },
   {
     "idMonth": 5,
     "nameMonth": "МАЙ"
   },
   {
     "idMonth": 6,
     "nameMonth": "ИЮНЬ"
   },
   {
     "idMonth": 7,
     "nameMonth": "ИЮЛЬ"
   },
   {
     "idMonth": 8,
     "nameMonth": "АВГУСТ"
   },
   {
     "idMonth": 9,
     "nameMonth": "СЕНТРЯБРЬ"
   },
   {
     "idMonth": 10,
     "nameMonth": "ОКТЯБРЬ"
   },
   {
     "idMonth": 11,
     "nameMonth": "НОЯБРЬ"
   },
   {
     "idMonth": 12,
     "nameMonth": "ДЕКАБРЬ"
   }
   ]
   

   export default function month(state=iniState, action) {
       switch (action.type) {
        case GET_MONTH:
        return [... action.payload];
        default: 
        return state;
    }
}
   