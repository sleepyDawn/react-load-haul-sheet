import React from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button, Table } from 'react-bootstrap';

import { editLoadingHaulingInfo } from '../actions/loadingHaulingInfo'; 


export const LoadingHaulingInfosList = (props) => {

  const piSheetListData = props.piSheetListData;
  // console.log("data: ", piSheetListData);
  const loadingHaulingInfos = props.loadingHaulingInfos;
  // console.log("checking Loading info: ",loadingHaulingInfos);

  const getIdAndUpdatesObj = (e, idExtra) => {
    const targetId = e.target.id;
    const currVal = e.target.value;
    
    const targetLoadingHaulingInfo = loadingHaulingInfos.filter(loadingHaulingInfo =>{
      return loadingHaulingInfo.id + idExtra === targetId
    })
    

    return {
      id: targetLoadingHaulingInfo[0].id,
      updateObj: targetLoadingHaulingInfo[0],
      currVal: currVal
    }
   
  }

  const onSeamNoChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, "seamNo");
    
    props.editLoadingHaulingInfo(id, { ...updateObj, seamNo: currVal })
  }

  const onResourceExcavatorChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'resourceExcavator');
    // console.log(id, updateObj, currVal);
    // updating location, excavatorOpertator also when exvator is being updated
    
    const loadingInfo = props.loadingInfos.filter(loadingInfo => loadingInfo.resourceExcavator === currVal)[0]
    if(loadingInfo){
      const {location, excavatorOperator } = loadingInfo;
      props.editLoadingHaulingInfo(id, { ...updateObj, resourceExcavator: currVal, location, excavatorOperator });
    }
    
    
  
  }

  const onResourceDumperChange = (e) => {

    // Checking if choosen dumper already exist in props.loadinHaulingInfos, if it is, it will not be added to list
    if(!props.loadingHaulingInfos.filter(info => info.resourceDumper === e.target.value).length){
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'resourceDumper');
    // console.log(id, updateObj, currVal);
    
    props.editLoadingHaulingInfo(id, { ...updateObj, resourceDumper: currVal })

    }
  
  }

  const onDumperOperatoreChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'dumperOperator');
    // console.log(id, updateObj, currVal);
    props.editLoadingHaulingInfo(id, { ...updateObj, dumperOperator: currVal })
  
  }

  const onOperatingTimeChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'operatingTime');
    // console.log(id, updateObj, currVal);
    props.editLoadingHaulingInfo(id, { ...updateObj, operatingTime: currVal })
  
  }
  const onBreakdownTimeChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'breakdownTime');
    // console.log(id, updateObj, currVal);
    props.editLoadingHaulingInfo(id, { ...updateObj, breakdownTime: currVal })
  
  }
  
  const onNoOfTripsChange = (e) => {
    const {id, updateObj, currVal} = getIdAndUpdatesObj(e, 'noOfTrips');
    // console.log(id, updateObj, currVal);
    props.editLoadingHaulingInfo(id, { ...updateObj, noOfTrips: currVal })
  
  }


  

  return (
    <Container className="mt-5" fluid>
        <h3 className="p-3 mb-2 bg-info text-dark">Loading-Hauling Info</h3>  
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>SEAM No</th>
                <th>RESOURCE_EXCAVATOR</th>
                <th>RESOURCE_DUMPER</th>
                <th>DUMPER OPERATOR</th>
                <th>OPERATING TIME(min)</th>
                <th>BREAKDOWN TIME(min)</th>
                <th>NO. OF TRIPS</th>
                </tr>
            </thead>
            <tbody>
               {
                 loadingHaulingInfos.map(loadingHaulingInfo => (
                  <tr key={loadingHaulingInfo.id}>
                  <td>
                      <Form.Select 
                          aria-label="seamNo"
                          size="m"
                          id={loadingHaulingInfo.id + 'seamNo'}
                          onChange={onSeamNoChange} 
                          value= {loadingHaulingInfo.seamNo}
                          >   
                              {piSheetListData.seamNo.map(seamNo => (
                                  <option key={`${seamNo}adf`} value={seamNo}>{seamNo}</option>
                              ))}
                      </Form.Select>
                  </td>
                  <td>
                      <Form.Select 
                          aria-label="resourceExcavator"
                          size="m"
                          id={loadingHaulingInfo.id + 'resourceExcavator'}
                          onChange={onResourceExcavatorChange} 
                          value= {loadingHaulingInfo.resourceExcavator}
                          >   
                              {piSheetListData.resourceExcavator.map(resourceExcavator => (
                                  <option key={`${resourceExcavator}adf`} value={resourceExcavator}>{resourceExcavator}</option>
                              ))}
                      </Form.Select>
                  </td>
                  <td>
                      <Form.Select 
                          aria-label="resourceDumper"
                          size="m"
                          id={loadingHaulingInfo.id + 'resourceDumper'}
                          onChange={onResourceDumperChange} 
                          value= {loadingHaulingInfo.resourceDumper}
                          >   
                              {piSheetListData.resourceDumper.map(resourceDumper => (
                                  <option key={`${resourceDumper}adf`} value={resourceDumper}>{resourceDumper}</option>
                              ))}
                      </Form.Select>
                  </td>
                  <td>
                      <Form.Select 
                          aria-label="dumperOperator"
                          size="m"
                          id={loadingHaulingInfo.id + 'dumperOperator'}
                          onChange={onDumperOperatoreChange} 
                          value= {loadingHaulingInfo.dumperOperator}
                          >   
                              {piSheetListData.dumperOperator.map(dumperOperator => (
                                  <option key={`${dumperOperator}adf`} value={dumperOperator}>{dumperOperator}</option>
                              ))}
                      </Form.Select>
                  </td>
                  <td>
                    <Form.Control
                        type="number"
                        size="lg"
                        placeholder="Operating Time"
                        id={loadingHaulingInfo.id + 'operatingTime'}
                        value={loadingHaulingInfo.operatingTime}
                        onChange={onOperatingTimeChange}
                    />
                  </td> 
                  <td>
                    <Form.Control
                        type="number"
                        size="lg"
                        placeholder="Breakdown Time"
                        id={loadingHaulingInfo.id + 'breakdownTime'}
                        value={loadingHaulingInfo.breakdownTime}
                        onChange={onBreakdownTimeChange}
                    />
                  </td>
                  <td>
                    <Form.Control
                        type="number"
                        size="lg"
                        placeholder="No Of Trips"
                        id={loadingHaulingInfo.id + 'noOfTrips'}
                        value={loadingHaulingInfo.noOfTrips}
                        onChange={onNoOfTripsChange}
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
    editLoadingHaulingInfo: (id, updates) => dispatch(editLoadingHaulingInfo(id, updates))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoadingHaulingInfosList);
