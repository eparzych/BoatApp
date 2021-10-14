import React, { useState, useEffect } from "react";
import { Boat } from "./Boat";


export const Boats = (props) => {
    const { boats } = props;

    const [ isOpen, setOpen ] = useState(false);

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
                            boat={boat} />
                    )}
            </ul>
        </div>
    </>
    )
}


