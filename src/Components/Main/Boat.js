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
                    <p className="accordion-info-text">Dane konkretnej łódki</p>
                </div>
            </div>

        </li>
    )
}
