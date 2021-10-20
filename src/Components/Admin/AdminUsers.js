import React, { useState, useEffect } from "react";
import { AdminNavigation } from "./AdminNavigation.js";

export const AdminUsers = () => {

    return (
        <div className="wrapper__admin">
            <AdminNavigation />
            <div className="admin__main">
                <h1 className="admin__title">Lista użytkowników</h1>
                <ul className="admin__list">
                    <p className="admin__list__item">lista użytkowników</p>
                </ul>
            </div>
        </div>
    )
}