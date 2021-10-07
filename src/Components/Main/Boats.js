import React, { useState, useEffect } from "react";
import "./Boats.scss";

export const Boats = () => {
    const [boats, setBoats] = useState([]);
    
    useEffect(() => {
        fetch('/api/boats')
        .then(response => response.json())
        .then(data => setBoats(data));
        }, []);
    
    return (
        <div className="boats">
            <h1>Boats</h1>
            <pre>{JSON.stringify(boats, null, 4)}</pre>
        </div>
    )
}