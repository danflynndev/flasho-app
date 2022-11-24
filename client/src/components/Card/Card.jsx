import { useState } from "react";
import { Button, List, ListItem, Typography } from "@mui/material";
import { Answer } from "../Answer/Answer";


export const Card = (props) => {
    const { card, handleCardChange } = props;

    const handleNavClick = (e) => {
        handleCardChange(e.target.value);
    }

    return (
        <>
            <Typography>{card.title}</Typography>
            <List>
                {card.qas.map(set => <Answer key={set._id} set={set} />)}
            </List>
            <Button onClick={handleNavClick}>Prev</Button>
            <Button onClick={handleNavClick} value={true}>Next</Button>
        </>
    )
}