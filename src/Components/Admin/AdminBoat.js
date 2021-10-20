import React, {useState} from "react";


export const AdminBoat = (props) => {
    const {boat} = props;

    return (
        <li className="admin__list__item">
            <p>Łódka nr {boat.id}</p>
            <button className="btn__delete">
                <i class="fas fa-trash-alt"></i>Usuń
            </button>
        </li>
    )
}
