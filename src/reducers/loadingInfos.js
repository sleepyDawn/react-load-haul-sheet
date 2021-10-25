// LoadingInfos Reducer
import { v4 as uuidv4 } from "uuid";

const loadingInfosReducerDefaultState = [
    {   
        id: uuidv4(),
        productionDate: '24.10.2021',
        shift: 'SF1A',
        lineNo: 1,
        location: 'OB BENCH-1',
        resourceExcavator: 'EKG_468',
        excavatorOperator: '26231035',
        helperName: 'HELPER1',
        operatingTime: 180,
        breakdownTime: 0,
    },
    {   
        id: uuidv4(),
        productionDate: '24.10.2021',
        shift: 'SF1A',
        lineNo: 2,
        location: 'OB BENCH-2',
        resourceExcavator: 'CK_723',
        excavatorOperator: '26248527',
        helperName: 'HELPER2',
        operatingTime: 180,
        breakdownTime: 0,
    },
];

export default (state = loadingInfosReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_LOADINGINFO':
      return [
        ...state,
        action.loadingInfo
      ];
    case 'REMOVE_LOADINGINFO':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_LOADINGINFO':
      return state.map((loadingInfo) => {
        if (loadingInfo.id === action.id) {
          return {
            ...loadingInfo,
            ...action.updates
          };
        } else {
          return loadingInfo;
        };
      });
    default:
      return state;
  }
};
