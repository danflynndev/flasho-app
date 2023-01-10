import { useEffect, useState } from "react";
import { Dashboard } from "./Dashboard"
import { Spinner } from "../Spinner/Spinner";

const emptyDeckData = {
    decks: [{
        _id: '',
        title: '',
        cards: [{
            title: '',
            qas:[{
                q: '',
                a: ''
            }]
        }]
    }]
}


export const DashboardContainer = (props) => {
    const { user } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [deckData, setDeckData] = useState(emptyDeckData);

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

    }, [user.id])

    return (
        isLoading ? <Spinner /> : <Dashboard deckData={deckData} />
    )
}