import React, {useState} from "react";


export const Boat = (props) => {
    const {boat, toggleCheckbox} = props;

    const [ isActive, setActive] = useState(false);

    function openAccordionItems () {
        setActive(!isActive);
    }

    return (
        <li className="accordion-box">
            <div className="accordion-item" onClick={openAccordionItems}>
                <button className="accordion-btn">
                    <div className="checkbox">
                        <input type="checkbox" 
                            key={boat.id}
                            onChange={(e) => toggleCheckbox(boat.id)} />
                    </div>
                    Łódka nr {boat.id} 
                </button>
                <div className="accordion-info" style={{display: isActive ? 'block' : 'none'}}>
                    <ul className="accordion-info-text">
                        <li>latitude: {boat.latitude}</li>
                        <li>longitude: {boat.longitude}</li>
                        <li>heading: {boat.heading}</li>
                    </ul>
                </div>
            </div>
        </li>
    )
}
