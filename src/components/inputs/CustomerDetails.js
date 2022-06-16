import React from 'react';

function CustomerDetails(){
    return (
        <React.Fragment>
            <div className="main active">
                <fieldset>
                    <legend>Customer Details</legend>
                    <div className="input_div">
                        <div className="input_text">
                            <input  type="text"  name="Name"  id="customerName" require required/>
                            <label for="name">Name</label> 
                        </div>
                    </div>

                    <div className="input_div"> 
                        <div className="input_text"> 
                            <input  type="text"  name="phone"  id="phone" require required/>
                            <label for="phone">Phone</label> 
                        </div>
                        <div className="input_text">
                            <input  type="text"  name="email"  id="email" require required/>
                            <label for="email">Email</label> 
                        </div>
                    </div>

                    <div className="input_div"> 
                        <div className="input_text">  
                            <input  type="text"  name="national_id"  id="nationalID" require required/>
                            <label for="nationalID">National ID</label> 
                        </div>       
                        <div className="input_text" >
                            <input  type="text"  name="customer-altPhone"  id="customerAltPhone" require required/>
                            <label for="customerAltPhone">Alternative Phone</label> 
                        </div>
                    </div>
                </fieldset>
            </div>
        </React.Fragment>
    );
}


export default CustomerDetails;