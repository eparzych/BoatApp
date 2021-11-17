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

    return (
        <>
        <div className="sidebar__open" onClick={() => setOpen(true)}>
            <i className="fas fa-chevron-left"></i>
        </div>
        <div className={"boats" + (isOpen ? " open" : "")}>
            <div className="boatsTitle">
                <i className="far fa-times-circle escape" onClick={() => setOpen(false)}></i>
                <span className="title">Boats</span>
            </div>
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


