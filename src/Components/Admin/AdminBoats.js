import React, { useState, useEffect } from "react";
import { AdminBoat } from "./AdminBoat";


export const AdminBoats = (props) => {

    const [boats, setBoats] = useState([]);
    
    useEffect(() => {
        fetch('/api/boats')
        .then(response => response.json())
        .then(data => setBoats(data));
        }, []);
    

    return (
    <>
        <h1 className="boatsTitle">Boats</h1>
        <ul className="boatsList">
                {boats.map(boat =>
                    <AdminBoat
                        key={boat.id}
                        boat={boat} />
                )}
        </ul>
    </>
    )
}