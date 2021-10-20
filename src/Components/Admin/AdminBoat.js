import React, {useState} from "react";


export const AdminBoat = (props) => {
    const {boat} = props;

    return (
        <li className="admin__list__item">
            Łódka nr {boat.id}
        </li>
    )
}
