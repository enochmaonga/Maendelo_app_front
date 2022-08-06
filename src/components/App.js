import React, { Component } from 'react';
import Header from './AppHeader';
import LoginForm from './login/LoginForm'


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


export default App;
