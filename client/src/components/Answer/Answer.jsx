import { ListItem } from "@mui/material"
import { useState } from "react"

export const Answer = (props) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const question = props.set.q;
    const answer = props.set.a;

    const handleClick = (e) => {
        if (isRevealed) {
            setIsRevealed(false);
        } else {
            setIsRevealed(true);
        }
    }

    return (
        <ListItem onClick={handleClick}>{isRevealed ? answer : question}</ListItem>
    )
}