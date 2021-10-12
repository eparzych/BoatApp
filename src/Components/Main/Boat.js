import React, {useState} from "react";

export const Boat = (props) => {
    const {boat} = props;

    const [ isActive, setActive] = useState(false);

    function openAccordionItems () {
        setActive(!isActive);
    }

    return (
        <li className="accordion-box">
            <button className="accordion-btn" onClick={openAccordionItems}>
                <i className="fas fa-check"></i>
                Łódka nr {boat.id} 
            </button>
            <div className="accordion-info" style={{display: isActive ? 'block' : 'none'}}>
                <p className="accordion-info-text">Dane konkretnej łódki</p>
            </div>
        </li>
    )
}