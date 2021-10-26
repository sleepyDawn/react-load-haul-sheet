import moment from 'moment';
import React, { useState } from "react";
import { connect } from "react-redux";
import { SingleDatePicker } from "react-dates";
import { Link } from 'react-router-dom';
import { Container, Form, Button, Table } from 'react-bootstrap';
import { setPlantVal, setProcessOrderVal, setProductionDateVal, setShiftVal } from "../actions/piSheetInfo";
import { editDrillingInfo } from '../actions/drillingInfo';
import { editLoadingInfo } from "../actions/loadingInfo";
import { editLoadingHaulingInfo } from '../actions/loadingHaulingInfo';
import downloadExcel from '../utility/downloadExcel';

// import { renderMonthElement} from "../utility/renderMonthElement"

export const PiSheetInfo = (props) => {
    

    const plant = props.piSheetInfos.plant
    const processOrder = props.piSheetInfos.processOrder
    const productionDate= props.piSheetInfos.productionDate
    const [currDate, setCurrDate] = useState(productionDate);

    
    

    const onDateChange = (e) => {

        const regex = /^[0-9]{2}[\.]{1}[0-9]{2}[\.]{1}[0-9]{4}$/g;
        // console.log("checking date : ", e.target.value);
        // console.log("testing regex: ", regex.test(e.target.value));
        setCurrDate(e.target.value);
        if(regex.test(e.target.value)){
            //do something
            const dateMomentObj = moment(e.target.value, "DD.MM.YYYY");
            console.log("checking date : ", e.target.value, dateMomentObj);
            
          props.setProductionDateVal(dateMomentObj.format("DD.MM.YYYY"));
          props.drillingInfos.forEach(drillingInfo => {
              props.editDrillingInfo(drillingInfo.id, {productionDate: dateMomentObj.format("DD.MM.YYYY")})
          });
          props.loadingInfos.forEach(loadingInfo => {
              props.editLoadingInfo(loadingInfo.id, {productionDate: dateMomentObj.format("DD.MM.YYYY")})
          });
          props.loadingHaulingInfos.forEach(loadingHaulingInfo => {
              props.editLoadingHaulingInfo(loadingHaulingInfo.id, {productionDate: dateMomentObj.format("DD.MM.YYYY")})
          });

       }
       

       
            
        
      };
    


    const onPlantChange = (e) => {
        const currVal = e.target.value;
        if(!currVal || currVal.match(/^[0-9]*$/)) {
           
            props.setPlantVal(currVal)
        }
    }

    const onProcessOrderChange = (e) => {
        const currVal = e.target.value;
        if(!currVal || currVal.match(/^[0-9]*$/)) {
            props.setProcessOrderVal(currVal);
            // console.log("checking the curent target value : ", props.piSheetInfos.shift);
            console.log(props);
        }
    }
    const shifts = props.piSheetListData.shifts;
    const onShiftChange = (e) => {
        const currVal = e.target.value;
  
        props.setShiftVal(currVal);
        props.drillingInfos.forEach(drillingInfo => {
            props.editDrillingInfo(drillingInfo.id, {shift: currVal})
        });
        props.loadingInfos.forEach(loadingInfo => {
            props.editLoadingInfo(loadingInfo.id, {shift: currVal})
        });
        props.loadingHaulingInfos.forEach(loadingHaulingInfo => {
            props.editLoadingHaulingInfo(loadingHaulingInfo.id, {shift: currVal})
        });
        
        
    }

    const onCompleteInfoSubmit = () => downloadExcel({
        piSheetInfos: props.piSheetInfos,
        drillingInfos: props.drillingInfos,
        loadingInfos: props.loadingInfos,
        loadingHaulingInfos: props.loadingHaulingInfos
        
    })

    // console.log("checking List Item: ", props.piSheetListData.shifts);

    return (
        <Container className="mt-5">
            <Table striped bordered hover size="sm" responsive="sm">
                <thead>
                    <tr>
                    <th>Plant</th>
                    <th>Process Order</th>
                    <th>Production Date(DD.MM.YYYY)</th>
                    <th>Shift</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                    <Form.Control
                        type="text"
                        size="lg"
                        placeholder="Plant"
                        value={plant}
                        onChange={onPlantChange}
                    />
                    </td>
                    <td>
                        <Form.Control
                            type="text"
                            size="lg"
                            placeholder="Process Order"
                            value={processOrder}
                            onChange={onProcessOrderChange}
                        />
                    </td>
                    <td>
                        <Form.Control
                            type="text"
                            id="dateFieldHtml5"
                            size="lg"
                            placeholder="DD.MM.YYYY"
                            value={currDate}
                            onChange={onDateChange}
                        />
                    </td>

                    <td>
                        <Form.Select 
                            aria-label="shifts"
                            size="lg"
                            onChange={onShiftChange} 
                            value= {props.piSheetInfos.shift}
                            >   
                                {shifts.map(shift => (
                                    <option key={`${shift}adf`} value={shift}>{shift}</option>
                                ))}
                        </Form.Select>
                    </td>
                    <td>
                        <Button variant="primary" size="lg" onClick={onCompleteInfoSubmit}>Submit Info</Button>
                    </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
      );
}

const mapStateToProps = (state) => {
    
    return {
        piSheetInfos: state.piSheetInfos,
        piSheetListData: state.piSheetListData,
        drillingInfos: state.drillingInfos,
        loadingInfos: state.loadingInfos,
        loadingHaulingInfos: state.loadingHaulingInfos

    }
}

const mapDispatchToProps = (dispatch) => ({
    setPlantVal: (plant) => dispatch(setPlantVal(plant)),
    setProcessOrderVal: (processOrder) => dispatch(setProcessOrderVal(processOrder)),
    setProductionDateVal: (productionDate) => dispatch(setProductionDateVal(productionDate)),
    setShiftVal: (shift) => dispatch(setShiftVal(shift)),
    editDrillingInfo: (id, updates) => dispatch(editDrillingInfo(id,updates)),
    editLoadingInfo: (id, updates) => dispatch(editLoadingInfo(id,updates)),
    editLoadingHaulingInfo: (id, updates) => dispatch(editLoadingHaulingInfo(id,updates)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PiSheetInfo);