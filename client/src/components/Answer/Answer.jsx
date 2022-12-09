import { Box, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import './Answer.css';

export const Answer = (props) => {
    const { set } = props;
    const [isRevealed, setIsRevealed] = useState(false);

    const question = set.q;
    const answer = set.a;

    const handleClick = (e) => {
        e.target.classList.add('transition')
        setTimeout(() => {
            e.target.classList.remove('transition');
            if (isRevealed) {
                setIsRevealed(false);
            } else {
                setIsRevealed(true);
            }
        }, 150)
    }

    return (
        <ListItem >
            <Box 
                className='answer' onClick={handleClick}
                sx={{
                    mx: 'auto',
                    border: '1px solid lightgrey',
                    borderRadius: 1,
                    p: 1,
                    cursor: 'pointer'
                }}>
                {isRevealed ? answer : question}
            </Box>
        </ListItem>
    )
}