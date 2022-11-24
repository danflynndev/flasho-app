import { useState } from "react";
import jwt_decode from "jwt-decode";
import { Button, Fab, Paper, TextField, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { Stack } from "@mui/system"
import { EditCard } from "./EditCard";
import { EditQuestion } from "./EditQuestion";
import useToken from "../../hooks/useToken";

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
        desc: '',
        qas: [blankQAs()]
    }
}

export const Editor = (props) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')))

    const [user, setUser] = useState(jwt_decode(token));
console.log(user);
    const [form, setForm] = useState({
        title: '',
        cards: [blankCard()]
    });

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
        // assign _ids to everything here
        form.cards.forEach((card, idx) => {
            card._id = idx;
            card.qas.forEach((set, setIdx) => {
                set._id = setIdx
            })
        })
        console.log(form)
        const result = await fetch(`/deck/create/${user.id}`,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(form)
        })
    }

    return (
        <>
            <Typography>Editor!</Typography>
            <Button onClick={addCard}>Add Card</Button>
            <form onSubmit={onSubmit}>
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
                <Stack spacing={2}>
                    {form.cards.map((card, idx)=> (
                        <EditCard
                        key={idx}
                        card={card}
                        handleChange={handleChangeCard}
                        idx={idx}
                        >
                            <Fab size='small' onClick={(idx)=>removeCard(idx)}>
                                <CloseIcon />
                            </Fab>
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
                                    >
                                    </EditQuestion>
                                ))}
                            </Stack>
                        </EditCard>
                    ))}
                    <Button type='submit'>submit</Button>

                </Stack>
            </form>
        </>
    )
}