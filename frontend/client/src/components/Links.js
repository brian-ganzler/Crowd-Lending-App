import React from "react";
import {Navigate} from 'react-router-dom';

export default function ProtectedRoute({children}) {
    const userID = localStorage.getItem("user_id")
    return userID ? children : <Navigate to = "/login" />;
}