import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { cloneElement } from "react";

export const RequireAuth = props => {
    const { children, token, clearToken } = props;
    // const location = useLocation();

    let user = {
        email: '',
        id: '',
        iat: 0,
        exp: 0,
    }
    let authed = false;

    try {
        user = jwt_decode(token)
        const isExpired = (user.exp * 1000) < Date.now();
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
        <Navigate to="/" replace />
    )
}

// this can be used to preserve the users navigation in the event of a timeout. not using here due to small size of app, general irrelevance.
/* <Navigate to="/" replace state={{ path: location.pathname }} /> */
