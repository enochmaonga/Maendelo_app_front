import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import '../../styles/repairForm.css'
import axios from 'axios';



class RepairForm extends Component{
    constructor(props){
        super(props);
        this.state={
                        formNumber:0,
                        Name: "",
                        phone: "",
                        email: "",
                        national_id: "",
                        altPhone:"",
                        brand:"",
                        model: "",
                        imei: "",
                        serial: "",
                        receipt: "",
                        warranty: false,
                        lipaMdogoMdogo:false,
                        repairHistory:false,
                        accessories:{
                            battery:false,
                            charger:false
                        },
                        physical_condition: "",
                        Issues:{

                            display:{	
                                        cracked:false,
                                        notWorking:false,
                                        noTouch:false
                                    },
                            power:{
                                        notPoweringUp:false,
                                        notCharging:false,
                                        shortBatteryLife:false
                                    },
                            speaker:{
                                        noSound:false,
                                        distortedSound:false,
                                        notRinging:false
                            },
                            network:{
                                        noMobileNetwork:false,
                                        noWifiNetwork:false,
                                        droppedCalls:false,
                                        unableToCall:false
                            },
                            physicalDamage:{	
                                    faultyKeys:false,
                                    crackedBody:false
                            },
                            software:{
                                    slow:false,
                                    crashing:false,
                                    hanging:false
                            }	
                        
                        },
                        retail_centre: "",
                        repair_centre: ""
                                 
                    }

    }

    

    handleNextButton = ()=>{
        let next = this.state.formNumber
        this.setState({formNumber:(next<5)?++next:next})
    }
    
    handlePrevButton = ()=>{
        let prev = this.state.formNumber
        this.setState({formNumber:(prev>0)?--prev:prev});
    }

    handleSubmitButton = ()=>{
        axios.post("http://localhost:5000/retail/requests/",this.state)
        .then(res=>console.log(res));
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
                                        <input  type="text"  name="name" value={this.state.Name} onChange={e=>this.setState({Name:e.target.value})} id="customerName"/>
                                        <label htmlFor="name">Name</label> 
                                    </div>
                                </div>
            
                                <div className="input_div"> 
                                    <div className="input_text"> 
                                        <input  type="text"  name="phone" value={this.state.phone} onChange={e=>this.setState({phone:e.target.value})} id="phone" />
                                        <label htmlFor="phone">Phone</label> 
                                    </div>
                                    <div className="input_text">
                                        <input  type="text"  name="email"  value={this.state.email} onChange={e=>this.setState({email:e.target.value})} id="email" />
                                        <label htmlFor="email">Email</label> 
                                    </div>
                                </div>
            
                                <div className="input_div"> 
                                    <div className="input_text">  
                                        <input  type="text"  name="national_id" value={this.state.national_id} onChange={e=>this.setState({national_id:e.target.value})} id="nationalID" />
                                        <label htmlFor="nationalID">National ID</label> 
                                    </div>       
                                    <div className="input_text" >
                                        <input  type="text"  name="customer-altPhone" value={this.state.altPhone} onChange={e=>this.setState({altPhone:e.target.value})} id="customerAltPhone" />
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
                                        <input type="text" name="brand" 
                                            value={this.state.brand} 
                                            onChange={e=>this.setState({brand:e.target.value})} 
                                            id="brand" 
                                        />
                                        <label htmlFor="brand">Brand</label> 
                                    </div>
                            
                                    <div className="input_text">
                                        <input type="text" name="model" 
                                            value={this.state.model} 
                                            onChange={e=>this.setState({model:e.target.value})} 
                                            id="model" 
                                        />
                                        <label htmlFor="model">Model</label> 
                                    </div>
                                </div>
                    
                                <div className="input_div">
                                    <div className="input_text">
                                        <input type="text" name="serial" 
                                            value={this.state.serial} 
                                            onChange={e=>this.setState({serial:e.target.value})} 
                                            id="serial" 
                                        />
                                        <label htmlFor="serial">Serial/IMEI</label> 
                                    </div>
                            
                                    <div className="input_text">
                                        <input type="text" name="receipt" 
                                            value={this.state.receipt} 
                                            onChange={e=>this.setState({receipt:e.target.value})} 
                                            id="receipt"  
                                        />
                                        <label htmlFor="receipt">Receipt</label> 
                                    </div>
                                </div>
                                    
                            
                                <fieldset>
                                    <legend>Accessories</legend>
                                    <div>
                                        <ul>
                                            <li>
                                                <label htmlFor="battery">Battery</label>
                                                <input type="checkbox" id="battery" name="battery" onChange ={()=>(this.state.battery)?this.setState({battery:false}):this.setState({battery:true})} />
                                            </li>
                                            <li>
                                                <label htmlFor="charger">Charger</label>
                                                <input type="checkbox" id="charger" name="charger" onChange ={()=>(this.state.charger)?this.setState({charger:false}):this.setState({charger:true})} />
                                            </li>
                                        </ul> 
                                    </div>
                                </fieldset>
                                
                                <fieldset>
                                    <legend>Other</legend>
                                    <div>
                                        <label htmlFor="lipaMdogoMdogo">Lipa Mdogomdogo</label>
                                        <input type="checkbox"  name="lipaMdogoMdogo" onChange ={()=>(this.state.lipaMdogoMdogo)?this.setState({lipaMdogoMdogo:false}):this.setState({lipaMdogoMdogo:true})} id="lipaMdogoMdogo"  />
                                    </div>
                            
                                    <div >
                                        <label>Warranty</label>
                                        <input type="checkbox"  name="warranty" onChange ={()=>(this.state.warranty)?this.setState({warranty:false}):this.setState({warranty:true})} />
                                    </div>
                            
                                    <div>
                                        <label>Repair History</label>
                                        <input type="checkbox"  name="repairHistory" onChange ={()=>(this.state.repairHistory)?this.setState({repairHistory:false}):this.setState({repairHistory:true})} id="repairHistory" />
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
                                                <input type="checkbox" name="cracked" className="display" 
                                                    onChange ={()=>
                                                        (!this.state.Issues.display.cracked)?
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                display:{
                                                                                ...prevState.Issues.display,
                                                                                    cracked:true
                                                                                }
                                                                            }
                                                                    }))
                                                                
                                                            :
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                display:{
                                                                                ...prevState.Issues.display,
                                                                                    cracked:false
                                                                                }
                                                                            }
                                                                    }))
                                                                }
                                                            id="cracked" />
                                            </li>
                                            <li>
                                                <label htmlFor='notWorking'>Not Powering Up</label>
                                                <input type="checkbox"  name="notWorking" className="display" onChange ={()=>
                                                        (!this.state.Issues.display.cracked)?
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                display:{
                                                                                ...prevState.Issues.display,
                                                                                    notWorking:true
                                                                                }
                                                                            }
                                                                    }))
                                                                
                                                            :
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                display:{
                                                                                ...prevState.Issues.display,
                                                                                    notWorking:false
                                                                                }
                                                                            }
                                                                    }))
                                                                } id="notWorking"  />      
                                            </li>
                                            <li>
                                                    <label htmlFor="noTouch">No Touch</label>
                                                    <input type="checkbox"  name="noTouch" className="display" onChange ={()=>
                                                        (!this.state.Issues.display.cracked)?
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                display:{
                                                                                ...prevState.Issues.display,
                                                                                    noTouch:true
                                                                                }
                                                                            }
                                                                    }))
                                                                
                                                            :
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                display:{
                                                                                ...prevState.Issues.display,
                                                                                    noTouch:false
                                                                                }
                                                                            }
                                                                    }))
                                                                }  id="noTouch" />
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
                                                <input type="checkbox"  name="notPoweringUp" className="power" 
                                                        onChange ={()=>
                                                            (!this.state.Issues.power.notPoweringUp)?
                                                                    this.setState( prevState=>
                                                                        ({
                                                                            ...prevState,
                                                                            Issues:{
                                                                                ...prevState.Issues,
                                                                                    power:{
                                                                                    ...prevState.Issues.power,
                                                                                    notPoweringUp:true
                                                                                    }
                                                                                }
                                                                        }))
                                                                    
                                                                :
                                                                    this.setState( prevState=>
                                                                        ({
                                                                            ...prevState,
                                                                            Issues:{
                                                                                ...prevState.Issues,
                                                                                    power:{
                                                                                    ...prevState.Issues.power,
                                                                                    notPoweringUp:false
                                                                                    }
                                                                                }
                                                                        }))
                                                                    }
                                                id="notPoweringUp" />
                                            </li>
                                            <li>
                                                <label>Short Battery Life</label>
                                                <input type="checkbox"  name="shortBatteryLife" className="power" 
                                                    onChange ={()=>
                                                        (!this.state.Issues.power.shortBatteryLife)?
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                power:{
                                                                                ...prevState.Issues.power,
                                                                                shortBatteryLife:true
                                                                                }
                                                                            }
                                                                    }))
                                                                
                                                            :
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                power:{
                                                                                ...prevState.Issues.power,
                                                                                shortBatteryLife:false
                                                                                }
                                                                            }
                                                                    }))
                                                                } 
                                                            id="shortBatteryLife" />   
                                            </li>
                                            <li>
                                                <label>Not Charging</label>
                                                <input type="checkbox"  name="notCharging" className="power" 
                                                        onChange ={()=>
                                                            (!this.state.Issues.power.notCharging)?
                                                                    this.setState( prevState=>
                                                                        ({
                                                                            ...prevState,
                                                                            Issues:{
                                                                                ...prevState.Issues,
                                                                                    power:{
                                                                                    ...prevState.Issues.power,
                                                                                    notCharging:true
                                                                                    }
                                                                                }
                                                                        }))
                                                                    
                                                                :
                                                                    this.setState( prevState=>
                                                                        ({
                                                                            ...prevState,
                                                                            Issues:{
                                                                                ...prevState.Issues,
                                                                                    power:{
                                                                                    ...prevState.Issues.power,
                                                                                    notCharging:false
                                                                                    }
                                                                                }
                                                                        }))
                                                                    } 
                                                    id="notCharging" />
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
                                                    <input type="checkbox"  name="noSound" className="speaker" 
                                                        onChange ={()=>
                                                            (!this.state.Issues.speaker.noSound)?
                                                                    this.setState( prevState=>
                                                                        ({
                                                                            ...prevState,
                                                                            Issues:{
                                                                                ...prevState.Issues,
                                                                                    speaker:{
                                                                                    ...prevState.Issues.speaker,
                                                                                    noSound:true
                                                                                    }
                                                                                }
                                                                        }))
                                                                    
                                                                :
                                                                    this.setState( prevState=>
                                                                        ({
                                                                            ...prevState,
                                                                            Issues:{
                                                                                ...prevState.Issues,
                                                                                    speaker:{
                                                                                    ...prevState.Issues.speaker,
                                                                                    noSound:false
                                                                                    }
                                                                                }
                                                                        }))
                                                                    } 
                                                    id="noSound" />
                                                </li>
                                                <li>
                                                    <label htmlFor="distortedSound">Distorted Sound</label>
                                                    <input type="checkbox"  name="distortedSound" className="speaker" 
                                                    onChange ={()=>
                                                        (!this.state.Issues.speaker.distortedSound)?
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                            speaker:{
                                                                                ...prevState.Issues.speaker,
                                                                                distortedSound:true
                                                                                }
                                                                            }
                                                                    }))
                                                                
                                                            :
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                speaker:{
                                                                                ...prevState.Issues.speaker,
                                                                                distortedSound:false
                                                                                }
                                                                            }
                                                                    }))
                                                                } 

                                                    id="distortedSound" />  
                                                </li>
                                                <li>
                                                    <label htmlFor="notRinging">Not Ringing</label>
                                                    <input type="checkbox"  name="notRinging" className="speaker" 
                                                        onChange ={()=>
                                                            (!this.state.Issues.speaker.notRinging)?
                                                                    this.setState( prevState=>
                                                                        ({
                                                                            ...prevState,
                                                                            Issues:{
                                                                                ...prevState.Issues,
                                                                                speaker:{
                                                                                    ...prevState.Issues.speaker,
                                                                                    notRinging:true
                                                                                    }
                                                                                }
                                                                        }))
                                                                    
                                                                :
                                                                    this.setState( prevState=>
                                                                        ({
                                                                            ...prevState,
                                                                            Issues:{
                                                                                ...prevState.Issues,
                                                                                speaker:{
                                                                                    ...prevState.Issues.speaker,
                                                                                    notRinging:false
                                                                                    }
                                                                                }
                                                                        }))
                                                                    } 
                                                    id="notRinging" />  
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
                                                <input type="checkbox"  name="noMobileNetwork" className="network" 
                                                    onChange ={()=>
                                                        (!this.state.Issues.network.noMobileNetwork)?
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                            network:{
                                                                                ...prevState.Issues.network,
                                                                                noMobileNetwork:true
                                                                                }
                                                                            }
                                                                    }))
                                                                
                                                            :
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                            network:{
                                                                                ...prevState.Issues.network,
                                                                                noMobileNetwork:false
                                                                                }
                                                                            }
                                                                    }))
                                                                }  
                                                id="noMobileNetwork" />
                                            </li>
                                            <li>
                                                <label htmlFor="noWifiNetwork">No Wifi</label>
                                                <input type="checkbox"  name="noWifiNetwork" className="network" 
                                                onChange ={()=>
                                                    (!this.state.Issues.network.noWifiNetwork)?
                                                            this.setState( prevState=>
                                                                ({
                                                                    ...prevState,
                                                                    Issues:{
                                                                        ...prevState.Issues,
                                                                        network:{
                                                                            ...prevState.Issues.network,
                                                                            noWifiNetwork:true
                                                                            }
                                                                        }
                                                                }))
                                                            
                                                        :
                                                            this.setState( prevState=>
                                                                ({
                                                                    ...prevState,
                                                                    Issues:{
                                                                        ...prevState.Issues,
                                                                        network:{
                                                                            ...prevState.Issues.network,
                                                                            noWifiNetwork:false
                                                                            }
                                                                        }
                                                                }))
                                                            } 
                                                id="noWifiNetwork" />  
                                            </li>
                                            <li>
                                                <label htmlFor="droppedCalls">Dropping Calls</label>
                                                <input type="checkbox"  name="droppedCalls" className="network" 
                                                onChange ={()=>
                                                    (!this.state.Issues.network.droppedCalls)?
                                                            this.setState( prevState=>
                                                                ({
                                                                    ...prevState,
                                                                    Issues:{
                                                                        ...prevState.Issues,
                                                                        network:{
                                                                            ...prevState.Issues.network,
                                                                            droppedCalls:true
                                                                            }
                                                                        }
                                                                }))
                                                            
                                                        :
                                                            this.setState( prevState=>
                                                                ({
                                                                    ...prevState,
                                                                    Issues:{
                                                                        ...prevState.Issues,
                                                                        network:{
                                                                            ...prevState.Issues.network,
                                                                            droppedCalls:false
                                                                            }
                                                                        }
                                                                }))
                                                            } 
                                                id="droppedCalls" />  
                                            </li>
                                            <li>
                                                <label htmlFor="unableToCall">Unable to make calls</label>
                                                <input type="checkbox"  name="unableToCall" className="network" 
                                     
                                                onChange ={()=>
                                                    (!this.state.Issues.network.unableToCall)?
                                                            this.setState( prevState=>
                                                                ({
                                                                    ...prevState,
                                                                    Issues:{
                                                                        ...prevState.Issues,
                                                                        network:{
                                                                            ...prevState.Issues.network,
                                                                            unableToCall:true
                                                                            }
                                                                        }
                                                                }))
                                                            
                                                        :
                                                            this.setState( prevState=>
                                                                ({
                                                                    ...prevState,
                                                                    Issues:{
                                                                        ...prevState.Issues,
                                                                        network:{
                                                                            ...prevState.Issues.network,
                                                                            unableToCall:false
                                                                            }
                                                                        }
                                                                }))
                                                            } 
                                                id="unableToCall" />  
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
                                                <input type="checkbox"  name="faultyKeys" className="physicalDamage" 
                                                
                                                onChange ={()=>
                                                    (!this.state.Issues.physicalDamage.faultyKeys)?
                                                            this.setState( prevState=>
                                                                ({
                                                                    ...prevState,
                                                                    Issues:{
                                                                        ...prevState.Issues,
                                                                        physicalDamage:{
                                                                            ...prevState.Issues.physicalDamage,
                                                                            faultyKeys:true
                                                                            }
                                                                        }
                                                                }))
                                                            
                                                        :
                                                            this.setState( prevState=>
                                                                ({
                                                                    ...prevState,
                                                                    Issues:{
                                                                        ...prevState.Issues,
                                                                        physicalDamage:{
                                                                            ...prevState.Issues.physicalDamage,
                                                                            faultyKeys:false
                                                                            }
                                                                        }
                                                                }))
                                                            }  
                                                
                                                id="faultyKeys" /> 
                                            </li>
                                            <li>
                                                <label htmlFor="crackedBody">Cracked Body</label>
                                                <input type="checkbox"  name="crackedBody" className="physicalDamage"  
                                                onChange ={()=>
                                                    (!this.state.Issues.physicalDamage.crackedBody)?
                                                            this.setState( prevState=>
                                                                ({
                                                                    ...prevState,
                                                                    Issues:{
                                                                        ...prevState.Issues,
                                                                        physicalDamage:{
                                                                            ...prevState.Issues.physicalDamage,
                                                                            crackedBody:true
                                                                            }
                                                                        }
                                                                }))
                                                            
                                                        :
                                                            this.setState( prevState=>
                                                                ({
                                                                    ...prevState,
                                                                    Issues:{
                                                                        ...prevState.Issues,
                                                                        physicalDamage:{
                                                                            ...prevState.Issues.physicalDamage,
                                                                            crackedBody:false
                                                                            }
                                                                        }
                                                                }))
                                                            }  
                                                
                                                id="crackedBody" /> 
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
                                                    <input type="checkbox"  name="slow" className="software"
                                                    onChange ={()=>
                                                        (!this.state.Issues.software.slow)?
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                software:{
                                                                                ...prevState.Issues.software,
                                                                                slow:true
                                                                                }
                                                                            }
                                                                    }))
                                                                
                                                            :
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                display:{
                                                                                ...prevState.Issues.software,
                                                                                slow:false
                                                                                }
                                                                            }
                                                                    }))
                                                                }  
                                                    
                                                    id="slow" /> 
                                                </li>
                                                <li>
                                                    <label htmlFor="crashing">Crashing</label>
                                                    <input type="checkbox"  name="crashing" className="software" 
                                                    onChange ={()=>
                                                        (!this.state.Issues.software.crashing)?
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                software:{
                                                                                ...prevState.Issues.software,
                                                                                crashing:true
                                                                                }
                                                                            }
                                                                    }))
                                                                
                                                            :
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                software:{
                                                                                ...prevState.Issues.software,
                                                                                crashing:false
                                                                                }
                                                                            }
                                                                    }))
                                                                }  
                                                    id="crashing" /> 
                                                </li>
                                                <li>
                                                    <label htmlFor="hanging">Hanging</label>
                                                    <input type="checkbox"  name="hanging" className="software" 
                                                    onChange ={()=>
                                                        (!this.state.Issues.software.hanging)?
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                software:{
                                                                                ...prevState.Issues.display,
                                                                                hanging:true
                                                                                }
                                                                            }
                                                                    }))
                                                                
                                                            :
                                                                this.setState( prevState=>
                                                                    ({
                                                                        ...prevState,
                                                                        Issues:{
                                                                            ...prevState.Issues,
                                                                                software:{
                                                                                ...prevState.Issues.software,
                                                                                hanging:false
                                                                                }
                                                                            }
                                                                    }))
                                                                } 
                                                    
                                                    id="hanging" /> 
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
                                    <input type="checkbox"  name="standByUnit" onChange ={()=>(this.state.standByUnit)?this.setState({standByUnit:false}):this.setState({standByUnit:true})}  id="standByUnit" />
                                </div>
                                                
                                <fieldset>
                                    <legend>Stand by unit details</legend>
                                    <div className="input_div">
                                        <div className="input_text">
                                            <input type="text"  name="standByUnitBrand" 
                                                value={this.state.standByUnitBrand} 
                                                onChange={e=>this.setState({standByUnitBrand:e.target.value})} 
                                                id="standByUnitBrand" 
                                            />
                                            <label>Brand</label>
                                        </div>
                                        <div className="input_text">
                                            <input type="text"  name="standByUnitModel" 
                                                value={this.state.standByUnitModel} 
                                                onChange={e=>this.setState({standByUnitModel:e.target.value})} 
                                                id="standByUnitModel" 
                                            />
                                            <label>Model</label>
                                        </div>
                                    </div>
                                    <div className="input_div">
                                        <div className="input_text">
                                            <input type="text"  name="standByUnitSerial" 
                                                value={this.state.standByUnitSerial} 
                                                onChange={e=>this.setState({standByUnitSerial:e.target.value})} 
                                                id="standByUnitSerial" 
                                            />
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
                                    <select name="repair_center" value={this.state.repair_center} onChange={e=>this.setState({repair_center:e.target.value})} id="repair_center">
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
                                            <select name="retail_center" placeholder="Retail Center Name" value={this.state.retail} onChange={e=>this.setState({retail:e.target.value})} id="retail_center">
                                                <option value="JKIA">JKIA</option>
                                                <option value="Sarit">Sarit</option>
                                            </select>
                                        </div>              
                            </fieldset>
                        </div>   
                        

                        <div className="button step_2"> 
                            <button className={this.state.formNumber>0?"prev_btn":"btn_hide"}  onClick={this.handlePrevButton}>Previous</button> 
                            <button className={this.state.formNumber<5?"next_btn":"btn_hide"}  onClick={this.handleNextButton}>Next</button>
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