import React, { Component } from 'react';


class RepairCenter extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return(
            <div className={(this.props.formStatus === 5)?"main active":"main"}> 
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
        );
    }
    
}

export default RepairCenter;