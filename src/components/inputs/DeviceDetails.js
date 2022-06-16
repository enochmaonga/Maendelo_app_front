import React from 'react';

function DeviceDetails(){
    return(
    <div class="main"> 
    <fieldset>
        <legend>Device Details</legend>

        <div class="input_div">
            <div class="input_text">
                <input type="text" name="brand" id="brand" require required/>
                <label for="brand">Brand</label> 
            </div>
    
            <div class="input_text">
                <input type="text" name="model" id="model" require required/>
                <label for="model">Model</label> 
            </div>
        </div>

        <div class="input_div">
            <div class="input_text">
                <input type="text" name="serial" id="serial" require required/>
                <label for="serial">Serial/IMEI</label> 
            </div>
    
            <div class="input_text">
                <input type="text" name="receipt" id="receipt"  require required/>
                <label for="receipt">Receipt</label> 
            </div>
        </div>
            
    
        <fieldset>
            <legend>Accessories</legend>
            <div>
                <ul>
                    <li>
                        <label for="battery">Battery</label>
                        <input type="checkbox" id="battery" name="battery" value="true"/>
                    </li>
                    <li>
                        <label for="charger">Charger</label>
                        <input type="checkbox" id="charger" name="charger" value="true"/>
                    </li>
                </ul> 
            </div>
        </fieldset>
        
        <fieldset>
            <legend>Other</legend>
            <div>
                <label for="lipaMdogoMdogo">Lipa Mdogomdogo</label>
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