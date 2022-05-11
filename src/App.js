
import './App.css';
import React, { Component } from 'react';


class App extends Component{
   render(){
      return(
         <div>
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
               <input  type="text"  name="name" placeholder="Retail Center Name"
               />
               <input  type="text"  name="name" placeholder="Retail Center Contact"
               />
             </div>
             <div>
               <input  type="text"  name="name" placeholder=" "
               />
             </div>
             
            
             <div>
             <n6>Item Details: </n6> 
               <input type="text" name="name" placeholder="Item Make"
               />
                <input type="text" name="name" placeholder="Item Model"
               />
               <input type="number" name="name" placeholder="IMEI/Serial No"
               />
               <h5>ACCESSORIES ACCOMPANYING CELLPHONE: (SIM cards must not be sent with the device for repair)</h5>
               <input type="checkbox" id="accessory" name="Battery" value="Battery"/>
               <label for="accessory">Battery</label>
               <input type="checkbox" id="accessory" name="Charger" value="Charger"/>
               <label for="accessory">Charger</label>
              
               <n6>Lipa Mdogomdogo</n6>
               <input type="checkbox" id="Lipa" name="Lmm" value="Lmm"/> 
               <label for="Lipa">Yes</label>
               <input type="checkbox" id="Lipa" name="Lmm" value="Lmm"/> 
               <label for="Lipa">No</label>
              
               

              <h6>Is this repair a WARRANTY CLAIM?</h6>
              <input type="text" name="name" placeholder="True/False"
               />
               <h6>Repair History</h6>
               <input type="text" name="name" placeholder="True/False"
               />
             </div>
             <div>
              
             </div>
             <div>
             <h6>StandBy Unit issued: </h6>
             <input type="text" name="name" placeholder="True/False"
               />
               <input type="number" name="name" placeholder="StandBy Unit IMEI/Serial"
               />
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
               <n6>Customer Name: </n6>
               <input  type="text"  name="name" placeholder="Name"
               /> <n6>Customer Phone number: </n6> 
                 <input type="number" name="phonenumber" placeholder="Customer Phone No."
               /><br></br>
             </div>
           </form>
         </div>
      );
   }
}

export default App;
