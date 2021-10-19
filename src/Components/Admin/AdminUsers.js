import React, { useState, useEffect } from "react";
import { AdminNavigation } from "./AdminNavigation.js";

export const AdminUsers = () => {

    return (
        <div className="wrapper__admin">
            <AdminNavigation />
            <div className="admin__users">
                <p>lista użytkowników</p>
            </div>
        </div>
    )
}