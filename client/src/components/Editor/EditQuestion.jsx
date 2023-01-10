import { Divider, Grid, Stack, TextField } from "@mui/material"
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

export const EditQuestion = (props) => {
    const { set, removeSet, idx, cardIdx, handleChange } = props;

    return (
        <Grid container sx={{mb: 1}}>
            <Grid item xs={11}>
                <Stack spacing={1}>
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
                    <Divider />
                </Stack>
            </Grid>
            <Grid item xs={1}>
                <BackspaceOutlinedIcon onClick={()=>removeSet(idx, cardIdx)}
                    sx={{ ml: 1}}
                />
            </Grid>
        </Grid>
    )
}