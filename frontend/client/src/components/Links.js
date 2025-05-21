import React from "react";
import {Navigate} from 'react-router-dom';
import {PUBLIC_ROUTES, PRIVATE_ROUTES} from "../routes.js";

export function ProtectedRoute({children}) {
    const userID = localStorage.getItem("user_id")
    return userID ? children : <Navigate to = "/login" />;
}

export function NotFoundPage() {
    return <h1>404 – Page Not Found</h1>;
}
