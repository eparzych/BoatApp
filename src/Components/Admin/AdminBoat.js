import React, {useState} from "react";


export const AdminBoat = (props) => {
    const {boat} = props;

    return (
        <li className="">
            Łódka nr {boat.id};
        </li>
    )
}
