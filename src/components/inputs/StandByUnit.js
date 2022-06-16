import React from 'react';

function StandByUnit(){
    return(
        <div className="main"> 
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
                        <div className="input_text">
                            <input type="text"  name="standByUnitSerial" id="standByUnitSerial" />
                            <label>Serial</label>
                        </div>
                    </div>
                    
                </fieldset>
            </fieldset>
        </div>
    )

}


export default StandByUnit;