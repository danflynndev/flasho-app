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
        localStorage.setItem('token', JSON.stringify( userToken ))
        setToken(userToken.token);
      }

    const clearToken = () => {
        localStorage.removeItem('token');
        setToken(getToken())
    }
    
    return {
        setToken: saveToken,
        clearToken: clearToken,
        token
    }
}