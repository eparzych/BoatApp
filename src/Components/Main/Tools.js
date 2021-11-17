import React from "react";

export const Tools = (props) => {
    const { activeTool, setActiveTool } = props;

    const onClick = (e) => {
        setActiveTool(e.currentTarget.id);
    }

    const isActive = (id) => {
        return activeTool == id;
    }

    return (
    <div className="sidebar">
        <ul className="nav-list">
            <li id="clean-area" className={isActive("clean-area") ? "activeTool" : ""} onClick={onClick}>
                <i className='fas fa-draw-polygon'></i>
                <span className="tooltip">Zaznacz obszar sprzątania</span>
            </li>
            <li id="run" className={isActive("run") ? "activeTool" : ""} onClick={onClick}>
                <i className='far fa-paper-plane' ></i>
                <span className="tooltip">Dopłyń do celu</span>
            </li>
            <li id="start" className={isActive("start") ? "activeTool" : ""} onClick={onClick}>
                <i className='far fa-play-circle' ></i>
                <span className="tooltip">Start</span>
            </li>
            <li id="stop" className={isActive("stop") ? "activeTool" : ""} onClick={onClick}>
                <i className='far fa-stop-circle' ></i>
                <span className="tooltip">Stop</span>
            </li>
            <li id="return" className={isActive("return") ? "activeTool" : ""} onClick={onClick}>
                <i className='fas fa-flag-checkered' ></i>
                <span className="tooltip">Powrót do bazy</span>
            </li>
        </ul>
    </div>
    )
}
