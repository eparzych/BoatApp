import React from "react";
import {
    Link
  } from 'react-router-dom';

export const Nav = (props) => {
    const {userName} = props;

    return (
        <ul className="nav">
            <li className="list-item">
                <p className="user__name">
                    <i className="fas fa-user-alt avatar"></i>
                    <span>{userName}stefan</span>
                </p>
                <ul className="drop-menu menu-2">
                    <Link to="/" className="drop-item"><p className="item">Zmień hasło</p></Link>
                    <Link to="/" className="drop-item"><p className="item last">Wyloguj</p></Link>
                </ul>
            </li>
        </ul>
    )
}





