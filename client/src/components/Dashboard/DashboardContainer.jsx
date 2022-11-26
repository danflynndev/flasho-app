import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken"
import { Dashboard } from "./Dashboard"

const emptyDeckData = {
    decks: [{
        _id: 0,
        title: '',
        cards: [{
            _id: 0,
            title: '',
            qas:[{
                _id: 0,
                q: '',
                a: ''
            }]
        }]
    }]
}


export const DashboardContainer = (props) => {
    const { user } = props;
    const navigate = useNavigate();
    // const {token, setToken} = useToken();
    // const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
    // const [user, setUser] = useState(jwt_decode(token));
    const [isLoading, setIsLoading] = useState(false);
    const [deckData, setDeckData] = useState(emptyDeckData);


    console.log(user, deckData, 'dashboard')
    useEffect(() => {
        setIsLoading(true)

        const fetchData = async () => {
            const result = await fetch(`deck/${user.id}`)
            .then(res => res.json())
            
            setDeckData(result)
            setIsLoading(false);
        }
        fetchData()
        .catch(console.error)
    
    }, [])
    
    

    return (
        isLoading ? <p>Loading</p> : <Dashboard deckData={deckData} />
    )
}