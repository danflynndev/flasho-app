import { useState } from "react";
import { Editor } from "./Editor";

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


export const EditorBlankContainer = props => {

    const [deck, setDeck] = useState({...blankDeck})

    return (
        <Editor deck={deck} mode='create' user={user} />
    )
}