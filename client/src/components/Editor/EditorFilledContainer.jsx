import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Editor } from "./Editor";
import { Spinner } from "../Spinner/Spinner";

const blankDeck = {
    title: '',
    desc: '',
    cards: [
        {
            title: '',
            qas: [
                {
                    q: '',
                    a: ''
                }
            ]
        }
    ]
}

export const EditorFilledContainer = props => {
    const { deckId } = useParams();
    const { user } = props;

    const [deck, setDeck] = useState({...blankDeck});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)

        const fetchData = async () => {
            const result = await fetch(`/deck/${user.id}/${deckId}`)
            .then(res => res.json())
            .then(data => data.decks[0])

            setDeck(result);
            setIsLoading(false);
        }
        fetchData()
        .catch(console.error);

    }, [deckId, user.id])

    return (
        isLoading ? (
            <Spinner />
        ) : (
            <Editor deck={deck} mode='update' user={user} />
        )
    )
}