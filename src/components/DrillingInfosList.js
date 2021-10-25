import React from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button, Table } from 'react-bootstrap';

import { editDrillingInfo } from '../actions/drillingInfo';


export const DrillingInfosList = (props) => {

  const piSheetListData = props.piSheetListData;
  const drillingInfos = props.drillingInfos;

  const getIdAndUpdatesObj = (e, idExtra) => {
    const targetId = e.target.id;
    const currVal = e.target.value;
    
    const targetDrillingInfo = drillingInfos.filter(drillingInfo =>{
      return drillingInfo.id + idExtra === targetId
    })
    

    return {
      id: targetDrillingInfo[0].id,
      updateObj: targetDrillingInfo[0],
      currVal: currVal
    }
   
  }

  const onLocationChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, "location");
    
    props.editDrillingInfo(id, { ...updateObj, location: currVal })
  }

  const onResourceDrillChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'resourceDrill');
    // console.log(id, updateObj, currVal);
    props.editDrillingInfo(id, { ...updateObj, resourceDrill: currVal })
  
  }

  const onDrillOperatorChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'drillOperator');
    // console.log(id, updateObj, currVal);
    props.editDrillingInfo(id, { ...updateObj, drillOperator: currVal })
  
  }

  const onHelperNameChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'helperName');
    // console.log(id, updateObj, currVal);
    props.editDrillingInfo(id, { ...updateObj, helperName: currVal })
  
  }

  const onOperatingTimeChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'operatingTime');
    // console.log(id, updateObj, currVal);
    props.editDrillingInfo(id, { ...updateObj, operatingTime: currVal })
  
  }
  const onBreakdownTimeChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'breakdownTime');
    // console.log(id, updateObj, currVal);
    props.editDrillingInfo(id, { ...updateObj, breakdownTime: currVal })
  
  }
  const onHolesDrilledChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'holesDrilled');
    // console.log(id, updateObj, currVal);
    props.editDrillingInfo(id, { ...updateObj, holesDrilled: currVal })
  
  }
  const onAvgMetersDrilledChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'avgMetersDrilled');
    // console.log(id, updateObj, currVal);
    props.editDrillingInfo(id, { ...updateObj, avgMetersDrilled: currVal })
  
  }

  

  return (
    <Container className="mt-5" fluid>
        <h3 className="p-3 mb-2 bg-info text-dark">Drilling Info</h3>  
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>LOCATION</th>
                <th>RESOURCE_DRILL</th>
                <th>DRILL_OPERATOR</th>
                <th>HELPER NAME</th>
                <th>OPERATING TIME(min)</th>
                <th>BREAKDOWN TIME(min)</th>
                <th>HOLES DRILLED</th>
                <th>AVG. METERS DRILLED</th>
                </tr>
            </thead>
            <tbody>
               {
                 drillingInfos.map(drillingInfo => (
                  <tr key={drillingInfo.id}>
                  <td>
                      <Form.Select 
                          aria-label="location"
                          size="m"
                          id={drillingInfo.id + 'location'}
                          onChange={onLocationChange} 
                          value= {drillingInfo.location}
                          >   
                              {piSheetListData.locationObBench.map(location => (
                                  <option key={`${location}adf`} value={location}>{location}</option>
                              ))}
                      </Form.Select>
                  </td>
                  <td>
                      <Form.Select 
                          aria-label="resourceDrill"
                          size="m"
                          id={drillingInfo.id + 'resourceDrill'}
                          onChange={onResourceDrillChange} 
                          value= {drillingInfo.resourceDrill}
                          >   
                              {piSheetListData.resourceDrill.map(resourceDrill => (
                                  <option key={`${resourceDrill}adf`} value={resourceDrill}>{resourceDrill}</option>
                              ))}
                      </Form.Select>
                  </td>
                  <td>
                      <Form.Select 
                          aria-label="drillOperator"
                          size="m"
                          id={drillingInfo.id + 'drillOperator'}
                          onChange={onDrillOperatorChange} 
                          value= {drillingInfo.drillOperator}
                          >   
                              {piSheetListData.drillOperator.map(drillOperator => (
                                  <option key={`${drillOperator}adf`} value={drillOperator}>{drillOperator}</option>
                              ))}
                      </Form.Select>
                  </td>
                  <td>
                      <Form.Select 
                          aria-label="helperName"
                          size="m"
                          id={drillingInfo.id + 'helperName'}
                          onChange={onHelperNameChange} 
                          value= {drillingInfo.helperName}
                          >   
                              {piSheetListData.drillHelperName.map(drillHelperName => (
                                  <option key={`${drillHelperName}adf`} value={drillHelperName}>{drillHelperName}</option>
                              ))}
                      </Form.Select>
                  </td>
                  <td>
                    <Form.Control
                        type="number"
                        size="lg"
                        placeholder="Operating Time"
                        id={drillingInfo.id + 'operatingTime'}
                        value={drillingInfo.operatingTime}
                        onChange={onOperatingTimeChange}
                    />
                  </td> 
                  <td>
                    <Form.Control
                        type="number"
                        size="lg"
                        placeholder="Breakdown Time"
                        id={drillingInfo.id + 'breakdownTime'}
                        value={drillingInfo.breakdownTime}
                        onChange={onBreakdownTimeChange}
                    />
                  </td>
                  <td>
                    <Form.Control
                        type="number"
                        size="lg"
                        placeholder="Holes Drilled"
                        id={drillingInfo.id + 'holesDrilled'}
                        value={drillingInfo.holesDrilled}
                        onChange={onHolesDrilledChange}
                    />
                  </td>
                  <td>
                    <Form.Control
                        type="number"
                        size="lg"
                        placeholder="Avg Meters Drilled"
                        id={drillingInfo.id + 'avgMetersDrilled'}
                        value={drillingInfo.avgMetersDrilled}
                        onChange={onAvgMetersDrilledChange}
                    />
                  </td>    
                  
                  

                  </tr>
                 )) 
               } 
                
            </tbody>
        </Table>
    </Container>
  );
}



const mapStateToProps = (state) => {
  return {
    drillingInfos: state.drillingInfos,
    piSheetListData: state.piSheetListData

  };
};


const mapDispatchToProps = (dispatch) => ({
  editDrillingInfo: (id, updates) => dispatch(editDrillingInfo(id, updates))
})

export default connect(mapStateToProps, mapDispatchToProps)(DrillingInfosList);
