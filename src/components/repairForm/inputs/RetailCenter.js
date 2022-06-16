import React, { Component } from 'react';


class RetailCenter extends Component{
    constructor(props){
        super(props)
        this.props = props;
    }

    render(){
        return(
                <div className={(this.props.formStatus === 4)?"main active":"main"}> 
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
            );

    }
    
}

export default RetailCenter;