import { Box, Button, Grid, Paper, Stack, TextField, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

export const EditCard = (props) => {
    const { addSet, card, children, handleChange, removeCard, idx} = props;

    return (
        <Paper 
            elevation={3}
            sx={{
                p: 2,
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                columnGap: 3
            }}>
                <Stack spacing={2} sx={{flexGrow: 1}}>
                    <Typography align='center' component='aside' variant='body2' sx={{fontSize: 12, color: 'text.secondary'}}>{`Card #${idx + 1}`}</Typography>
                    <TextField
                        label='Topic'
                        name='title'
                        onChange={(e)=>handleChange(e, idx)}
                        value={card.title}
                    />
                    {children}
                </Stack>

                <CloseIcon 
                    onClick={()=>removeCard(idx)}
                    sx={{
                        border: 2,
                        borderRadius: 1,
                        color: 'error.dark',
                        cursor: 'pointer'
                    }}
                />
            </Box>

            <Button size='small' variant='text' onClick={()=>addSet(idx)}>Add question set</Button>
        </Paper>
    )
}

{/* <Box 
                onClick={()=>removeCard(idx)}
                sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    width: 'auto',
                }}>
                <CloseIcon sx={{border: 1}}/>
            </Box> */}


{/* <Paper 
            elevation={3}
            sx={{
                p: 2,
            }}
        >
            <Grid container spacing={1}>
                <Grid item xs={11}>
                    <Stack spacing={2}>
                        <TextField
                            label='Title'
                            name='title'
                            onChange={(e)=>handleChange(e, idx)}
                            value={card.title}
                            fullWidth
                        />
                        {children}
                    </Stack>
                </Grid>
                <Grid item xs={1}>
                    <CloseIcon 
                        onClick={removeCard}
                        sx={{
                            border: 1,
                            borderRadius: 1,
                            color: 'error.dark',
                            cursor: 'pointer'
                        }}
                    />
                </Grid>
            </Grid>
            <Button size='small' variant='text' onClick={()=>addSet(idx)}>Add question set</Button>
            
        </Paper> */}