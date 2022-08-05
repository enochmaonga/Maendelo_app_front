import React, { Component } from 'react';
//import {BrowserRouter as Router,useRoutes} from 'react-router-dom';
//import RepairForm from './repairForm/RepairForm';
import Header from './Header';
import RequestsMenu from './RequestsMenu';
import LoginForm from './login/LoginForm'
//import ViewRepairItems from './viewRepairItems/ViewRepairItems';

 class App extends Component{
   render(){
      return(
        <React.Fragment>
          <Header/>
          <LoginForm/>
        </React.Fragment>
      );
   }
} 

// function AppRoutes() {
//   const routes = useRoutes(
//     [
//       {path:'/repairform',element:<RepairForm />},
//       {path:'/viewitems',element:<ViewRepairItems/>}
//     ]
//   )
//   return routes;
// }
// function App(){
//   return (
//     <Router>
//       <AppRoutes />
//     </Router>
//   )
// }

export default App;
