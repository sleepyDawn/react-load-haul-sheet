import { v4 as uuidv4 } from 'uuid';


// ADD_EXPENSE
export const addLoadingInfo = (
  {     
        productionDate = '',
        shift =  '',
        location = '',
        resourceExcavator = '',
        excavatorOperator = '',
        helperName = '',
        operatingTime =  0,
        breakdownTime =  0,
    } = {}
) => ({
  type: 'ADD_LOADINGINFO',
  drillingInfo: {
    id: uuidv4(),
    productionDate,
    shift,
    location,
    resourceExcavator,
    excavatorOperator,
    helperName,
    operatingTime,
    breakdownTime,
  }
});

// REMOVE_EXPENSE
export const removeLoadingInfo = (id) => ({
  type: 'REMOVE_LOADINGINFO',
  id
});

// EDIT_EXPENSE
export const editLoadingInfo = (id, updates) => ({
  type: 'EDIT_LOADINGINFO',
  id,
  updates
});
