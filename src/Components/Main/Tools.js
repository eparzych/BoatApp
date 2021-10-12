import React from "react";

export const Tools = () => {

    return (
    <>
    <div className="sidebar">
        <ul className="nav-list">
            <li>
                <a href="#">
                    <i className='fas fa-draw-polygon'></i>
                    <span className="links_name">Zaznacz obszar sprzątania</span>
                </a>
                <span className="tooltip">Zaznacz obszar sprzątania</span>
            </li>
            <li>
            <a href="#">
                <i className='far fa-paper-plane' ></i>
                <span className="links_name">Dopłyń do celu</span>
            </a>
            <span className="tooltip">Dopłyń do celu</span>
            </li>
            <li>
            <a href="#">
                <i className='far fa-play-circle' ></i>
                <span className="links_name">Start</span>
            </a>
            <span className="tooltip">Start</span>
            </li>
            <li>
            <a href="#">
                <i className='far fa-stop-circle' ></i>
                <span className="links_name">Stop</span>
            </a>
            <span className="tooltip">Stop</span>
            </li>
            <li>
            <a href="#">
                <i className='fas fa-flag-checkered' ></i>
                <span className="links_name">Powrót do bazy</span>
            </a>
            <span className="tooltip">Powrót do bazy</span>
            </li>
            </ul>
        </div>
  </>
    )
}
