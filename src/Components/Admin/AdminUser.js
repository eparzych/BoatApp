import React, {useState} from "react";


export const AdminUser = (props) => {
    const { user } = props;

    return (
        <li className="admin__list__item user">
            <p className="userName">Użytkownik {user.username}</p>
            <div className="btns">
            <button className="btn btn__delete">
                <i className="fas fa-user-times"></i>
                <span>Usuń</span>
            </button>
            <button className=" btn btn__reset">
                <i className="far fa-edit"></i>
                <span>Resetuj hasło</span>
            </button>
            </div>

        </li>
    )
}
