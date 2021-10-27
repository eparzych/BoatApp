import React, { useState, useEffect } from "react";
import { AdminNav } from "./AdminNav.js";
import { AdminTools } from "./AdminTools.js"
import { AdminBoat } from "./AdminBoat.js";


export const AdminBoats = (props) => {
    const {userName, logout} = props;
    const [boats, setBoats] = useState([]);
    
    useEffect(() => {
        fetch('/api/boats')
        .then(response => response.json())
        .then(data => setBoats(data));
        }, []);
    

    return (
    <div className="container__admin">
        <AdminNav userName={userName} logout={logout} />
        <div className="wrapper__admin">
            <AdminTools />
            <div className="admin__main">
                <h1 className="admin__title">Lista łódek</h1>
                <ul className="admin__list">
                        {boats.map(boat =>
                            <AdminBoat
                                key={boat.id}
                                boat={boat} />
                        )}
                </ul>
            </div>
        </div>
    </div>
    )
}