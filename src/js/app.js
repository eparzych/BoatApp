import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Map from "./map.js"

const App = () => {
    const [boats, setBoats] = useState([]);

    useEffect(() => {
        fetch('/api/boats')
              .then(response => response.json())
              .then(data => setBoats(data));
    }, []);

    return (
    <>
        <h1>Boats</h1>
        <pre>{JSON.stringify(boats, null, 4)}</pre>
        <Map />
    </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
