import React from "react";
import {
    Link,
    NavLink,
  } from 'react-router-dom';

export const Nav = (props) => {
    const {userName} = props;

    return (
        <nav className="nav">
            <a className="menu-items avatar"><i className="fas fa-user-alt"></i></a>
            <a className="menu-items">{userName}</a> 
        </nav>
    )
}




