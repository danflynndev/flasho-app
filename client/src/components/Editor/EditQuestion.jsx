import { Grid, TextField } from "@mui/material"
import CloseIcon  from "@mui/icons-material/Close";
import AddIcon from '@mui/icons-material/Add';


export const EditQuestion = (props) => {
    const { set, addSet, removeSet, idx, cardIdx, handleChange } = props;

    return (
        <Grid>
            <TextField 
                label='Question'
                name='q'
                onChange={(e)=>handleChange(e, idx, cardIdx)}
                value={set.q}
            />
            <TextField
                label='Answer'
                name='a'
                onChange={(e)=>handleChange(e, idx, cardIdx)}
                value={set.a}
            />
            <AddIcon onClick={()=>addSet(cardIdx)} />
            <CloseIcon onClick={()=>removeSet(idx, cardIdx)}/>
        </Grid>
    )
}