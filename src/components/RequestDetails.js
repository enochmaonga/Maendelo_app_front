import React,{Component} from 'react';
import '../styles/requestDetails.css'

class RequestDetails extends Component{
    constructor(props){
        super(props);
        this.state={data:this.props.data}

        console.log(this.props.value)
    }



    condition(status){
        return status?"Yes":"No"
    }

    dueDate=(timestamp)=>{
        let requestDate = new Date(timestamp);
        let dueDate = new Date();
        dueDate.setDate(requestDate.getDate()+2);
        return dueDate;
      }

    render(){
        return(
                <React.Fragment>

                    <section className="row">
                    <h6 className="display-6">Details</h6>
                    <div className="col-sm-12  col-md-3">
                        {this.props.user.internal?
                         
                            <> 
                                <fieldset className="alert alert-warning mb-1 ps-4">
                                <legend>Customer Details</legend>
                                <div className="row">
                                    <label htmlFor="staticName" className="col-sm-4 col-form-label">Name</label>
                                    <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticName" value={this.state.data.Name}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="staticNationalId" className="col-sm-4 col-form-label">National id</label>
                                    <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticNationalId" value={this.state.data.national_id}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="staticPhone" className="col-sm-4 col-form-label">Phone</label>
                                    <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticPhone" value={this.state.data.phone}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Email</label>
                                    <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={this.state.data.email}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="staticAltPhone" className="col-sm-4 col-form-label">Alt phone</label>
                                    <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticAltPhone" value={this.state.data.altPhone}/>
                                    </div>
                                </div>
                                </fieldset>
                            </>
                        :
                            <>
                                
                            </>
                        }
                        

                        <fieldset className="alert alert-warning  mb-1 ps-4">
                        <legend>Device Details</legend>
                        <div className="row">
                            <label htmlFor="staticBrand" className="col-sm-4 col-form-label">Brand</label>
                            <div className="col-sm-8">
                            <input type="text" readOnly className="form-control-plaintext" id="staticBrand" value={this.state.data.brand}/>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="staticModel" className="col-sm-4 col-form-label">Model</label>
                            <div className="col-sm-8">
                            <input type="text" readOnly className="form-control-plaintext" id="staticModel" value={this.state.data.model}/>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="staticSerial" className="col-sm-4 col-form-label">Serial</label>
                            <div className="col-sm-8">
                            <input type="text" readOnly className="form-control-plaintext" id="staticSerial" value={this.state.data.imei}/>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="staticReceipt" className="col-sm-4 col-form-label">Receipt</label>
                            <div className="col-sm-8">
                            <input type="text" readOnly className="form-control-plaintext" id="staticReceipt" value={this.state.data.imei}/>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="staticWarranty" className="col-sm-4 col-form-label">Warranty</label>
                            <div className="col-sm-8">
                            <input type="text" readOnly className="form-control-plaintext" id="staticWarranty" value={this.condition(this.state.data.warranty)}/>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="staticWarranty" className="col-sm-4 col-form-label">Lipa Mdogo Mdogo</label>
                            <div className="col-sm-8">
                            <input type="text" readOnly className="form-control-plaintext" id="staticLipaMdogoMdogo" value={this.condition(this.state.data.lipaMdogoMdogo)}/>
                            </div>
                        </div>
                        </fieldset>

                        <fieldset className="alert alert-warning  mb-1 ps-4">
                        <legend>Accessories</legend>
                        <div className="row">
                            <label htmlFor="staticBattery" className="col-sm-4 col-form-label">Battery</label>
                            <div className="col-sm-8">
                            <input type="text" readOnly className="form-control-plaintext" id="staticBattery" value={this.condition(this.state.data.accessories.battery)}/>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="staticCharger" className="col-sm-4 col-form-label">Charger</label>
                            <div className="col-sm-8">
                            <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.accessories.charger)}/>
                            </div>
                        </div>
                        </fieldset>
                    </div>
                    <div className="col-9">
                        <fieldset className="row">
                            <legend>Issue Details</legend>
                            <fieldset className="col-sm-12 col-lg-3">
                                <legend>Display</legend>
                                <hr/>
                                <div className="row ps-2">
                                <label htmlFor="staticCharger" className="col-sm-8 col-form-label">Cracked</label>
                                <div className="col-sm-4">
                                <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.Issues.display.cracked)}/>
                                </div>
                                </div>
                                <div className="row ps-2">
                                <label htmlFor="staticCharger" className="col-sm-8 col-form-label">Not Working</label>
                                <div className="col-sm-4">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.Issues.display.notWorking)}/>
                                </div>
                                </div>
                                <div className="row ps-2">
                                    <label htmlFor="staticCharger" className="col-sm-8 col-form-label">No touch</label>
                                    <div className="col-sm-4">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.Issues.display.noTouch)}/>
                                </div>
                                </div> 
                            </fieldset>

                            <fieldset className="col-sm-12 col-lg-3">
                                <legend>Network</legend>
                                <hr/>
                                <div className="row ps-2">
                                <label htmlFor="staticCharger" className="col-sm-8 col-form-label">Not Powering Up</label>
                                <div className="col-sm-4">
                                <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.Issues.power.notPoweringUp)}/>
                                </div>
                                </div>
                                <div className="row ps-2">
                                <label htmlFor="staticCharger" className="col-sm-8 col-form-label">Not Charging</label>
                                <div className="col-sm-4">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.Issues.power.notCharging)}/>
                                </div>
                                </div>
                                <div className="row ps-2">
                                    <label htmlFor="staticCharger" className="col-sm-8 col-form-label">Short Battery Life</label>
                                    <div className="col-sm-4">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.Issues.power.cracked)}/>
                                </div>
                                </div>
                                
                                
                            </fieldset>

                            <fieldset className="col-sm-12 col-lg-3">
                                <legend>Sound</legend>
                                <hr/>
                                <div className="row ps-2">
                                <label htmlFor="staticCharger" className="col-sm-8 col-form-label">No Sound</label>
                                <div className="col-sm-4">
                                <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.Issues.speaker.noSound)}/>
                                </div>
                                </div>
                                <div className="row ps-2">
                                <label htmlFor="staticCharger" className="col-sm-8 col-form-label">Distorted Sound</label>
                                <div className="col-sm-4">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.Issues.speaker.distortedSound)}/>
                                </div>
                                </div>
                                <div className="row ps-2">
                                    <label htmlFor="staticCharger" className="col-sm-8 col-form-label">Not Ringing</label>
                                    <div className="col-sm-4">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.Issues.speaker.notRinging)}/>
                                </div>
                                </div>
                                
                            </fieldset>

                            <fieldset className="col-sm-12 col-lg-3">
                                <legend>Software</legend>
                                <hr/>
                                <div className="row ps-2">
                                <label htmlFor="staticCharger" className="col-sm-8 col-form-label">Slow</label>
                                <div className="col-sm-4">
                                <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.Issues.software.slow)}/>
                                </div>
                                </div>
                                <div className="row ps-2">
                                <label htmlFor="staticCharger" className="col-sm-8 col-form-label">Crashing</label>
                                <div className="col-sm-4">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.Issues.software.crashing)}/>
                                </div>
                                </div>
                                <div className="row ps-2">
                                    <label htmlFor="staticCharger" className="col-sm-8 col-form-label">Hanging</label>
                                    <div className="col-sm-4">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.Issues.software.notHanging)}/>
                                    </div>
                                </div>
                                
                            </fieldset>

                            <fieldset className="col-sm-12 col-lg-3">
                                <legend>Physical State</legend>
                                <hr/>
                                <div className="row ps-2">
                                <label htmlFor="staticCharger" className="col-sm-8 col-form-label">Faulty Keys</label>
                                <div className="col-sm-4">
                                <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.Issues.physicalDamage.faultyKeys)}/>
                                </div>
                                </div>
                                <div className="row ps-2">
                                <label htmlFor="staticCharger" className="col-sm-8 col-form-label">Cracked Body</label>
                                <div className="col-sm-4">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.condition(this.state.data.Issues.physicalDamage.crackedBody)}/>
                                </div>
                                </div>

                            </fieldset>
                        </fieldset>

                        <hr/>
                        <div className="row">
                            <fieldset className="col-sm-12 col-lg-4">
                            <legend>Request Status</legend>
                                <div className="row ps-2">
                                    <label htmlFor="staticRetail" className="col-sm-4 col-form-label">Retail</label>
                                    <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger"  value={this.state.data.retail_centre}/>
                                    </div>
                                </div>
                                <div className="row ps-2">
                                    <label htmlFor="staticRetail" className="col-sm-4 col-form-label">Repair Center</label>
                                    <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.state.data.repair_centre}/>
                                    </div>
                                </div>
                                <div className="row ps-2">
                                    <label htmlFor="staticRetail" className="col-sm-4 col-form-label">Request Date</label>
                                    <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={new Date(this.state.data.Timestamp).toLocaleDateString()}/>
                                    </div>
                                </div>
                                <div className="row ps-2">
                                    <label htmlFor="staticRetail" className="col-sm-4 col-form-label">Due Date</label>
                                    <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.dueDate(this.state.data.Timestamp).toLocaleDateString()}/>
                                    </div>
                                </div>
                                <div className="row ps-2">
                                    <label htmlFor="staticRetail" className="col-sm-4 col-form-label">Status</label>
                                    <div className="col-sm-8">
                                    { (this.dueDate(this.state.data.Timestamp)>new Date())?
                                            <input type="text" readOnly className="form-control-plaintext bg-success text-white" id="staticCharger" value="Within SLA"/>
                                        :
                                            <input type="text" readOnly className="form-control-plaintext bg-danger text-white" id="staticCharger" value="Past SLA"/>
                                        }
                                    </div>
                                </div>
                                <div className="row ps-2">
                                    <label htmlFor="staticRetail" className="col-sm-4 col-form-label">Request Id</label>
                                    <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.state.data._id}/>
                                    </div>
                                </div>
                            </fieldset>

                            {
                            this.state.data.standByUnit&&this.props.user.internal?
                            <fieldset className="col-sm-12 col-lg-4">
                            <legend>Stand By Unit</legend>
                                <div className="row ps-2">
                                    <label htmlFor="staticRetail" className="col-sm-4 col-form-label">Brand</label>
                                    <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger"  value={this.state.data.standByUnitBrand}/>
                                    </div>
                                </div>
                                <div className="row ps-2">
                                    <label htmlFor="staticRetail" className="col-sm-4 col-form-label">Model</label>
                                    <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.state.data.standByUnitModel}/>
                                    </div>
                                </div>
                                <div className="row ps-2">
                                    <label htmlFor="staticRetail" className="col-sm-4 col-form-label">Request Date</label>
                                    <div className="col-sm-8">
                                    <input type="text" readOnly className="form-control-plaintext" id="staticCharger" value={this.state.data.standByUnitSerial}/>
                                    </div>
                                </div>
                            </fieldset>
                            :""
                            }

                            {
                            !this.props.user.internal?
                              <div className="form-outline col-sm-12 col-lg-8">
                                <textarea className="form-control" id="repairResponse" rows="8"></textarea>
                                <label className="form-label" for="textResponse">Comment</label>
                              </div>
                              :
                              <>
                              </>
                            }
                        </div>
                    </div>

                    
                    </section>
                </React.Fragment>

        );
    }

}

export default RequestDetails;
