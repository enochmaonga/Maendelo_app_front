import React, { Component } from 'react';
import CustomerDetails from './components/inputs/CustomerDetails.js';
import DeviceDetails from './components/inputs/DeviceDetails.js';



class App extends Component{
   render(){
      return(
        <React.Fragment>
          <CustomerDetails/>
          <DeviceDetails/>
        </React.Fragment>  
      );
   }
}


export default App;
