import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

import { Button, Fab, Paper, Stack, TextField, Typography } from "@mui/material"

import PostAddIcon from '@mui/icons-material/PostAdd';

import { EditCard } from "./EditCard";
import { EditQuestion } from "./EditQuestion";


// factory functions required here to avoid pass-by-reference issues with the objects :)
const blankQAs = () => {
    return {
        q: '',
        a: ''
    }
}

const blankCard = () => {
    return {
        title: '',
        qas: [blankQAs()]
    }
}

export const Editor = (props) => {

    const { user, deck, mode } = props;
    const navigate = useNavigate();

    const { token } = useToken();

    const [form, setForm] = useState(deck);

    const addCard = () => {
        const data = [...form.cards, blankCard()]
        setForm({...form, cards: data})
    }

    const removeCard = (idx) => {
        const data = [...form.cards];
        data.splice(idx, 1);
        setForm({...form, cards: data});
    }

    const addSet = (cardIdx) => {
        const data = [...form.cards]
        data[cardIdx].qas.push(blankQAs())
        setForm({...form, cards: data})
    }

    const removeSet = (idx, cardIdx) => {
        const data = [...form.cards];
        data[cardIdx].qas.splice(idx, 1)
        setForm({...form, cards: data})
    }

    const handleChangeDeck = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleChangeCard = (e, idx) => {
        let data = [...form.cards];
        data[idx][e.target.name] = e.target.value;
        setForm({...form, cards: data});
    }

    const handleChangeSet = (e, idx, cardIdx) => {
        let data = [...form.cards];
        data[cardIdx].qas[idx][e.target.name] = e.target.value;
        setForm({...form, cards: data})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        
        // mode is 'create' insert new record. 'update' ditto
        await fetch(`/deck/${mode}/${user.id}`,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(form)
        })
        .then(res => navigate('/'));
    }

    
    return (
        <Paper elevation={3} sx={{
            mx: { xs: 1, sm: 'auto'},
            p: 3,
            width: { xs: 'auto', sm: '75%'},
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // gap: 1
        }}>
            <Typography align='center' component='h1' variant='h4' sx={{ mb: 2}}>Deck Editor</Typography>
            {/* *** DESKTOP ICON *** */}
            <Fab 
                variant='extended'
                onClick={addCard}
                sx={{
                    display: { xs: 'none', sm: 'flex'},
                    position: 'fixed',
                    right: 16,
                    top: 95
                }}
            >
                <PostAddIcon />
                Add Card
            </Fab>
            {/* *** MOBILE ICON *** */}
            <Fab 
                onClick={addCard}
                size='small'
                sx={{
                    display: { xs: 'flex', sm: 'none'},
                    position: 'fixed',
                    right: 16,
                    top: 75
                }}
            >
                <PostAddIcon />
            </Fab>
            <form onSubmit={onSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label='Deck Name'
                        name='title'
                        onChange={handleChangeDeck}
                        value={form.title}
                    />
                    <TextField
                        label='Description'
                        name='desc'
                        onChange={handleChangeDeck}
                        value={form.desc}
                    />
                    {form.cards.map((card, idx)=> (
                        <EditCard
                            key={idx}
                            card={card}
                            handleChange={handleChangeCard}
                            removeCard={removeCard}
                            addSet={addSet}
                            idx={idx}
                        >
                            <Stack spacing={1}>
                                {card.qas.map((set, setIdx) => (
                                    <EditQuestion
                                        key={setIdx}
                                        set={set}
                                        addSet={addSet}
                                        removeSet={removeSet}
                                        handleChange={handleChangeSet}
                                        idx={setIdx}
                                        cardIdx={idx}
                                    />
                                ))}
                            </Stack>
                        </EditCard>
                    ))}
                    <Button variant='contained' type='submit'>submit</Button>
                    <Button onClick={()=>navigate('/')}>Cancel</Button>
                </Stack>
            </form>
        </Paper>
    )
}