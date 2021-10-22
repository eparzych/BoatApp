import React from "react";
import {
    Link
  } from 'react-router-dom';

export const Nav = (props) => {
    const {userName, logout} = props;

    return (
        <ul className="nav">
            <li className="list-item">
                <p className="user__name">
                    <i className="fas fa-user-alt avatar"></i>
                    <span>{userName}</span>
                </p>
                <ul className="drop-menu menu-2">
                    <li><Link to="/reset" className="drop-item"><p className="item">Zmień hasło</p></Link></li>
                    <li className="drop-item" onClick={logout}><p className="item last">Wyloguj</p></li>
                </ul>
            </li>
        </ul>
    )
}





