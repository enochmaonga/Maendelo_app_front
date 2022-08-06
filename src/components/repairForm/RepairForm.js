
import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import '../../styles/repairForm.css'
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

const url ="https://maendeleo-app-backend.herokuapp.com";

class RepairForm extends Component{
    constructor(props){
        super(props);
        this.state={    repairHistoryLimit:false,
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

    handleSubmitButton =()=>{
        this.setState({formNumber:6});
        axios.post(url+"/retail/requests/",this.state)
        .then(res=>console.log(res));
    }

    checkRepairHistory = async (serial)=>{
       let response=  await axios.get(url+"retail/requests/imei/"+serial)
        this.repairHistory(await response.data)  
       
    }

    repairHistory = (response)=>{
        (response.length>0)?this.setState({repairHistory:false}):this.setState({repairHistory:true});
        if(response.length>1){
            this.setState({brand:response.brand})
            this.setState({model:response.model})
        }
        this.setState({repairHistory:response.length>0})
        this.setState({repairHistoryLimit:response.length>1})
        return response.length>2
    }
    


    render(){
        return(
            <React.Fragment>
                <section>
                    <div className="form-container">
                        <div className="mx-auto  bg-gradient "> 
                            <div>
                                <h5>Repair Form</h5>
                            </div>
                            <div className="row bg-white bg-gradient"> 
                                <div className=" left-side col-3 pt-3 ps-5"> 
                                    <ProgressBar value={this.state.formNumber}/>
                                </div>
                                <div className="right-side col-md-12 col-lg-9">
                                    <div className={(this.state.formNumber === 0)?"main active":"main"}>
                                        <fieldset >
                                            <legend>Customer Details</legend>
                                            <div >
                                                <div className="form-floating mb-3">
                                                <input  type="text"  name="name"   className="form-control"
                                                        value={this.state.Name} onChange={e=>{this.setState({Name:e.target.value})}} 
                                                        id="customerName" placeholder="Name"/>
                                                        <label for="name" className="form-label">Name</label>
                                                </div>
                                                
                                            </div>
                        
                                            <div className="row"> 
                                                <div className="col-6 form-floating mb-3">
                                                    <input  type="text"  name="phone" className="form-control"
                                                            value={this.state.phone} onChange={e=>this.setState({phone:e.target.value})}  
                                                            id="phone" placeholder="phone"/>
                                                    <label for="phone" className="form-label">Phone</label>  
                                                </div>
                                                <div className="col-6 form-floating mb-3"> 
                                                    <input  type="email"  name="email"  className="form-control"  
                                                            value={this.state.email} onChange={e=>this.setState({email:e.target.value})}
                                                            id="email" placeholder="email"/>
                                                    <label for="email" className="form-label">Email</label>
                                                </div>
                                                
                                            </div>
                        
                                            <div className="row"> 
                                                <div className="col-6 form-floating mb-3">
                                                    <input  type="text"  name="national_id" className="form-control"
                                                            value={this.state.national_id} onChange={e=>this.setState({national_id:e.target.value})} 
                                                            id="nationalID" placeholder="National Identification"/>
                                                    <label for="nationalID" className="form-label">National Identification</label>  
                                                </div>       
                                                <div className="col-6 form-floating mb-3" >
                                                    <input  type="text"  name="customer-altPhone" className="form-control" 
                                                            id="customerAltPhone" placeholder="Alternative Phone"/>
                                                    <label for="customerAltPhone" className="form-label">Alternative Phone</label>
                                                </div>
                                                
                                            </div>
                                        </fieldset>
                                    </div>


                                    <div className={(this.state.formNumber === 1)?"main active":"main"}> 
                                        <fieldset>
                                            <legend >Device Details</legend>
                                            <div className="row">
                                                <div className="col-6 form-floating mb-3">
                                                        <input type="text" name="serial" className="form-control"  
                                                                id="serial" onChange={e=>{this.setState({serial:e.target.value}); this.setState({imei:e.target.value});this.checkRepairHistory(e.target.value)}} placeholder="serial" />
                                                        <label htmlFor="serial" className="form-label">Serial/IMEI</label> 
                                                </div>
                                        
                                                <div className="col-6 form-floating mb-3">
                                                        <input type="text" name="receipt" className="form-control"
                                                                value={this.state.receipt} 
                                                                onChange={e=>this.setState({receipt:e.target.value})}  
                                                                id="receipt" placeholder="receipt" />
                                                        <label htmlFor="receipt" className="form-label">Receipt</label>  
                                                </div>
                                            </div>
                                
                                            
                                            {(this.state.repairHistoryLimit||this.state.serial==="")?
                                                (this.state.repairHistoryLimit&&this.state.repairHistory)?
                                                <Alert  variant="danger">
                                                    Maximum number of repairs
                                                </Alert>
                                                    :
                                                <Alert  variant="info">
                                                    Please enter the device serial number
                                                </Alert>
                                                
                                            :
                                            <>
                                            <div className="row">
                                                <div className="col-6 form-floating mb-3">
                                                    <input type="text" name="brand" className="form-control" 
                                                            value={this.state.brand} 
                                                            onChange={e=>this.setState({brand:e.target.value})} 
                                                            id="brand" placeholder="Brand"/>
                                                    <label htmlFor="brand" className="form-label">Brand</label>  
                                                </div>
                                        
                                                <div className="col-6 form-floating mb-3">
                                                    <input type="text" name="model" className="form-control" 
                                                            value={this.state.model} 
                                                            onChange={e=>{this.setState({model:e.target.value})}} 
                                                            id="model" placeholder="Model" />
                                                    <label htmlFor="model" className="form-label">Model</label>
                                                </div>
                                                 
                                            </div>
                                                
                                            <div className="row">
                                            <fieldset className="col-3">
                                                <legend>Accessories</legend>
                                                <div>
                                                    <div className="form-check">  
                                                                <label htmlFor="battery" className="form-check-label">Battery</label>
                                                                <input type="checkbox" id="battery" className="form-check-input"
                                                                    onChange ={()=>(this.state.battery)?this.setState({battery:false}):this.setState({battery:true})}
                                                                    name="battery" />
                                                    </div>
                                                <div className="form-check">  
                                                            <label htmlFor="charger" className="form-check-label">Charger</label>
                                                            <input type="checkbox" id="charger" className="form-check-input"
                                                                onChange ={()=>(this.state.charger)?this.setState({charger:false}):this.setState({charger:true})}
                                                                name="charger" />
                                                </div>
                                                </div>
                                            </fieldset>
                                            
                                            <fieldset className="col-4">
                                                <legend>Other</legend>
                                                <div>
                                                <div className="form-check">  
                                                    <label for="lipaMdogoMdogo" className="form-check-label">Lipa Mdogomdogo</label>
                                                    <input type="checkbox"  name="lipaMdogoMdogo"  className="form-check-input"
                                                        onChange ={()=>(this.state.lipaMdogoMdogo)?this.setState({lipaMdogoMdogo:false}):this.setState({lipaMdogoMdogo:true})}
                                                        id="lipaMdogoMdogo"  />
                                                </div>
                                                
                                                <div className="form-check">  
                                                    <label className="form-check-label">Warranty</label>
                                                    <input type="checkbox"  name="warranty" className="form-check-input"
                                                        onChange ={()=>(this.state.warranty)?this.setState({warranty:false}):this.setState({warranty:true})}
                                                    />
                                                </div>
                                        
                                                <div className="form-check">  
                                                    <label className="form-check-label">Repair History</label>
                                                    <input type="checkbox"  name="repairHistory" className="form-check-input"
                                                        onChange ={()=>(this.state.repairHistory)?this.setState({repairHistory:false}):this.setState({repairHistory:true})}  
                                                    checked = {this.state.repairHistory} id="repairHistory" />
                                                </div>
                                                </div>
                                            </fieldset>       
                                                
                                            </div>
                                            
                                            </>
                                            
                                            }
                                            
                                                
                                
                                        </fieldset>    
                                    </div>

                                    <div className={(this.state.formNumber === 2)?"main active":"main"}> 
                                    <fieldset className="row p-1" id="Issue">
                                        <legend>Device Faults</legend>   
                        
                                        <fieldset className="col-4 pt-1" id="display">
                                            <legend className="fs-5">Display</legend>
                                            <div className="row ps-3">
                                                <div className="form-check">
                                                        <label htmlFor="cracked" className="form-check-label">Cracked</label>
                                                        <input type="checkbox" name="cracked" className="display form-check-input" 
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
                                                </div>
                                                <div className="form-check">
                                                        <label htmlFor='notWorking' className="form-check-label">Not Powering Up</label>
                                                        <input type="checkbox"  name="notWorking" className="display form-check-input" onChange ={()=>
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
                                                </div>
                                                <div className="form-check">
                                                            <label htmlFor="noTouch" className="display form-check-label">No Touch</label>
                                                            <input type="checkbox"  name="noTouch" className="display form-check-input" onChange ={()=>
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
                                                </div> 
                                            </div>
                                        </fieldset>
                        
                                        <fieldset className="col-4 pt-1"  id="power">
                                            <legend className="fs-5">Power</legend>
                                            <div className="row ps-3">
                                            <div className="form-check">                        
                                                <label className="power form-check-label" >Not Powering Up</label>
                                                <input type="checkbox"  name="notPoweringUp" className="power form-check-input" 
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
                                            </div>
                                            <div className="form-check">
                                                <label className="power form-check-label" >Short Battery Life</label>
                                                <input type="checkbox"  name="shortBatteryLife" className="power form-check-input" 
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
                                            </div>
                                            <div className="form-check">
                                                <label className="power form-check-label" >Not Charging</label>
                                                <input type="checkbox"  name="notCharging" className="power form-check-input" 
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
                                            </div>
                                            </div>
                                    
                                        </fieldset>
                        
                                        <fieldset className="col-4 pt-1" id="speaker">
                                            <legend className="fs-5">Speaker</legend>
                                                <div className='row ps-3'>
                                                <div className="form-check">  
                                                            <label htmlFor="noSound" className="form-check-label">No Sound</label>
                                                            <input type="checkbox"  name="noSound" className="speaker form-check-input" 
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
                                                </div>
                                                <div className="form-check">  
                                                            <label htmlFor="distortedSound" className="form-check-label">Distorted Sound</label>
                                                            <input type="checkbox"  name="distortedSound" className="speaker form-check-input" 
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
                                                </div>
                                                <div className="form-check">  
                                                            <label htmlFor="notRinging" className="form-check-label">Not Ringing</label>
                                                            <input type="checkbox"  name="notRinging" className="speaker form-check-input" 
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
                                                </div>
                                                </div>                         
                                        </fieldset>
                                    
                                        <fieldset className="col-4 pt-1"  id="network">
                                            <legend className="fs-5">Network</legend>
                                            <div className='row ps-3'>
                                            <div className="form-check">
                                                <label htmlFor="noMobileNetwork" className="network form-check-label" >No Mobile Network</label>
                                                <input type="checkbox"  name="noMobileNetwork" className="network form-check-input" 
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
                                            </div>
                                                <div className="form-check">  
                                                <label htmlFor="noWifiNetwork" className="network form-check-label">No Wifi</label>
                                                <input type="checkbox"  name="noWifiNetwork" className="network form-check-input" 
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
                                            </div>
                                            <div className="form-check">  
                                                <label htmlFor="droppedCalls" className="network form-check-label">Dropping Calls</label>
                                                <input type="checkbox"  name="droppedCalls" className="network form-check-input" 
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
                                             </div>
                                            <div className="form-check">                                                 
                                                <label htmlFor="unableToCall" className="network form-check-label">Unable to make calls</label>
                                                <input type="checkbox"  name="unableToCall" className="network form-check-input" 
                                            
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
                                            </div>
                                            </div>
                                                                
                                        </fieldset>
                                    
                                        <fieldset className="col-4 pt-1"  id="physicalDamage">
                                            <legend className="fs-5">Physical Damage</legend>
                                            <div className='row ps-3'>
                                            <div className="form-check">      
                                                <label htmlFor="faultyKeys" className="physicalDamage form-check-label">Faulty keys</label>
                                                <input type="checkbox"  name="faultyKeys" className="physicalDamage form-check-input" 
                                                
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
                                              </div>
                                              <div className="form-check">     
                                                <label htmlFor="crackedBody" className="physicalDamage form-check-label">Cracked Body</label>
                                                <input type="checkbox"  name="crackedBody" className="physicalDamage form-check-input"  
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
                                            </div>
                                            </div>                    
                                        </fieldset>
                                    
                                        <fieldset className="col-4 pt-1" id="Software">
                                            <legend className="fs-5">Software</legend>
                                            <div className="row ps-3">
                                            <div className="form-check">   
                                                <label htmlFor="slow" className="physicalDamage form-check-label">Slow</label>
                                                <input type="checkbox"  name="slow" className="software form-check-input"
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
                                            </div>
                                            <div className="form-check">   
                                                <label htmlFor="crashing" className="physicalDamage form-check-label">Crashing</label>
                                                <input type="checkbox"  name="crashing" className="software form-check-input" 
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
                                            </div>
                                            <div className="form-check">   
                                                <label htmlFor="hanging" className="form-check-label">Hanging</label>
                                                <input type="checkbox"  name="hanging" className="form-check-input" 
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
                                            </div> 
                                            </div>                
                                        </fieldset>
                        
                                    </fieldset>
                                    </div>

                                    <div className={(this.state.formNumber === 3)?"main active":"main"}> 
                                        <fieldset>
                                            <legend>Stand By Unit</legend>
                                            <div className="form-check">
                                                <label htmlFor="standByUnit" className="form-check-label">StandBy Unit issued</label>
                                                <input type="checkbox"  name="standByUnit" className="form-check-input"
                                                onChange ={()=>(this.state.standByUnit)?this.setState({standByUnit:false}):this.setState({standByUnit:true})}
                                                id="standByUnit" />
                                                
                                            </div>
                                                {(this.state.standByUnit)?           
                                            <fieldset>
                                                <legend>Stand by unit details</legend>
                                                <div >
                                                    <div className="form-floating mb-3"> 
                                                        <input type="text"  name="standByUnitBrand"
                                                            value={this.state.standByUnitBrand} 
                                                            onChange={e=>this.setState({standByUnitBrand:e.target.value})} 
                                                            className="form-control"  
                                                            id="standByUnitBrand" placeholder="brand" />
                                                        <label className="form-label">Brand</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                    
                                                    <input type="text"  name="standByUnitModel"
                                                        value={this.state.standByUnitModel} 
                                                        onChange={e=>this.setState({standByUnitModel:e.target.value})} 
                                                        className="form-control" 
                                                        id="standByUnitModel" placeholder="model"/>
                                                        <label className="form-label">Model</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="form-floating mb-3">  
                                                        <input type="text"  name="standByUnitSerial"
                                                        className="form-control"
                                                        value={this.state.standByUnitSerial} 
                                                        onChange={e=>this.setState({standByUnitSerial:e.target.value})} 
                                                        id="standByUnitSerial"  
                                                        placeholder="serial"/>
                                                        <label htmlFor="standByUnitSerial" className="form-label">Serial</label>
                                                    </div>
                                                </div>
                                                
                                            </fieldset>:""
                                            } 
                                        </fieldset>
                                    </div>

                                    <div className={(this.state.formNumber === 5)?"main active":"main"}> 
                                        <fieldset className="fs-5">         
                                            <legend>Repair Center</legend>         
                                            <div class="form-floating">
                                                
                                                <select name="repair_center" value="" className="form-select" id="repair_center">
                                                    <option value="Nokia">Nokia</option>
                                                    <option value="Samsung">Samsung</option>
                                                </select>
                                                <label htmlFor="repair_center" className="form-label">Repair Center</label> 
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div className={(this.state.formNumber === 4)?"main active":"main"}> 
                                        <fieldset className="fs-5">   
                                                <legend>Retail Center</legend>
                                                    <div class="form-floating">
                                                        <select name="retail_center" className="form-select" placeholder="Retail Center" value={this.state.retail} onChange={e=>this.setState({retail:e.target.value})} id="retail_center">
                                                            <option value="JKIA">JKIA</option>
                                                            <option value="Sarit">Sarit</option>
                                                        </select>
                                                        <label htmlFor="retail_center" className="form-label">Retail Center</label>
                                                    </div>              
                                        </fieldset>
                                    </div>
                                    <div className={(this.state.formNumber > 5)?"main active":"main"}> 
                                        
                                    </div>      
                                </div>
                                <div className=" d-grid gap-4 d-md-block text-end"> 
                                    <button className={this.state.formNumber>0&&this.state.formNumber<5?"btn btn-success":"btn_hide"} onClick={this.handlePrevButton}>Previous</button> 
                                    <button className={this.state.formNumber<5?"btn btn-success":"btn_hide"} onClick={this.handleNextButton}>Next</button>
                                    <button className={this.state.formNumber===5?"btn btn-danger":"btn_hide"} onClick={this.handleSubmitButton} >Submit</button>  
                                </div>  
                            </div>  
                        </div>  
                    </div>
                </section>  
            </React.Fragment>
        )

    }

        
    
    
}

export default RepairForm;



