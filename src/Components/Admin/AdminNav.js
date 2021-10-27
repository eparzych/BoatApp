import React, {useState} from "react";
import {
    Link
  } from 'react-router-dom';

export const AdminNav = (props) => {
    const {userName, logout} = props;

    const [ isOpen, setOpen ] = useState(false);

    const toggleOpen = () => {
        setOpen(!isOpen);
    }

    return (
        <ul className="admin__nav">
            <li className="list-item">
                
                <p className="user__name" onClick={(e) => toggleOpen() }>
                    <i className="fas fa-user-alt avatar"></i>
                    <span>{userName}</span>
                </p>
            
                <ul className={"drop-menu menu-2" + (isOpen ? " list__open" : "")} >
                    <li className="drop-item">
                        <Link to="/">
                            <p className="item">Mapa</p>
                        </Link>
                    </li>
                    <li className="drop-item">
                        <Link to="/reset" >
                            <p className="item">Zmień hasło</p>
                        </Link>
                    </li>
                    <li className="drop-item" onClick={logout}>
                        <p className="item last">Wyloguj</p>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

// <li class="list-item">
//     <a href="#" class="kabobs item--js">
//       <span>KaBoBs</span>
//       <img src="https://res.cloudinary.com/elafreet/image/upload/v1530189897/cooking1.svg" alt="">
//     </a>
//     <ul class="drop-menu menu-2">
//       <li class="drop-item"><a href="#" class="item--1">Shish Kabobs</a></li>
//       <li class="drop-item"><a href="#" class="item--2">BBQ Kabobs</a></li>
//       <li class="drop-item"><a href="#" class="item--3">Summer Kabobs</a></li>
//     </ul>
//   </li>





