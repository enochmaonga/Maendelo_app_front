import React,{Component} from 'react';
import Table from './Table';


class Requests extends Component{
      
    

    render(){

      
        
        return(
            <React.Fragment>
                <div className="table-responsive ">
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
                                <th>Outlet</th>
                                <th>Brand-Model</th>
                                <th>IMEI/Serial</th>
                            </>
                            }
                            <th>Date Booked</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Table imei={this.props.imei} status={this.props.status} user={this.props.user}/>
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
                                <th>Outlet</th>
                                <th>Brand-Model</th>
                                <th>IMEI/Serial</th>
                            </>
                            }
                            <th>Date Booked</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            </React.Fragment>
            
        )
    }
}

export default Requests;