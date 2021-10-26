// import moment from "moment";

import moment from "moment";

// PiSheetInfos Reducer

const piSheetInfoDefaultState = {
  plant : 2012, 
  processOrder : 70003962, 
  productionDate : moment().format("DD.MM.YYYY"),
  shift: 'SF1A'
};

export default (state = piSheetInfoDefaultState, action) => {
    switch (action.type) {
      case 'SET_PLANT':
        return {
          ...state,
          plant: action.plant
        };
      case 'SET_PROCESSORDER':
        return {
          ...state,
          processOrder: action.processOrder
        };
      case 'SET_PRODUCTIONDATE':
        return {
          ...state,
          productionDate: action.productionDate
        };
      case 'SET_SHIFT':
        return {
          ...state,
          shift: action.shift
        };
      
      default:
        return state;
    }
  };