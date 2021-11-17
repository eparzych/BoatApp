import React, { useState, useEffect } from "react";
import { AdminNav } from "./AdminNav.js";
import { AdminTools } from "./AdminTools.js"
import { AdminBoat } from "./AdminBoat.js";


export const AdminBoats = (props) => {
    const {userName, logout} = props;
    const [boats, setBoats] = useState([]);
    
    const getBoats = () => {
        fetch('/api/boats')
        .then(response => response.json())
        .then(data => setBoats(data));
    }

    useEffect(getBoats, []);

    const buttonDelete = (id) => {

        fetch('/api/boats/' + id, {
            method: "DELETE"
        })
            .then(response => {
                getBoats();
                console.log(response.ok);
            })
            .catch(error => {
            console.log(error);
            });
    };
    
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
                                boat={boat}
                                onDelete={buttonDelete} />
                        )}
                </ul>
            </div>
        </div>
    </div>
    )
}