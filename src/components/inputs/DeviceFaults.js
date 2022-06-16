<div class="main"> 
    <fieldset id="Issue">
        <legend>Device Faults</legend>   

        <fieldset id="display">
            <legend>Display</legend>
            <div>
                <ul>
                    <li>
                        <label>Cracked</label>
                        <input type="checkbox"  name="cracked" class="display" id="cracked" value="true"/>
                    </li>
                    <li>
                        <label>Not Powering Up</label>
                        <input type="checkbox"  name="notWorking" class="display" id="notWorking" value="true" />      
                    </li>
                    <li>
                            <label>No Touch</label>
                            <input type="checkbox"  name="noTouch" class="display"  id="noTouch" value="true"/>
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
                        <input type="checkbox"  name="notPoweringUp" class="power" id="notPoweringUp" value="true"/>
                    </li>
                    <li>
                        <label>Short Battery Life</label>
                        <input type="checkbox"  name="shortBatteryLife" class="power" id="shortBatteryLife" value="true"/>   
                    </li>
                    <li>
                        <label>Not Charging</label>
                        <input type="checkbox"  name="notCharging" class="power" id="notCharging" value="true"/>
                    </li>
                </ul>  
            </div>
    
        </fieldset>

        <fieldset id="speaker">
            <legend>Speaker</legend>
                <div>
                    <ul>
                        <li>
                            <label for="noSound">No Sound</label>
                            <input type="checkbox"  name="noSound" class="speaker" id="noSound" value="true"/>
                        </li>
                        <li>
                            <label for="distortedSound">Distorted Sound</label>
                            <input type="checkbox"  name="distortedSound" class="speaker" id="distortedSound" value="true"/>  
                        </li>
                        <li>
                            <label for="notRinging">Not Ringing</label>
                            <input type="checkbox"  name="notRinging" class="speaker" id="notRinging" value="true"/>  
                        </li>
                        </ul>
                </div>                         
        </fieldset>
    
        <fieldset id="network">
            <legend>Network</legend>
            <div>
                <ul>
                    <li>
                        <label for="noMobileNetwork">No Mobile Network</label>
                        <input type="checkbox"  name="noMobileNetwork" class="network" id="noMobileNetwork" value="true"/>
                    </li>
                    <li>
                        <label for="noWifiNetwork">No Wifi</label>
                        <input type="checkbox"  name="noWifiNetwork" class="network" id="noWifiNetwork" value="true"/>  
                    </li>
                    <li>
                        <label for="droppedCalls">Dropping Calls</label>
                        <input type="checkbox"  name="droppedCalls" class="network" id="droppedCalls" value="true"/>  
                    </li>
                    <li>
                        <label for="unableToCall">Unable to make calls</label>
                        <input type="checkbox"  name="unableToCall" class="network" id="unableToCall" value="true"/>  
                    </li>
                </ul> 
            </div>
                                
        </fieldset>
    
        <fieldset id="physicalDamage">
            <legend>Physical Damage</legend>
            <div>
                <ul>
                    <li>
                        <label for="faultyKeys">Faulty keys</label>
                        <input type="checkbox"  name="faultyKeys" class="physicalDamage" id="faultyKeys" value="true"/> 
                    </li>
                    <li>
                        <label for="crackedBody">Cracked Body</label>
                        <input type="checkbox"  name="crackedBody" class="physicalDamage" id="crackedBody" value="true"/> 
                    </li>
                </ul>
            </div>                    
        </fieldset>
    
        <fieldset id="Software">
            <legend>Software</legend>
                <div>
                    <ul>
                        <li>
                            <label for="slow" >Slow</label>
                            <input type="checkbox"  name="slow" class="software" id="slow" value="true"/> 
                        </li>
                        <li>
                            <label for="crashing">Crashing</label>
                            <input type="checkbox"  name="crashing" class="software" id="crashing" value="true"/> 
                        </li>
                        <li>
                            <label for="hanging">Hanging</label>
                            <input type="checkbox"  name="hanging" class="software"  id="hanging" value="true"/> 
                        </li>
                    </ul>
                </div>                 
        </fieldset>

    </fieldset>
</div>