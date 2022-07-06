import React, { Component } from 'react';
import CustomerDetails from './inputs/CustomerDetails';
import DeviceDetails from './inputs/DeviceDetails';
import DeviceFaults from './inputs/DeviceFaults';
import RepairCenter from './inputs/RepairCenter';
import RetailCenter from './inputs/RetailCenter';
import StandByUnit from './inputs/StandByUnit';
import ProgressBar from './ProgressBar';
import '../../styles/repairForm.css'



class RepairForm extends Component{
    constructor(props){
        super(props);
        this.state={
                        formNumber:0,
                        customer:{
                                    name:"",
                                    phone:"",
                                    email:"",
                                    nationalID:"",
                                    alternativePhone:""
                                }
                    }

    }

    
    handleSubmitButton =()=>{
        console.log(this.state);
    }
   

    handleNextButton = ()=>{
        let next = this.state.formNumber
        this.setState({formNumber:(next<5)?++next:next})
    }
    
    handlePrevButton = ()=>{
        let prev = this.state.formNumber
        this.setState({formNumber:(prev>0)?--prev:prev})
    }




    render(){
        return(
            <React.Fragment>
            <div className="card"> 
                <div className="saf">
                    <h3 className="text-white">Repair Form</h3>
                </div>
                <div className="form"> 
                    <div className="left-side"> 
                        <ProgressBar value={this.state.formNumber}/>
                    </div>
                    <div className="right-side">
                        <div className={(this.state.formNumber === 0)?"main active":"main"}>
                            <fieldset>
                                <legend>Customer Details</legend>
                                <div className="input_div">
                                    <div className="input_text">
                                        <input  type="text"  name="name"  id="customerName"/>
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
                                        <input  type="text"  name="national_id" id="nationalID" />
                                        <label htmlFor="nationalID">National ID</label> 
                                    </div>       
                                    <div className="input_text" >
                                        <input  type="text"  name="customer-altPhone" id="customerAltPhone" />
                                        <label htmlFor="customerAltPhone">Alternative Phone</label> 
                                    </div>
                                </div>
                            </fieldset>
                        </div>


                        <div className={(this.state.formNumber === 1)?"main active":"main"}> 
                            <fieldset>
                                <legend>Device Details</legend>
                    
                                <div className="input_div">
                                    <div className="input_text">
                                        <input type="text" name="brand" id="brand" />
                                        <label htmlFor="brand">Brand</label> 
                                    </div>
                            
                                    <div className="input_text">
                                        <input type="text" name="model" id="model" />
                                        <label htmlFor="model">Model</label> 
                                    </div>
                                </div>
                    
                                <div className="input_div">
                                    <div className="input_text">
                                        <input type="text" name="serial" id="serial" />
                                        <label htmlFor="serial">Serial/IMEI</label> 
                                    </div>
                            
                                    <div className="input_text">
                                        <input type="text" name="receipt" id="receipt"  />
                                        <label htmlFor="receipt">Receipt</label> 
                                    </div>
                                </div>
                                    
                            
                                <fieldset>
                                    <legend>Accessories</legend>
                                    <div>
                                        <ul>
                                            <li>
                                                <label htmlFor="battery">Battery</label>
                                                <input type="checkbox" id="battery" name="battery" value="true"/>
                                            </li>
                                            <li>
                                                <label htmlFor="charger">Charger</label>
                                                <input type="checkbox" id="charger" name="charger" value="true"/>
                                            </li>
                                        </ul> 
                                    </div>
                                </fieldset>
                                
                                <fieldset>
                                    <legend>Other</legend>
                                    <div>
                                        <label htmlFor="lipaMdogoMdogo">Lipa Mdogomdogo</label>
                                        <input type="checkbox"  name="lipaMdogoMdogo" id="lipaMdogoMdogo" value="true"/>
                                    </div>
                            
                                    <div >
                                        <label>Warranty</label>
                                        <input type="checkbox"  name="warranty" id="warranty" value="true"/>
                                    </div>
                            
                                    <div>
                                        <label>Repair History</label>
                                        <input type="checkbox"  name="repairHistory" id="repairHistory" value="true"/>
                                    </div>
                                </fieldset>           
                    
                            </fieldset>    
                        </div>

                        <div className={(this.state.formNumber === 2)?"main active":"main"}> 
                            <fieldset id="Issue">
                                <legend>Device Faults</legend>   
                
                                <fieldset id="display">
                                    <legend>Display</legend>
                                    <div>
                                        <ul>
                                            <li>
                                                <label htmlFor="cracked">Cracked</label>
                                                <input type="checkbox"  name="cracked" className="display" id="cracked" />
                                            </li>
                                            <li>
                                                <label htmlFor='notWorking'>Not Powering Up</label>
                                                <input type="checkbox"  name="notWorking" className="display" id="notWorking"  />      
                                            </li>
                                            <li>
                                                    <label htmlFor="noTouch">No Touch</label>
                                                    <input type="checkbox"  name="noTouch" className="display"  id="noTouch" />
                                            </li>
                                        </ul>
                                    </div>
                                </fieldset>
                
                                <fieldset id="power">
                                    <legend>Power</legend>
                                    <div>
                                        <ul>
                                            <li>
                                                <label>Not Powering Up</label>
                                                <input type="checkbox"  name="notPoweringUp" className="power" id="notPoweringUp" />
                                            </li>
                                            <li>
                                                <label>Short Battery Life</label>
                                                <input type="checkbox"  name="shortBatteryLife" className="power" id="shortBatteryLife" />   
                                            </li>
                                            <li>
                                                <label>Not Charging</label>
                                                <input type="checkbox"  name="notCharging" className="power" id="notCharging" />
                                            </li>
                                        </ul>  
                                    </div>
                            
                                </fieldset>
                
                                <fieldset id="speaker">
                                    <legend>Speaker</legend>
                                        <div>
                                            <ul>
                                                <li>
                                                    <label htmlFor="noSound">No Sound</label>
                                                    <input type="checkbox"  name="noSound" className="speaker" id="noSound" />
                                                </li>
                                                <li>
                                                    <label htmlFor="distortedSound">Distorted Sound</label>
                                                    <input type="checkbox"  name="distortedSound" className="speaker" id="distortedSound" />  
                                                </li>
                                                <li>
                                                    <label htmlFor="notRinging">Not Ringing</label>
                                                    <input type="checkbox"  name="notRinging" className="speaker" id="notRinging" />  
                                                </li>
                                                </ul>
                                        </div>                         
                                </fieldset>
                            
                                <fieldset id="network">
                                    <legend>Network</legend>
                                    <div>
                                        <ul>
                                            <li>
                                                <label htmlFor="noMobileNetwork">No Mobile Network</label>
                                                <input type="checkbox"  name="noMobileNetwork" className="network" id="noMobileNetwork" />
                                            </li>
                                            <li>
                                                <label htmlFor="noWifiNetwork">No Wifi</label>
                                                <input type="checkbox"  name="noWifiNetwork" className="network" id="noWifiNetwork" />  
                                            </li>
                                            <li>
                                                <label htmlFor="droppedCalls">Dropping Calls</label>
                                                <input type="checkbox"  name="droppedCalls" className="network" id="droppedCalls" />  
                                            </li>
                                            <li>
                                                <label htmlFor="unableToCall">Unable to make calls</label>
                                                <input type="checkbox"  name="unableToCall" className="network" id="unableToCall" />  
                                            </li>
                                        </ul> 
                                    </div>
                                                        
                                </fieldset>
                            
                                <fieldset id="physicalDamage">
                                    <legend>Physical Damage</legend>
                                    <div>
                                        <ul>
                                            <li>
                                                <label htmlFor="faultyKeys">Faulty keys</label>
                                                <input type="checkbox"  name="faultyKeys" className="physicalDamage" id="faultyKeys" /> 
                                            </li>
                                            <li>
                                                <label htmlFor="crackedBody">Cracked Body</label>
                                                <input type="checkbox"  name="crackedBody" className="physicalDamage" id="crackedBody" /> 
                                            </li>
                                        </ul>
                                    </div>                    
                                </fieldset>
                            
                                <fieldset id="Software">
                                    <legend>Software</legend>
                                        <div>
                                            <ul>
                                                <li>
                                                    <label htmlFor="slow" >Slow</label>
                                                    <input type="checkbox"  name="slow" className="software" id="slow" /> 
                                                </li>
                                                <li>
                                                    <label htmlFor="crashing">Crashing</label>
                                                    <input type="checkbox"  name="crashing" className="software" id="crashing" /> 
                                                </li>
                                                <li>
                                                    <label htmlFor="hanging">Hanging</label>
                                                    <input type="checkbox"  name="hanging" className="software"  id="hanging" /> 
                                                </li>
                                            </ul>
                                        </div>                 
                                </fieldset>
                
                            </fieldset>
                        </div>

                        <div className={(this.state.formNumber === 3)?"main active":"main"}> 
                            <fieldset>
                                <legend>Stand By Unit</legend>
                                <div>
                                    <label>StandBy Unit issued</label>
                                    <input type="checkbox"  name="standByUnit" id="standByUnit" value="true"/>
                                </div>
                                                
                                <fieldset>
                                    <legend>Stand by unit details</legend>
                                    <div className="input_div">
                                        <div className="input_text">
                                            <input type="text"  name="standByUnitBrand" id="standByUnitBrand" />
                                            <label>Brand</label>
                                        </div>
                                        <div className="input_text">
                                            <input type="text"  name="standByUnitModel" id="standByUnitModel" />
                                            <label>Model</label>
                                        </div>
                                    </div>
                                    <div className="input_div">
                                        <div className="input_text">
                                            <input type="text"  name="standByUnitSerial" id="standByUnitSerial" />
                                            <label>Serial</label>
                                        </div>
                                    </div>
                                    
                                </fieldset>
                            </fieldset>
                        </div>

                        <div className={(this.state.formNumber === 5)?"main active":"main"}> 
                            <fieldset>         
                                <legend>Repair Center Details</legend>         
                                <div>
                                    <label htmlFor="repair_center">Repair Center</label> 
                                    <select name="repair_center" id="repair_center">
                                        <option value="Nokia">Nokia</option>
                                        <option value="Samsung">Samsung</option>
                                    </select>
                                </div>
                            </fieldset>
                        </div>

                        <div className={(this.state.formNumber === 4)?"main active":"main"}> 
                                <fieldset>   
                                    <legend>Retail Center Details</legend>
                                        <div>
                                            <label htmlFor="retail_center">Retail Center</label> 
                                            <select name="retail_center" placeholder="Retail Center Name" id="retail_center">
                                                <option value="JKIA">JKIA</option>
                                                <option value="Sarit">Sarit</option>
                                            </select>
                                        </div>              
                                </fieldset>
                        </div>   
                        

                        <div className="button step_2"> 
                            <button className={this.state.formNumber>0?"prev_btn":"btn_hide"}   onClick={this.handlePrevButton}>Previous</button> 
                            <button className={this.state.formNumber<5?"next_btn":"btn_hide"}   onClick={this.handleNextButton}>Next</button>
                            <button className={this.state.formNumber<5?"btn_hide":"next_btn"}  onClick={this.handleSubmitButton}>Submit</button>  
                        </div> 
                    </div>  
                </div>  
            </div>    
            </React.Fragment>
        )

    }

        
    
    
}

export default RepairForm;