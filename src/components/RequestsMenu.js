import React,{Component} from 'react';
//Requests Table
import Requests from './Requests';
//Repair Form
import RepairForm from './repairForm/RepairForm';

class RequestsMenu extends Component{
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    render(){
        

        return(
            <React.Fragment>
                <div >
                <div className="w-75 mx-auto pt-1">
                <h6 className="display-6">Requests</h6>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a 
                                className="nav-link text-muted" 
                                onClick={()=>this.setState({count:1})} 
                                href="#">New Request</a>
                        </li>
                        <li class="nav-item">
                            <a 
                                className="nav-link text-muted"  
                                onClick={()=>this.setState({count:2})} 
                                href="#">Pending</a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link text-muted" 
                                href="#">Sent to repair</a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link text-muted" 
                                href="#">Back from repair</a>
                        </li>
                    </ul>
                    {(this.state.count==1)?<RepairForm/>:""}
                    {(this.state.count==2)?<Requests/>:""}
                </div>
            </div>

            </React.Fragment>
            
        )
    }
}

export default RequestsMenu;