import { useState } from "react";
import { Button, Box, List, ListItem, Typography, Fab } from "@mui/material"
import { Sidebar } from "../Sidebar/Sidebar"
import { CardContainer } from "../Card/CardContainer";

import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';

export const Dashboard = (props) => {
    const drawerWidth = 240;

    const {deckData} = props;

    const [activeDeck, setActiveDeck] = useState(deckData.decks[0]);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleSetActive = (e) => {
        const idx = e ? e.target.value : 0;
        setActiveDeck({...deckData.decks[idx]});
        setMobileOpen(false);
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
            }} >
                <Sidebar
                    drawerWidth={drawerWidth}
                    mobileOpen={mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                >
                    <List>
                        {deckData.decks.map((deck, idx) => (
                            <ListItem key={idx}>
                                <Button onClick={handleSetActive} value={idx} fullWidth>{deck.title}</Button>
                            </ListItem>
                        ))}
                    </List>
                </Sidebar>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    flexGrow: 1,
                    m: 1,
                    pl: {xs: 'auto', sm: '10%'}
                }}
                >
                    <Typography component='h2' variant='overline' sx={{flexGrow: 1}}>{`Currently Studying: ${activeDeck.title}`}</Typography>
                    <CardContainer activeDeck={activeDeck} />
                    <Typography component='h3' variant='body2' sx={{color: 'text.secondary', mt: 2, fontSize: 12}}>{activeDeck.desc}</Typography>
                    <Fab
                        size='small'
                        onClick={handleDrawerToggle}
                        sx={{
                            display: { sm: 'none'},
                            position: 'fixed',
                            bottom: 12,
                            left: 12
                        }}>
                        <ViewSidebarIcon />
                    </Fab>
                </Box>
            </Box>
        </>
    )
}