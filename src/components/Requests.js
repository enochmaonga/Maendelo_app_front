import React,{Component} from 'react';
import Table from './Table';


class RequestsMenu extends Component{
      
    

    render(){

      
        
        return(
            <React.Fragment> 
                <table className="table table-warning table-sm table-striped">
                    <thead >
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>National ID</th>
                            <th>Phone</th>
                            <th>Date requested</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Table />
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>National ID</th>
                            <th>Phone</th>
                            <th>Date requested</th>
                            <th>Status</th>
                        </tr>
                    </tfoot>
                </table>

            </React.Fragment>
            
        )
    }
}

export default RequestsMenu;