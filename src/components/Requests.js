import React,{Component} from 'react';
import Table from './Table';


class RequestsMenu extends Component{
        constructor(props){
            super(props)
        }
      
    

    render(){

      
        
        return(
            <React.Fragment> 
                <table className="table table-warning table-responsive table-sm table-striped">
                    <thead >
                        <tr>
                            {this.props.user.internal?
                            <>
                                <th>Name</th>
                                <th>National ID</th>
                                <th>Phone</th>
                            </>
                            :
                            <>
                                <th>Retail</th>
                                <th>Brand-Model</th>
                                <th>Serial</th>
                            </>
                            }
                            <th>Date requested</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Table status={this.props.status} user={this.props.user}/>
                    </tbody>
                    <tfoot>
                        <tr>
                            
                            {this.props.user.internal?
                            <>
                                <th>Name</th>
                                <th>National ID</th>
                                <th>Phone</th>
                            </>
                            :
                            <>
                                <th>Retail</th>
                                <th>Brand-Model</th>
                                <th>Serial</th>
                            </>
                            }
                            <th>Date requested</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </tfoot>
                </table>

            </React.Fragment>
            
        )
    }
}

export default RequestsMenu;