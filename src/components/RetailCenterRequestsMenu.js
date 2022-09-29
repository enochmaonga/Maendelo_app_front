import React,{Component} from 'react';
//Requests Table
import Requests from './Requests';
//Repair Form
import RepairForm from './repairForm/RepairForm';
//Home form
import Home from './home/Home'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class RetailCenterRequestsMenu extends Component{
    constructor(props) {
        super(props);
        this.state = {
          count: 1
        };

      }
    render(){
        

        return(
            <React.Fragment>
                


            <div >
             <a href="/" class="btn btn-dark position-absolute top-1 end-0 m-3">Logout</a>
                <div className="w-75 mx-auto pt-1">
                    <h6 className="display-6">Requests</h6>
                        <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Toggle />
                            <Navbar.Collapse>
                                <ul className="navbar-nav nav-tabs">
                                                        <li className="nav-item">
                                                            <button 
                                                                className="nav-link text-muted" 
                                                                onClick={()=>this.setState({count:1})} 
                                                                >Home</button>
                                                        </li>
                                                        <li className="nav-item">
                                                            <button 
                                                                className="nav-link text-muted"  
                                                                onClick={()=>this.setState({count:2})} 
                                                                >Loading Zone </button>
                                                        </li>
                                                        <li className="nav-item">
                                                            <button  
                                                            className="nav-link text-muted"  
                                                            onClick={()=>this.setState({count:3})} 
                                                            >Shipping</button>
                                                        </li>
                                                        <li className="nav-item">
                                                            <button 
                                                                className="nav-link text-muted"
                                                                onClick={()=>this.setState({count:4})}  
                                                                >Received-Close</button>
                                                        </li>
                                                        <li className="nav-item">
                                                            <button 
                                                                className="nav-link text-muted"
                                                                onClick={()=>this.setState({count:5})}  
                                                                >Dispatch</button>
                                                        </li>
                                </ul>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>
                        {(this.state.count===1)?<Home user={this.props.user}/>:""}
                        {(this.state.count===2)?<RepairForm  user={this.props.user}/>:""}
                        {(this.state.count===3)?<Requests status={'Pending'} user={this.props.user}/>:""}
                        {(this.state.count===4)?<Requests status={'Closed'} user={this.props.user}/>:""}
                        {(this.state.count===5)?<Requests status={'waybill'} user={this.props.user}/>:""}
                </div>
            </div>

            </React.Fragment>
            
        )
    }
}

export default RetailCenterRequestsMenu;
