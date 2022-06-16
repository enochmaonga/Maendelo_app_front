import React, { Component } from 'react';

class CustomerDetails extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return (
            <React.Fragment>
                <div className={(this.props.formStatus === 0)?"main active":"main"}>
                    <fieldset>
                        <legend>Customer Details</legend>
                        <div className="input_div">
                            <div className="input_text">
                                <input  type="text"  name="Name"  id="customerName" />
                                <label htmlFor="name">Name</label> 
                            </div>
                        </div>
    
                        <div className="input_div"> 
                            <div className="input_text"> 
                                <input  type="text"  name="phone"  id="phone" />
                                <label htmlFor="phone">Phone</label> 
                            </div>
                            <div className="input_text">
                                <input  type="text"  name="email"  id="email" />
                                <label htmlFor="email">Email</label> 
                            </div>
                        </div>
    
                        <div className="input_div"> 
                            <div className="input_text">  
                                <input  type="text"  name="national_id"  id="nationalID" />
                                <label htmlFor="nationalID">National ID</label> 
                            </div>       
                            <div className="input_text" >
                                <input  type="text"  name="customer-altPhone"  id="customerAltPhone" />
                                <label htmlFor="customerAltPhone">Alternative Phone</label> 
                            </div>
                        </div>
                    </fieldset>
                </div>
            </React.Fragment>
        );

    }
    
}


export default CustomerDetails;