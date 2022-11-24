import { useState } from 'react';
import jwt_decode, { InvalidTokenError } from "jwt-decode";



export default function useAuth () {
    const [authed, setAuthed] = useState(false);

    return {
        authed,
        login() {

        },
        logout() {

        },
        verifyToken(token) {
            return new Promise((res, rej) => {
                try {
                    const user = jwt_decode(token)
                    setAuthed(true)
                    res(user)
                } catch (err) {
                    setAuthed(false)
                    rej(err)
                }
            })
        }
    }
}