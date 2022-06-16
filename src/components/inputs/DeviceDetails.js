import React from 'react';

function DeviceDetails(){
    return(
    <div className="main"> 
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
    );
}
 
export default DeviceDetails;