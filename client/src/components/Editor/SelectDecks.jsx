import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { DeleteModal } from "./DeleteModal";
import { Spinner } from "../Spinner/Spinner";



export const SelectDecks = (props) => {
    const navigate = useNavigate();
    const { user } = props;
    const { token } = useToken();
    const [isLoading, setIsLoading] = useState(false);
    const [userDecks, setUserDecks] = useState([])

    useEffect(() => {
        setIsLoading(true)

        const fetchData = async () => {
            const result = await fetch(`deck/${user.id}`)
            .then(res => res.json())
            
            setUserDecks([...result.decks])
            setIsLoading(false);
        }
        fetchData()
        .catch(console.error)
    }, [user.id])

    const handleEditClick = async (e, deck) => {
        console.log(e.target, deck)
        navigate(`/edit/${e.target.value}`, {state: deck}, {replace: false} )
    }

    const handleDeleteClick = async (e, deckId) => {
        handleModalClose();
        setIsLoading(true);
        const body = {
            userId: user.id,
            deckId: deckId
        }

        await fetch('/deck/delete', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })
        .then(res => {console.log(res); return res.json()})
        .then(data => {
            console.log(data)
            setUserDecks([...data.decks])
            setIsLoading(false)
        })
    }

    /* *** MODAL *** */
    const [modalOpen, setModalOpen] = useState(false)
    const [toDelete, setToDelete] = useState({deckId: '', deckName: ''})
    const handleModalOpen = (deck) => {
        setToDelete({deckId: deck?._id, deckName: deck?.title})
        console.log(toDelete)
        setModalOpen(true);
    }
    const handleModalClose = () => {
        setModalOpen(false);
    }


    return isLoading ? (
        <Spinner />
    ) : (
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            flexWrap: { xs: 'nowrap', sm: 'wrap' },
        }}>
            
            {userDecks.map(deck => (
                <Card
                    key={deck._id} 
                    variant='outlined'
                    sx={{
                        boxShadow: 3,
                        mx: 2,
                        my: 1,
                        minWidth: { xs: 'auto', sm: 350 },
                        maxWidth: 350
                    }}
                >
                    <CardContent>
                        <Typography variant='h5' component='h3'>{deck.title}</Typography>
                        <Typography component='p'>{deck.desc}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button value={deck._id} onClick={(e)=>handleEditClick(e, deck)}>Edit</Button>
                        <Button color='error' value={deck._id} onClick={()=>handleModalOpen(deck)}>Delete</Button>
                    </CardActions>
                </Card>
            ))}
            <DeleteModal open={modalOpen} handleOpen={handleModalOpen} handleClose={handleModalClose} handleDelete={handleDeleteClick} toDelete={toDelete}/>
        </Box>
    )
}