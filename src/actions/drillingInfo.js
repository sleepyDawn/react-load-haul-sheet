import { v4 as uuidv4 } from 'uuid';


// ADD_EXPENSE
export const addDrillingInfo = (
  {     
        productionDate = '',
        shift =  '',
        location = '',
        resourceDrill = '',
        drillOperator = '',
        helperName = '',
        operatingTime =  0,
        breakdownTime =  0,
        holesDrilled = 0,
        avgMetersDrilled = 0
    } = {}
) => ({
  type: 'ADD_DRILLINGINFO',
  drillingInfo: {
    id: uuidv4(),
    productionDate,
    shift,
    location,
    resourceDrill,
    drillOperator,
    helperName,
    operatingTime,
    breakdownTime,
    holesDrilled,
    avgMetersDrilled
  }
});

// REMOVE_EXPENSE
export const removeDrillingInfo = (id) => ({
  type: 'REMOVE_DRILLINGINFO',
  id
});

// EDIT_EXPENSE
export const editDrillingInfo = (id, updates) => ({
  type: 'EDIT_DRILLINGINFO',
  id,
  updates
});
