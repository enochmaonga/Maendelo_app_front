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
        this.state={formNumber:0}

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
                        <CustomerDetails formStatus={this.state.formNumber}/>
                        <DeviceDetails formStatus={this.state.formNumber}/>
                        <DeviceFaults formStatus={this.state.formNumber}/>
                        <RepairCenter formStatus={this.state.formNumber}/>
                        <RetailCenter formStatus={this.state.formNumber}/>
                        <StandByUnit formStatus={this.state.formNumber}/>
                        <div className="button step_2"> 
                            <button className={this.state.formNumber>0?"prev_btn":"btn_hide"} onClick={this.handlePrevButton}>Previous</button> 
                            <button className={this.state.formNumber<5?"next_btn":"btn_hide"}onClick={this.handleNextButton}>Next</button>
                            <button className={this.state.formNumber<5?"btn_hide":"next_btn"}>Submit</button>  
                        </div> 
                    </div>  
                </div>  
            </div>    
            </React.Fragment>
        )

    }

        
    
    
}

export default RepairForm;