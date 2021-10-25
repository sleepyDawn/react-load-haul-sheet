import React from "react";
import DrillingInfosList from "./DrillingInfosList";
import LoadingInfosList  from "./LoadingInfosList";
import LoadingHaulingInfosList from "./LoadingHaulingInfosList";

import  PiSheetInfo  from "./PiSheetInfo";

const DashboardPage = () => (
    <div>
        <PiSheetInfo></PiSheetInfo>
        <DrillingInfosList></DrillingInfosList>
        <LoadingInfosList></LoadingInfosList>
        <LoadingHaulingInfosList></LoadingHaulingInfosList>
        
    </div>
)

export default DashboardPage;
