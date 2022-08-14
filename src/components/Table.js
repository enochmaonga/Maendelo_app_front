import React from 'react';
import axios from 'axios';
import TableModal from './TableModal';
import { Component } from 'react';
import SERVERURL from '../gobalVars'


class Table extends Component{
            constructor(props){
                super(props)
                this.state = { data: [] };
            }


            async componentDidMount(){
            const response = await axios.get(SERVERURL+"/retail/requests/status/"+this.props.status)
            const json = await response;
            console.log(json)
            this.setState({ data: json.data });
           
            };

            dueDate=(timestamp)=>{
                let requestDate = new Date(timestamp);
                let dueDate = new Date();
                dueDate.setDate(requestDate.getDate()+2);
                return dueDate;
              }
    

       render(){

        return (<React.Fragment>
            {this.state.data.map(row=><tr key={row._id}>
                    <td className="text-primary"><TableModal data={row} user={this.props.user}/></td>
                    {
                    this.props.user.internal?
                    <> 
                        <td>{row.Name}</td>
                        <td>{row.national_id}</td>
                        <td>{row.phone}</td>
                    </>
                    :
                    <> 
                        <td>{row.retail_centre}</td>
                        <td>{row.brand}-{row.model}</td>
                        <td>{row.serial}</td>
                    </>
                    
                    }
                    <td>{new Date(row.Timestamp).toLocaleDateString()}</td>
                    <td>
                        {
                        (this.dueDate(row.Timestamp)>new Date())?
                        <span className="badge rounded-pill text-bg-success">Within SLA</span>:
                        <span className="badge rounded-pill text-bg-danger">Past SLA</span>
                        }   
                    </td>
                </tr>)}
            </React.Fragment>);

       }
            
 
        
    
}


export default Table;