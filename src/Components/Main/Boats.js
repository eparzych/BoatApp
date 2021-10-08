import React, { useState, useEffect } from "react";
import { Boat } from "./Boat";

export const Boats = (props) => {
    const { boats } = props;

    return (
        <div className="boats">
            <h1>Boats</h1>
            <ul className="boatsList">
                {boats.map(boat =>
                    <Boat
                        key={boat.id}
                        boat={boat} />
                )}
            </ul>

        </div>
    )
}