import React from 'react';
import axios from 'axios';
import TableModal from './TableModal';
import { Component } from 'react';

const url ="https://maendeleo-app-backend.herokuapp.com";

class Table extends Component{
            constructor(){
                super()
                this.state = { data: [] };
            }


            async componentDidMount(){
            const response = await axios.get(url+"/retail/requests/")
            const json = await response;
            console.log(json)
            this.setState({ data: json.data });
           
            };

            dueDateCalc(timestamp){
                return timestamp
            }
    

       render(){

        return (<React.Fragment>
            {this.state.data.map(row=><tr key={row._id}>
                    <td className="text-primary"><TableModal data={row}/></td>
                    <td>{row.Name}</td>
                    <td>{row.national_id}</td>
                    <td>{row.phone}</td>
                    <td>{new Date(this.dueDateCalc(row.Timestamp)).toLocaleDateString()}</td>
                    <td>
                        {(new Date()<new Date(new Date().setDate(new Date(row.Timestamp).getDate()+7))?<span className="badge rounded-pill text-bg-success">Within SLA</span>:<span className="badge rounded-pill text-bg-danger">Past SLA</span>)}   
                    </td>
                </tr>)}
            </React.Fragment>);

       }
            
 
        
    
}


export default Table;