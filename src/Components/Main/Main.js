import React, { useState, useEffect } from "react";
import { Nav } from '../Nav.js';
import { Map } from "./Map.js";
import { Tools } from "./Tools.js";
import { Boats } from "./Boats.js";

export const Main = (props) => {
    const {userName, logout} = props;
    const [boats, setBoats] = useState([]);
    const [activeTool, setActiveTool] = useState("");
    
    useEffect(() => {
        fetch('/api/boats')
        .then(response => response.json())
        .then(data => setBoats(data));
        }, []);

    return (
        <div className="container__user">
            <Nav userName={userName} logout={logout}  />
            <div className="wrapper__user">
                <Map boats={boats} />
                <Tools activeTool={activeTool} setActiveTool={setActiveTool} />
                <Boats boats={boats} />
            </div>
        </div>
    )
}
