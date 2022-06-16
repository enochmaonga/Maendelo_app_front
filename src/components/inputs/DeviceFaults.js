import React from 'react';

function DeviceFaults(){
    return(
        <div className="main"> 
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
    );
}

export default DeviceFaults;