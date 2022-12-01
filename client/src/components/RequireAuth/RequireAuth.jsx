import { Navigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { cloneElement } from "react";

export const RequireAuth = props => {
    const { children, token, clearToken } = props;
    const location = useLocation();
    
    let user = {
        email: '',
        id: '',
        iat: 0,
        exp: 0,
    } 
    let authed = false;

    try {
        console.log(token)
        user = jwt_decode(token)
        const isExpired = (user.exp * 1000) < Date.now();
        console.log(isExpired, user.exp*1000, Date.now())
        if (isExpired) {
            clearToken();
            authed = false;
        } else {
            authed = true;
        }
    } catch (err) {
        console.log(err)
        authed = false;
    }

    
    return authed ? (
        cloneElement(children, { user })
    ) : (
        <Navigate to="/" replace state={{ path: location.pathname }} />
    )
}