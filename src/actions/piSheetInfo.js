import moment from "moment"


// SET_PLANT
export const setPlantVal = (plant = 0) => {
    return {
        type: 'SET_PLANT',
        plant
    }
}


// SET_PROCESSORDER
export const setProcessOrderVal = (processOrder = 0) => {
    return {
        type: 'SET_PROCESSORDER',
        processOrder
    }
}


// SET_PRODUCTIONDATE
export const setProductionDateVal = (productionDate = moment().format("DD.MM.YYYY")) => {
    return {
        type: 'SET_PRODUCTIONDATE',
        productionDate
    }
}

// SET_SHIFT
export const setShiftVal = (shift = 'SF1A') => {
    return {
        type: 'SET_SHIFT',
        shift
    }
}

