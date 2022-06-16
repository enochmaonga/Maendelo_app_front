import {useState} from 'react'
import './App.css';
import React, { Component } from 'react';
// import { App } from 'react';

function useApp(){
  const [App, setApp] = useState({
    Retailcentername: "",
    customername: "",
    email: "",
    phonenumber: "",
  });
  const handleChange = (event) => {
    setApp({ ...App, [event.target.name]: event.target.value});
  };
}

class App extends Component{
   render(){
      return(
         <div className='form-box'>
           <form>
             <div>
             <h1>Safaricom Repair Booking Form</h1>
             </div>
             <h5>Safaricom House 
                <p>Waiyaki Way </p>
                <p>P. O. Box 66827 00800</p>
                <p>Nairobi</p>
                </h5>
             <div>
             <h6>Please fill in the details below</h6>
             <h6>Retail Center Name: </h6> 
               <input  type="text"  name="name" placeholder="Retail Center Name" value={App.Retailcentername}
               />
               <h6>Retail Center Contact: </h6> 
               <input  type="text"  name="name" placeholder="Retail Center Contact" value={App.Retailcentercontact}
               />
             </div>
             <div>
             <h6>Booking Date: </h6> 
               <input  type="text"  name="name" placeholder="Timestamp" value={App.date}
               />
             </div>
             <div>
             <h6 id='item'>Item Details: </h6> 
               <input type="text" name="name" placeholder="Item Make"
               />
               <h6>Item Model: </h6> 
                <input type="text" name="name" placeholder="Item Model"
               />
               <p></p>
               <h6>IMEI/Serial No: </h6> 
               <input type="number" name="name" placeholder="IMEI/Serial No"
               />
               <h6>Receipt: </h6> 
               <input type="number" name="name" placeholder="Receipt"
               />
                 <h5>Repair Center: </h5> 
               <input type="number" name="name" placeholder="Repair Center pick"
               />
               <h5>ACCESSORIES ACCOMPANYING CELLPHONE: (SIM cards must not be sent with the device for repair)</h5>
               <input class='checkbox' type="checkbox" id="accessory" name="Battery" value="Battery"/>
               <label for="accessory">Battery</label>
               <input class='checkbox'type="checkbox" id="accessory" name="Charger" value="Charger"/>
               <label for="accessory">Charger</label>
              <p> 

              </p>
              <div class='lmm'>
              <h6>Lipa Mdogomdogo</h6>
               <input class='checkbox'type="checkbox" id="Lipa" name="Lmm" value="Lmm"/> 
               <label for="Lipa">Yes</label>
               <input class='checkbox'type="checkbox" id="Lipa" name="Lmm" value="Lmm"/> 
               <label for="Lipa">No</label>
              </div>
   
              <h6>Is this repair a WARRANTY CLAIM?</h6>
              <input type="text" name="name" placeholder="True/False"
               />
               <h6>Repair History</h6>
               <input type="text" name="name" placeholder="True/False"
               />
             </div>
             <h5>Faults:</h5>
             <div class='faults'>
              <h6>Call Drops</h6>
              <input type="text" name="name" placeholder="Select"
               />
               <h6>Power Failure</h6>
              <input type="text" name="name" placeholder="Select"
               />
                <h6>Display</h6>
              <input type="text" name="name" placeholder="Select"
               />
                  <h6>Sound</h6>
              <input type="text" name="name" placeholder="Select"
               />
                  <h6>Software</h6>
              <input type="text" name="name" placeholder="Select"
               />
                 <h6>Other</h6>
              <input type="text" name="name" placeholder="Type"
               />
                   <h6>Physical condition</h6>
              <input type="text" name="name" placeholder="Appearance, cracks, color etc"
               />
                   <h6>Physical Damage</h6>
              <input type="text" name="name" placeholder="True/False"
               />
             </div>
             <div>
             <h6>StandBy Unit issued: </h6>
             <input type="text" name="name" placeholder="True/False"
               />
               <h6>IMEI/Serial No: </h6> 
               <input type="number" name="name" placeholder="StandBy Unit IMEI/Serial"
               />
               <h6>Make: </h6>
               <input type="text" name="name" placeholder="StandBy Unit Make"
               />
             </div>
             <div>
               <h4>Disclaimer</h4>
                  <h6>Cracked screens, liquid damage and dropped phones are not covered by the manufacturer warranty. 
                 Phones to be repaired out of Warranty will be on the customer’s account.  <p> A master reset/software upgrade might cause the loss of all data on the handset memory and SIM card memory; this includes all contacts, messages, images and any other data stored on the handset.</p>
                   
                  The customer must ensure that they have backed up their information before allowing the reset process to proceed. We shall not take responsibility for any loss of data during the repair   process. 
                    <p>Where a standby unit issued to you, this is a Safaricom property and must be returned in good condition once your phone is serviced. </p>
                    </h6>
             </div>
             <div>
               <h6>Customer Name: </h6>
               <input  type="text"  name="name" placeholder="Name"/> 
               <h6>Customer Phone number: </h6> 
                 <input type="number" name="phonenumber" placeholder="Customer Phone No."/>
                 <h6>National ID: </h6> 
                 <input type="number" name="phonenumber" placeholder="ID No."/>
                 <p></p>
                 <h6>email address: </h6> 
                 <input type="text" name="phonenumber" placeholder="email."/>
               <h6>Alternative number: </h6> 
                 <input type="number" name="phonenumber" placeholder="Other Phone No."/>
               <br></br>
             </div>
             <div>
               <button class='btn'>Submit Form</button>
             </div>
           </form>
         </div>
      );
   }
}


export default App;
