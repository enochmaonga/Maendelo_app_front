import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, Button } from "react-bootstrap";

const API_HOST = 'http://localhost:5000/retail/requests/';

function App() {
  const [data, setData] = useState([]);
  const fullscreen = useState(true);
  const fetchInventory = () => {
    fetch(`${API_HOST}`)
      .then(res => res.json())
      .then(json => setData(json));
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedInd, setSelectedInd] = React.useState(-1);
  const toggle = () => setSelectedInd(-1);
  const modal = selectedInd >= 0 && (data && data.length > selectedInd);

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <React.Fragment>
      <div className="App">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>National ID</th>
              <th>Device Model</th>
              <th>Receipt</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((details, i) => (
              <tr>
                <td>{details.Name}</td>
                <td>{details.phone}</td>
                <td>{details.national_id}</td>
                <td>{details.model}</td>
                <td>{details.receipt}</td>
                <td>{data[i].status.length > 0 ? data[i].status[0].state : 'Open'}</td>
                <td><Button variant="success" key={details._id} onClick={() => { handleShow(); setSelectedInd(i); }}>More Details</Button></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modal && <Modal show={show} isOpen={modal} toggle={toggle} fullscreen={fullscreen} onHide={handleClose}>
        <Modal.Header closeButton className="bg-success.bg-gradient">
          <Modal.Title>More Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col"><b>Serial/IMEI:</b> {data[selectedInd].serial}</div>
            <div className="col-sm"><b>Warranty:</b> {data[selectedInd].warranty ? 'Yes' : 'No'}</div>
          </div>
          <div className="row">
            <div className="col-sm"><b>LipaMdogoMdogo:</b> {data[selectedInd].lipaMdogoMdogo ? 'Yes' : 'No'}</div>
            <div className="col-sm"><b>Retail Centre:</b> {data[selectedInd].retail_centre}</div>
          </div>
          <div className="row">
            <div className="col-sm"><b>Waybill to Retail:</b> {data[selectedInd].waybill_to_retail}</div>
            <div className="col-sm"><b>Repair Centre:</b> {data[selectedInd].repair_centre}</div>
          </div>
          <div className="row">
            <div className="col-sm"><b>Waybill to Repair:</b> {data[selectedInd].waybill_to_repair}</div>
            <div className="col-sm"><b>Comments:</b> {data[selectedInd].status.length > 0 ? data[selectedInd].status[0].comments : 'None'}</div>
          </div>        
            <div className="row">
              <div className="col-sm"><b>Accessories:</b>
                <div className="m-1">
                  <div><b>Battery:</b> {data[selectedInd].accessories[0].battery ? 'Yes' : 'No'}<b> Charger:</b> {data[selectedInd].accessories[0].charger ? 'Yes' : 'No'}</div>
                </div>
              </div>
            </div>
          <table className="table table-striped table-hover">
            <thead>
              <h4><b>Issues</b></h4>
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
                    {data[selectedInd].Issues[0].display[0].cracked ? 'Yes' : 'No'}
                  </p>
                  <b>Not Working: </b>
                  <p>
                    {data[selectedInd].Issues[0].display[0].notWorking ? 'Yes' : 'No'}
                  </p>
                  <b>No Touch: </b>
                  <p>
                    {data[selectedInd].Issues[0].display[0].noTouch ? 'Yes' : 'No'}
                  </p>
                </td>
                <td>
                  <b>Not Powering: </b>
                  <p>
                    {data[selectedInd].Issues[0].power[0].notPoweringUp ? 'Yes' : 'No'}
                  </p>
                  <b>Not Charging: </b>
                  <p>
                    {data[selectedInd].Issues[0].power[0].notCharging ? 'Yes' : 'No'}

                  </p>
                  <b>Short Battery Life: </b>
                  <p>
                    {data[selectedInd].Issues[0].power[0].shortBatteryLife ? 'Yes' : 'No'}
                  </p>
                </td>
                <td>
                  <b>No Sound: </b>
                  <p>
                    {data[selectedInd].Issues[0].speaker[0].noSound ? 'Yes' : 'No'}
                  </p>
                  <b>Distorted Sound: </b>
                  <p>
                    {data[selectedInd].Issues[0].speaker[0].distortedSound ? 'Yes' : 'No'}
                  </p>
                  <b>Not Ringing: </b>
                  <p>
                    {data[selectedInd].Issues[0].speaker[0].notRinging ? 'Yes' : 'No'}
                  </p>
                </td>
                <td>
                  <b>No Mobile Network: </b>
                  <p>
                    {data[selectedInd].Issues[0].network[0].noMobileNetwork ? 'Yes' : 'No'}
                  </p>
                  <b>No Wifi Network: </b>
                  <p>
                    {data[selectedInd].Issues[0].network[0].noWifiNetwork ? 'Yes' : 'No'}
                  </p>
                  <b>Dropped Calls: </b>
                  <p>
                    {data[selectedInd].Issues[0].network[0].droppedCalls ? 'Yes' : 'No'}
                  </p>
                  <b>Unable To Call: </b>
                  <p>
                    {data[selectedInd].Issues[0].network[0].unableToCall ? 'Yes' : 'No'}
                  </p>
                </td>
                <td>
                  <b>Faulty Keys: </b>
                  <p>
                    {data[selectedInd].Issues[0].physicalDamage[0].faultyKeys ? 'Yes' : 'No'}
                  </p>
                  <b>Cracked Body: </b>
                  <p>
                    {data[selectedInd].Issues[0].physicalDamage[0].crackedBody ? 'Yes' : 'No'}
                  </p>
                </td>
                <td>
                  <b>Slow: </b>
                  <p>
                    {data[selectedInd].Issues[0].software[0].slow ? 'Yes' : 'No'}
                  </p>
                  <b>Crashing: </b>
                  <p>
                    {data[selectedInd].Issues[0].software[0].crashing ? 'Yes' : 'No'}
                  </p>
                  <b>Hanging: </b>
                  <p>
                    {data[selectedInd].Issues[0].software[0].hanging ? 'Yes' : 'No'}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>}

    </React.Fragment>
  );
}
export default App;