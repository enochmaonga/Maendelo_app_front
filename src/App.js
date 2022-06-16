import React, { Component } from 'react';
import CustomerDetails from './components/inputs/CustomerDetails';
import DeviceDetails from './components/inputs/DeviceDetails';
import DeviceFaults from './components/inputs/DeviceFaults';
import RepairCenter from './components/inputs/RepairCenter';
import RetailCenter from './components/inputs/RetailCenter';
import StandByUnit from './components/inputs/StandByUnit';



class App extends Component{
   render(){
      return(
        <React.Fragment>
          <CustomerDetails/>
          <DeviceDetails />
          <DeviceFaults />
          <RepairCenter />
          <RetailCenter />
          <StandByUnit />
        </React.Fragment>  
      );
   }
}


export default App;
