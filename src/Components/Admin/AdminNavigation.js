import React from "react";
import {
    Link,
    NavLink,
  } from 'react-router-dom';

export const AdminNavigation = () => {
    return (
    <nav className="nav__admin">
        <NavLink to = "/admin" activeClassName = "active__nav__elem" className = "nav__elem">Home</NavLink>
        <NavLink to = "/admin/boats" activeClassName = "active__nav__elem" className = "nav__elem">Lista łódek</NavLink>
        <NavLink to = "/admin/users" activeClassName = "active__nav__elem" className = "nav__elem">Użytkownicy</NavLink>
    </nav>
    )
}
