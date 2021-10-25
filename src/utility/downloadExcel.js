import * as XLSX from 'xlsx';


const downloadExcel = ({ piSheetInfos,drillingInfos,loadingInfos,loadingHaulingInfos }) => {
    const promise = new Promise((resolve, reject) => {
      // const workSheet = XLSX.utils.json_to_sheet(data);
      // const workBook = XLSX.utils.book_new();
    
      // XLSX.utils.book_append_sheet(workBook, workSheet, "piSheetInfo");
      // //Buffer
      // let buf = XLSX.write(workBook, {bookType: "xlsx", type: "buffer"});
      // //Binary string
      // XLSX.write(workBook, {bookType: "xlsx", type: "binary"});
      // // Download
      // XLSX.writeFile(workBook, "ReactLoadHaulData.xlsx");

      // First updating location, excavatorOpertator also when exvator is being updated
      
      // const resourceExcavators = loadingHaulingInfos.map(loadingHaulingInfo => loadingHaulingInfo.resourceExcavator)
      // resourceExcavators.forEach(currVal => {
      //   const loadingInfo = loadingInfos.filter(loadingInfo => loadingInfo.resourceExcavator === currVal)[0]
      //   const {location, excavatorOperator } = loadingInfo;
      //   loadingHaulingInfos = { ...loadingHaulingInfos, }
      //   props.editLoadingHaulingInfo(id, { ...updateObj, resourceExcavator: currVal, location, excavatorOperator })
      // })

      
      
      drillingInfos = drillingInfos.map(drillingInfo => {
        const {id , ...withOutId} = drillingInfo;
        console.log("checking rest operator: ", withOutId);
        return withOutId;
      })

      loadingInfos = loadingInfos.map(info => {
        const {id , ...withOutId} = info;
        console.log("checking rest operator: ", withOutId);
        return withOutId;
      })

      loadingHaulingInfos = loadingHaulingInfos.map(info => {
        const {id , ...withOutId} = info;
        console.log("checking rest operator: ", withOutId);
        return withOutId;
      })
      

      const piSheetData = [Object.entries(piSheetInfos).map(i => i[0]),Object.entries(piSheetInfos).map(i => i[1])];

      const drillingInfosHeader =  Object.entries(drillingInfos[0]).map(i => i[0]);
      const drillingInfosBody =  drillingInfos.map(drillingInfo => Object.entries(drillingInfo).map(i => i[1]));
      const drillingInfosData = [drillingInfosHeader, ...drillingInfosBody];

      const loadingInfosHeader =  Object.entries(loadingInfos[0]).map(i => i[0]);
      const loadingInfosBody =  loadingInfos.map(loadingInfo => Object.entries(loadingInfo).map(i => i[1]));
      const loadingInfosData = [loadingInfosHeader, ...loadingInfosBody];

      const loadingHaulingInfosHeader =  Object.entries(loadingHaulingInfos[0]).map(i => i[0]);
      const loadingHaulingInfosBody =  loadingHaulingInfos.map(loadingHaulingInfo => Object.entries(loadingHaulingInfo).map(i => i[1]));
      const loadingHaulingInfosData = [loadingHaulingInfosHeader, ...loadingHaulingInfosBody];

      

 

      const wb =  XLSX.utils.book_new();
      wb.Props = {
        Title: "React-To-excel",
      }
      wb.SheetNames.push("DataSheet");
      const ws_data = [...piSheetData, [],[], ...drillingInfosData, [], [], ...loadingInfosData, [], [], ...loadingHaulingInfosData];
      console.log("checking ws data: ", ws_data);
      
      const ws = XLSX.utils.aoa_to_sheet(ws_data);
      wb.Sheets["DataSheet"] = ws;
      //Buffer
      const buf = XLSX.write(wb, {bookType: "xlsx", type: "buffer"});
      //Binary string
      const wbOut = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});
      // Download
      XLSX.writeFile(wb, "React-To-Excel.xlsx")

    });

    promise.then((d) => {
        console.log(d);
    })
}


export default downloadExcel;