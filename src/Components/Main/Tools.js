import React, { useEffect } from "react";

export const Tools = (props) => {
    const { activeTool, setActiveTool } = props;

    const onClick = (e) => {
        setActiveTool(e.currentTarget.id);
    }

    useEffect(() => {
        fetch('/api/' + activeTool, {
            method: "POST"
        });
    }, [activeTool]);

    const isActive = (id) => {
        return activeTool == id;
    }

    return (
    <div className="sidebar">
        <ul className="nav-list">
            <li id="target" className={isActive("target") ? "activeTool" : ""} onClick={onClick}>
                <i className='far fa-paper-plane' ></i>
                <span className="tooltip">Zaznacz cel płynięcia</span>
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
