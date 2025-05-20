import React from "react";
import {Navigate} from 'react-router-dom';
import {PUBLIC_ROUTES, PRIVATE_ROUTES} from "../routes.js";

export function ProtectedRoute({children}) {
    const userID = localStorage.getItem("user_id")
    return userID ? children : <Navigate to = "/login" />;
}

export function VerifiedLink({ to, children, ...props }) {
    if (!Object.values(PUBLIC_ROUTES).includes(to) && !Object.values(PRIVATE_ROUTES).includes(to)) {
        console.error(`Invalid route: ${to}`);
        return null;
    }

    return <Link to={to} {...props}>{children}</Link>;
}