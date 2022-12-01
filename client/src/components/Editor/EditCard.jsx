import { Paper, TextField } from "@mui/material"

export const EditCard = (props) => {
    const {card, children, handleChange, idx} = props;

    return (
        <Paper elevation={3}>
            <TextField
                label='Title'
                name='title'
                onChange={(e)=>handleChange(e, idx)}
                value={card.title}
            />
            {children}
        </Paper>
    )
}