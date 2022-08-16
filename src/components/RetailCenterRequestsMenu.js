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
                                                                >New request </button>
                                                        </li>
                                                        <li className="nav-item">
                                                            <button  
                                                            className="nav-link text-muted"  
                                                            onClick={()=>this.setState({count:3})} 
                                                            >Sent to repair</button>
                                                        </li>
                                                        <li className="nav-item">
                                                            <button 
                                                                className="nav-link text-muted"
                                                                onClick={()=>this.setState({count:4})}  
                                                                >Back from repair</button>
                                                        </li>
                                </ul>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>
                        {(this.state.count===1)?<Home user={this.props.user}/>:""}
                        {(this.state.count===2)?<RepairForm  user={this.props.user}/>:""}
                        {(this.state.count===3)?<Requests status={'Pending'} user={this.props.user}/>:""}
                        {(this.state.count===4)?<Requests status={'Closed'} user={this.props.user}/>:""}
                </div>
            </div>

            </React.Fragment>
            
        )
    }
}

export default RetailCenterRequestsMenu;