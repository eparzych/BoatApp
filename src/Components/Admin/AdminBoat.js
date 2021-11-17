import React, {useState} from "react";

export const AdminBoat = (props) => {
    const {boat, onDelete} = props;

    return (
        <li className="admin__list__item boat">
            <p>Łódka nr {boat.id}</p>
            <button className="btn btn__delete"
                    onClick={ () => onDelete(boat.id) }>
                <i className="fas fa-trash-alt"></i>
                <span>Usuń</span>
            </button>
        </li>
    )
}
