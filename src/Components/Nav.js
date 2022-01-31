import React, {useState} from "react";
import { Link } from 'react-router-dom';

export const Nav = (props) => {
    const {userName, logout} = props;

    const [ isOpen, setOpen ] = useState(false);

    const toggleOpen = () => {
        setOpen(!isOpen);
    }

    return (
        <ul className="nav">
            <li className="list-item">
                
                <p className="user__name" onClick={(e) => toggleOpen() }>
                    <i className="fas fa-user-alt avatar"></i>
                    <span>{userName}</span>
                </p>
            
                <ul className={"drop-menu" + (isOpen ? " list__open" : "")} >
                    <li className="drop-item">
                        <Link to="/admin">
                            <p className="item">Administrator</p>
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
