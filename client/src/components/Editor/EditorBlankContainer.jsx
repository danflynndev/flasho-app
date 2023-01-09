import { useState } from "react";
import { Editor } from "./Editor";


// const blankQAs = () => {
//     return {
//         q: '',
//         a: ''
//     }
// }

// const blankCard = () => {
//     return {
//         title: '',
//         qas: [blankQAs()]
//     }
// }

// const blankDeck = () => {
//     return {
//         title: '',
//         desc: '',
//         cards: [blankCard()]
//     }
// }

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
        <Editor deck={deck} mode='create' />
    )
}