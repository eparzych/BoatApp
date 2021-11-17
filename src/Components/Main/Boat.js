import React, {useState} from "react";


export const Boat = (props) => {
    const {boat, toggleCheckbox} = props;

    const [ isActive, setActive] = useState(false);

      

    function openAccordionItems () {
        setActive(!isActive);
    }

    return (
        <li className="accordion-box">
            <div className="checkbox">
                <input type="checkbox" 
                    key={boat.id}
                    onChange={(e) => toggleCheckbox(boat.id)} />
            </div>
            <div className="accordion-item" onClick={openAccordionItems}>
                <button className="accordion-btn">
                    Łódka nr {boat.id} 
                </button>
                <div className="accordion-info" style={{display: isActive ? 'block' : 'none'}}>
                    <ul className="accordion-info-text">
                        <li>altitude: {boat.altitude}</li>
                        <li>batteryCurrent: {boat.batteryCurrent}</li>
                        <li>batterySoc: {boat.batterySoc}</li>
                        <li>batteryVoltange: {boat.batteryVoltange}</li>
                        <li>distanceSensorLeft: {boat.distanceSensorLeft}</li>
                        <li>distanceSensorRight: {boat.distanceSensorRight}</li>
                        <li>groundspeed: {boat.groundspeed}</li>
                        <li>latitude: {boat.latitude}</li>
                        <li>longitude: {boat.longitude}</li>
                        <li>pitch: {boat.pitch}</li>
                        <li>roll: {boat.roll}</li>
                        <li>temp1: {boat.temp_1}</li>
                        <li>temp2: {boat.temp_2}</li>
                        <li>updateTime: {boat.updateTime}</li>
                        <li>vaw: {boat.vaw}</li>
                    </ul>
                </div>
            </div>

        </li>
    )
}
