import { v4 as uuidv4 } from 'uuid';


// ADD_EXPENSE
export const addLoadingHaulingInfo = (
  {     
        productionDate = '',
        shift =  '',
        resourceExcavator = '',
        resourceDumper = '',
        dumperOperator = '',
        operatingTime =  0,
        breakdownTime =  0,
        noOfTrips = 0
    } = {}
) => ({
  type: 'ADD_LOADINGHAULINGINFO',
  drillingInfo: {
    id: uuidv4(),
    productionDate,
    shift,
    resourceExcavator,
    resourceDumper,
    dumperOperator,
    operatingTime,
    breakdownTime,
    noOfTrips,
  }
});

// REMOVE_EXPENSE
export const removeLoadingHaulingInfo = (id) => ({
  type: 'REMOVE_LOADINGHAULINGINFO',
  id
});

// EDIT_EXPENSE
export const editLoadingHaulingInfo = (id, updates) => ({
  type: 'EDIT_LOADINGHAULINGINFO',
  id,
  updates
});
