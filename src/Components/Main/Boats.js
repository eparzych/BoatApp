import React, { useState } from "react";
import { Boat } from "./Boat";


export const Boats = (props) => {
    const { boats } = props;

    const [ checkedBoats, setCheckedBoats ] = useState(new Set());
    const [ isOpen, setOpen ] = useState(false);

    const toggleCheckbox = (boatId) => {
        setCheckedBoats(prevChecked => {
            const newChecked = new Set(prevChecked);
            if (newChecked.has(boatId)) {
                newChecked.delete(boatId);
            } else {
                newChecked.add(boatId);
            }
            return newChecked;
        });
    } 
console.log(checkedBoats);

    const toggleComponent = () => {
        setOpen(!isOpen);
    }

    return (
        <>
        <div className="toggle_component" onClick={toggleComponent} />
        <div className={"boats" + (isOpen ? " open" : "")}>
            <h1 className="boatsTitle">Boats</h1>
            <ul className="boatsList">

                    {boats.map(boat =>
                        <Boat
                            key={boat.id}
                            boat={boat} 
                            toggleCheckbox={toggleCheckbox}/>
                    )}
            </ul>
        </div>
    </>
    )
}


