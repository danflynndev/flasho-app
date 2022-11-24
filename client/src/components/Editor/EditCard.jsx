import { Hidden, Paper, TextField, Typography } from "@mui/material"


export const EditCard = (props) => {
    const {card, children, handleChange, idx} = props;

    return (
        <Paper elevation={3}>
            {/* <Hidden xsUp>
                <TextField 
                    name='_id'
                    type='number'
                    onChange={(e)=>handleChange(e, idx)}
                    value={idx}
                    hidden={true}
                />
            </Hidden> */}
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