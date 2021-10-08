import React, { useState, useEffect } from "react";
import { Map } from "./Map.js";
import { Tools } from "./Tools.js";
import { Boats } from "./Boats.js";

export const Main = () => {
    const [boats, setBoats] = useState([]);
    
    useEffect(() => {
        fetch('/api/boats')
        .then(response => response.json())
        .then(data => setBoats(data));
        }, []);
    

    return (
        <>
            <Map boats={boats} />
            <Tools />
            <Boats boats={boats} />
        </>
    )
}
