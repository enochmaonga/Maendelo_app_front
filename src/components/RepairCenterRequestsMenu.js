import React,{Component} from 'react';
//Requests Table
import Requests from './Requests';
//Home form
import Home from './home/Home'

class RepairCenterRequestsMenu extends Component{
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
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a 
                                className="nav-link text-muted" 
                                onClick={()=>this.setState({count:1})} 
                                href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a  
                               className="nav-link text-muted"  
                               onClick={()=>this.setState({count:3})} 
                               href="#">Received Requests</a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link text-muted" 
                                href="#">Resolved Requests</a>
                        </li>
                    </ul>
                    {(this.state.count===1)?<Home user={this.props.user}/>:""}
                    {(this.state.count===3)?<Requests/>:""}
                </div>
            </div>

            </React.Fragment>
            
        )
    }
}

export default RepairCenterRequestsMenu;