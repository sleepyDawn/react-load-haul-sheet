import React from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button, Table } from 'react-bootstrap';

import { editLoadingInfo } from '../actions/loadingInfo'; 


export const LoadingInfosList = (props) => {

  const piSheetListData = props.piSheetListData;
  // console.log("data: ", piSheetListData);
  const loadingInfos = props.loadingInfos;
  // console.log("checking Loading info: ",loadingInfos);

  const getIdAndUpdatesObj = (e, idExtra) => {
    const targetId = e.target.id;
    const currVal = e.target.value;
    
    const targetLoadingInfo = loadingInfos.filter(loadingInfo =>{
      return loadingInfo.id + idExtra === targetId
    })
    

    return {
      id: targetLoadingInfo[0].id,
      updateObj: targetLoadingInfo[0],
      currVal: currVal
    }
   
  }

  const onLocationChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, "location");
    
    props.editLoadingInfo(id, { ...updateObj, location: currVal });
  }

  const onResourceExcavatorChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'resourceExcavator');
    // console.log(id, updateObj, currVal);
    props.editLoadingInfo(id, { ...updateObj, resourceExcavator: currVal })
  
  }

  const onExcavatorOperatorChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'excavatorOperator');
    // console.log(id, updateObj, currVal);
    props.editLoadingInfo(id, { ...updateObj, excavatorOperator: currVal })
  
  }

  const onHelperNameChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'helperName');
    // console.log(id, updateObj, currVal);
    props.editLoadingInfo(id, { ...updateObj, helperName: currVal })
  
  }

  const onOperatingTimeChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'operatingTime');
    // console.log(id, updateObj, currVal);
    props.editLoadingInfo(id, { ...updateObj, operatingTime: currVal })
  
  }
  const onBreakdownTimeChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'breakdownTime');
    // console.log(id, updateObj, currVal);
    props.editLoadingInfo(id, { ...updateObj, breakdownTime: currVal })
  
  }


  

  return (
    <Container className="mt-5" fluid>
        <h3 className="p-3 mb-2 bg-info text-dark">Loading Info</h3>  
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>LOCATION</th>
                <th>RESOURCE_EXCAVATOR</th>
                <th>EXCAVATOR_OPERATOR</th>
                <th>HELPER NAME</th>
                <th>OPERATING TIME(min)</th>
                <th>BREAKDOWN TIME(min)</th>
                </tr>
            </thead>
            <tbody>
               {
                 loadingInfos.map(loadingInfo => (
                  <tr key={loadingInfo.id}>
                  <td>
                      <Form.Select 
                          aria-label="location"
                          size="m"
                          id={loadingInfo.id + 'location'}
                          onChange={onLocationChange} 
                          value= {loadingInfo.location}
                          >   
                              {piSheetListData.locationObBench.map(location => (
                                  <option key={`${location}adf`} value={location}>{location}</option>
                              ))}
                      </Form.Select>
                  </td>
                  <td>
                      <Form.Select 
                          aria-label="resourceExcavator"
                          size="m"
                          id={loadingInfo.id + 'resourceExcavator'}
                          onChange={onResourceExcavatorChange} 
                          value= {loadingInfo.resourceExcavator}
                          >   
                              {piSheetListData.resourceExcavator.map(resourceExcavator => (
                                  <option key={`${resourceExcavator}adf`} value={resourceExcavator}>{resourceExcavator}</option>
                              ))}
                      </Form.Select>
                  </td>
                  <td>
                      <Form.Select 
                          aria-label="excavatorOperator"
                          size="m"
                          id={loadingInfo.id + 'excavatorOperator'}
                          onChange={onExcavatorOperatorChange} 
                          value= {loadingInfo.excavatorOperator}
                          >   
                              {piSheetListData.excavatorOperator.map(excavatorOperator => (
                                  <option key={`${excavatorOperator}adf`} value={excavatorOperator}>{excavatorOperator}</option>
                              ))}
                      </Form.Select>
                  </td>
                  <td>
                      <Form.Select 
                          aria-label="helperName"
                          size="m"
                          id={loadingInfo.id + 'helperName'}
                          onChange={onHelperNameChange} 
                          value= {loadingInfo.helperName}
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
                        id={loadingInfo.id + 'operatingTime'}
                        value={loadingInfo.operatingTime}
                        onChange={onOperatingTimeChange}
                    />
                  </td> 
                  <td>
                    <Form.Control
                        type="number"
                        size="lg"
                        placeholder="Breakdown Time"
                        id={loadingInfo.id + 'breakdownTime'}
                        value={loadingInfo.breakdownTime}
                        onChange={onBreakdownTimeChange}
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
    loadingInfos: state.loadingInfos,
    loadingHaulingInfos: state.loadingHaulingInfos,
    piSheetListData: state.piSheetListData

  };
};


const mapDispatchToProps = (dispatch) => ({
    editLoadingInfo: (id, updates) => dispatch(editLoadingInfo(id, updates)),
    editLoadingHaulingInfo: (id, updates) => dispatch(editLoadingHaulingInfo(id, updates))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoadingInfosList);
