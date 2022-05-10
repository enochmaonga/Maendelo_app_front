
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
               <input  type="text"  name="name" placeholder="Retail Center Name"
               />
             </div>
             <div>
               <input  type="text"  name="name" placeholder="Retail Center Contact"
               />
             </div>
             <h6>Please fill in the details below</h6>
             <div>
               <input  type="text"  name="name" placeholder="Name"
               />
             </div>
             <div>
               <input type="number" name="phonenumber" placeholder="Customer Phone Number"
               />
             </div>
             <div>
               <input type="text" name="name" placeholder="Item Make"
               />
             </div>
             <div>
               <input type="text" name="name" placeholder="Item Model"
               />
             </div>
             <div>
               <input type="number" name="name" placeholder="IMEI/Serial Number"
               />
             </div>
           </form>
         </div>
      );
   }
}

export default App;
