import { useState } from "react";
import { Button, Box, List, ListItem, Typography, Fab } from "@mui/material"
import { Sidebar } from "../Sidebar/Sidebar"
import { CardContainer } from "../Card/CardContainer";

import AddIcon from '@mui/icons-material/Add';

export const Dashboard = (props) => {
    const drawerWidth = 240;

    const {deckData} = props;

    const [activeDeck, setActiveDeck] = useState(deckData.decks[0]);

    const handleSetActive = (e) => {
        const idx = e ? e.target.value : 0;
        setActiveDeck({...deckData.decks[idx]});
    }

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    return (
        <Box sx={{

        }}>
            <Box sx={{
                display: 'flex'
            }} >
                <Sidebar 
                    drawerWidth={drawerWidth} 
                    mobileOpen={mobileOpen} 
                    handleDrawerToggle={handleDrawerToggle}
                >
                    <List>
                        {deckData.decks.map((deck, idx) => (
                            <ListItem key={idx}>
                                <Button onClick={handleSetActive} value={idx}>{deck.title}</Button>
                            </ListItem>
                        ))}
                    </List>
                </Sidebar>
                <Box sx={{
                    flexGrow: 1
                }}
                >
                    <Fab 
                        size='small'
                        onClick={handleDrawerToggle}
                        sx={{display: {xs: 'block', sm: 'none'}}}
                    >
                        <AddIcon />
                    </Fab>
                    <Typography component='h2' variant='h3'>Dashboard view</Typography>
                    <CardContainer activeDeck={activeDeck} />
                </Box>
            </Box>
            
        </Box>
    )
}