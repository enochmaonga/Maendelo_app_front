import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class TableModal extends Component {
    constructor(props){
        super(props)
        this.props =props;
        this.state ={show:false};
    }

    handleClose=()=>{
        this.setState({show:false})
    }
    handleShow = ()=>{
        this.setState({show:true})
    }

    render(){
        let data = this.props.data;
        return (
            <>
            <Button variant="secondary" className="btn-sm" onClick={this.handleShow}>
                details
            </Button>
        
            <Modal show={this.state.show} size="xl" onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Record ID: {data._id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* {(data.Name=="Raila Odinga")?"Blank":<p>{JSON.stringify(data)}</p>} */}
                    
          <div className="row">
            <div className="col"><b>Serial/IMEI:</b> {data.serial}</div>
            <div className="col-sm"><b>Model:</b> {data.model}</div>
          </div>
          <div className="row">
            <div className="col-sm"><b>Warranty:</b> {data.warranty ? 'Yes' : 'No'}</div>
            <div className="col-sm"><b>LipaMdogoMdogo:</b> {data.lipaMdogoMdogo ? 'Yes' : 'No'}</div>
          </div> 
          <div className="row">
            <div className="col-sm"><b>Retail Centre:</b> {data.retail_centre != '' ? data.retail_centre : 'Sarit Center'}</div>
            <div className="col-sm"><b>Receipt Number:</b> {data.receipt}</div>
          </div>
          <div className="row">
            <div className="col-sm"><b>Repair Centre:</b> {data.repair_centre != '' ? data.repair_centre : 'Samsung'}</div>
            <div className="col-sm"><b>Comments:</b> {data.status.length > 0 ? data.status.comments : 'None'}</div>
          </div>     
          <div className="row">
              <div className="col-sm"><b className="bg-light">Accessories :- </b>
                  <div className="ms-2"><b>Battery:</b> {data.accessories.battery ? 'Yes' : 'No'}<b> Charger:</b> {data.accessories.charger ? 'Yes' : 'No'}</div>
              </div>
              
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <h5 className="mt-3 bg-light"><b>Issues</b></h5>
              <tr>
                <th>Display</th>
                <th>Power</th>
                <th>Speaker</th>
                <th>Network</th>
                <th>Physical Damage</th>
                <th>Software</th>
              </tr>
            </thead>
            <tbody className="table-body">
              <tr>
                <td>
                  <b>Cracked: </b>
                  <p>
                    {data.Issues.display.cracked ? 'Yes' : 'No'}
                  </p>
                  <b>Not Working: </b>
                  <p>
                    {data.Issues.display.notWorking ? 'Yes' : 'No'}
                  </p>
                  <b>No Touch: </b>
                  <p>
                    {data.Issues.display.noTouch ? 'Yes' : 'No'}
                  </p>
                </td>
                <td>
                  <b>Not Powering: </b>
                  <p>
                    {data.Issues.power.notPoweringUp ? 'Yes' : 'No'}
                  </p>
                  <b>Not Charging: </b>
                  <p>
                    {data.Issues.power.notCharging ? 'Yes' : 'No'}

                  </p>
                  <b>Short Battery Life: </b>
                  <p>
                    {data.Issues.power.shortBatteryLife ? 'Yes' : 'No'}
                  </p>
                </td>
                <td>
                  <b>No Sound: </b>
                  <p>
                    {data.Issues.speaker.noSound ? 'Yes' : 'No'}
                  </p>
                  <b>Distorted Sound: </b>
                  <p>
                    {data.Issues.speaker.distortedSound ? 'Yes' : 'No'}
                  </p>
                  <b>Not Ringing: </b>
                  <p>
                    {data.Issues.speaker.notRinging ? 'Yes' : 'No'}
                  </p>
                </td>
                <td>
                  <b>No Mobile Network: </b>
                  <p>
                    {data.Issues.network.noMobileNetwork ? 'Yes' : 'No'}
                  </p>
                  <b>No Wifi Network: </b>
                  <p>
                    {data.Issues.network.noWifiNetwork ? 'Yes' : 'No'}
                  </p>
                  <b>Dropped Calls: </b>
                  <p>
                    {data.Issues.network.droppedCalls ? 'Yes' : 'No'}
                  </p>
                  <b>Unable To Call: </b>
                  <p>
                    {data.Issues.network.unableToCall ? 'Yes' : 'No'}
                  </p>
                </td>
                <td>
                  <b>Faulty Keys: </b>
                  <p>
                    {data.Issues.physicalDamage.faultyKeys ? 'Yes' : 'No'}
                  </p>
                  <b>Cracked Body: </b>
                  <p>
                    {data.Issues.physicalDamage.crackedBody ? 'Yes' : 'No'}
                  </p>
                </td>
                <td>
                  <b>Slow: </b>
                  <p>
                    {data.Issues.software.slow ? 'Yes' : 'No'}
                  </p>
                  <b>Crashing: </b>
                  <p>
                    {data.Issues.software.crashing ? 'Yes' : 'No'}
                  </p>
                  <b>Hanging: </b>
                  <p>
                    {data.Issues.software.hanging ? 'Yes' : 'No'}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>                    

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        );

    }
  
}

export default TableModal