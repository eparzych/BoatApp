import React, { useState, useEffect } from "react";
import { AdminNavigation } from "./AdminNavigation.js"
import { AdminBoat } from "./AdminBoat.js";


export const AdminBoats = (props) => {

    const [boats, setBoats] = useState([]);
    
    useEffect(() => {
        fetch('/api/boats')
        .then(response => response.json())
        .then(data => setBoats(data));
        }, []);
    

    return (
    <div className="wrapper__admin">
        <AdminNavigation />
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
    )
}