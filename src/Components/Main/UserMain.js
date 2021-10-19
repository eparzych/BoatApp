import React, { useState, useEffect } from "react";
import { Map } from "./Map.js";
import { Tools } from "./Tools.js";
import { Boats } from "./Boats.js";

export const UserMain = () => {
    const [boats, setBoats] = useState([]);
    
    useEffect(() => {
        fetch('/api/boats')
        .then(response => response.json())
        .then(data => setBoats(data));
        }, []);
    

    return (
        <div className="wrapper__user">
            <Map boats={boats} />
            <Tools />
            <Boats boats={boats} />
        </div>
    )
}
