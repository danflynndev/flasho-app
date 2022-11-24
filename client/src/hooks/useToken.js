/* expects format: {token: token} */

import { useState } from 'react';

export default function useToken() {
    
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        // console.log(userToken);
        return userToken?.token;
    }
    
    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        if (userToken) {
            localStorage.setItem('token', JSON.stringify( userToken.token ))
            setToken(userToken.token);
        } else {
            // by passing nothing to the setToken hook, triggers a log out.
            localStorage.clear();
            setToken('')
        }
      }
    
    return {
        setToken: saveToken,
        token
    }
}