// LoadingHaulingInfos Reducer
import { v4 as uuidv4 } from "uuid";

const loadingHaulingInfosReducerDefaultState = [
    {   
        id: uuidv4(),
        productionDate: '24.10.2021',
        shift: 'SF1A',
        lineNo: 1,
        seamNo: '6.22',
        location: 'OB BENCH-1',
        resourceExcavator: 'EKG_468',
        excavatorOperator: '26231035',
        resourceDumper: '60854',
        dumperOperator: 'AKASH',
        operatingTime: 180,
        breakdownTime: 0,
        noOfTrips: 13
    },
    {   
        id: uuidv4(),
        productionDate: '24.10.2021',
        shift: 'SF1A',
        lineNo: 2,
        seamNo: '9.44',
        location: 'OB BENCH-2',
        resourceExcavator: 'CK_723',
        excavatorOperator: '26248527',
        resourceDumper: '60773',
        dumperOperator: 'RAMESH',
        operatingTime: 210,
        breakdownTime: 0,
        noOfTrips: 16
    },
];

export default (state = loadingHaulingInfosReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_LOADINGHAULINGINFO':
      return [
        ...state,
        action.loadingHaulingInfo
      ];
    case 'REMOVE_LOADINGHAULINGINFO':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_LOADINGHAULINGINFO':
      return state.map((loadingHaulingInfo) => {
        if (loadingHaulingInfo.id === action.id) {
          return {
            ...loadingHaulingInfo,
            ...action.updates
          };
        } else {
          return loadingHaulingInfo;
        };
      });
    default:
      return state;
  }
};
