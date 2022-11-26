import { Navigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect, useState, cloneElement } from "react";


export const RequireAuth = props => {
    const { children, token } = props;
    const location = useLocation();
    
    let user = {
        email: '',
        id: '',
        iat: 0,
        exp: 0,
    } 
    let authed = false;

    try {
        user = jwt_decode(token)
        // jwt_decode(token)
        authed = true;
    } catch (err) {
        console.log(err)
        authed = false;
    }
    
    console.log(authed)
    return authed ? (
        cloneElement(children, { user })
    ) : (
        <Navigate to="/" replace state={{ path: location.pathname }} />
    )
}