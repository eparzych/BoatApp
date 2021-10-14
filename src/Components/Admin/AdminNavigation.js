import React from "react";
import {
    Link,
    NavLink,
  } from 'react-router-dom';

export const AdminNavigation = () => {
    return (
    <nav className="nav">
        <div className="navbar-nav">
            <NavLink to = "/admin" activeClassName = "active__nav__elem" className = "nav__elem">Home</NavLink>
            <NavLink to = "/adminboats" activeClassName = "active__nav__elem" className = "nav__elem"> Lista łódek</NavLink>
            <NavLink to = "/adminusers" activeClassName = "active__nav__elem" className = "nav__elem">Użytkownicy</NavLink>
        </div>
    </nav>
    )
}