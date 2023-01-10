import { Box, Button, Divider, List, Paper, Typography } from "@mui/material";
import { Answer } from "../Answer/Answer";

export const Card = (props) => {
    const { card, cardIdx, deckSize, handleCardChange } = props;

    const handleNavClick = (e) => {
        handleCardChange(e.target.value);
    }

    return (
        <Paper elevation={3}
            sx={{
                width: {xs: 'auto', sm: '80%'},
                py: 1,
                px: 3,
            }}>
            <Typography align='right' component='aside' variant='body2' sx={{fontSize: 10, color: 'text.secondary'}}>{`${cardIdx + 1}/${deckSize}`}</Typography>
            <Typography align='center' variant='h6'>{card.title}</Typography>
            <Divider />
            <List sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {card.qas.map(set => <Answer key={set.a} set={set} />)}
            </List>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Button size='small' variant='text' onClick={handleNavClick}>Prev</Button>
                <Button size='small' variant='text' onClick={handleNavClick} value={true}>Next</Button>
            </Box>
        </Paper>

    )
}