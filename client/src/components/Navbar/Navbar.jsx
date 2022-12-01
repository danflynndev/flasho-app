import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

export const Navbar = (props) => {
    const { token, setToken, clearToken } = props;
    const navigate = useNavigate()

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMenuItemClick = (e, f) => {
        handleCloseNavMenu();
        f(e);
    }

    const handleLogout = () => {
        clearToken();
    }

    const handleNavigate = (e) => {
        console.log(e)
        const text = e.target.textContent;
        const page = text.split(' ')[0].toLowerCase();
        console.log(page)
        const url = '/' + page;
        navigate(url);
    }


    return (
        <AppBar
            position='fixed'
            sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}
            >
            <Toolbar>
                <Link to={'/'}>
                    <HomeIcon />
                </Link>
                {token && (
                    <>

                        {/* *** DASHBOARD *** */}
                        <Box sx={{
                            display: { xs: 'none', md: 'flex'},
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            
                        }}>
                            <Button color='secondary' variant='contained' onClick={handleNavigate}>Create Deck</Button>            
                            <Button color='secondary' variant='contained' onClick={handleNavigate}>Edit Decks</Button>            
                            <Button color='secondary' variant='contained' onClick={handleLogout}>Logout</Button>            
                        </Box>

                        {/* *** MOBILE *** */}
                        <Box sx={{
                            width: '100%',
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'flex-end'
                        }}>
                            <IconButton
                                color='inherit'
                                size='large'
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                sx={{
                                    display: { xs: 'block', md: 'none' }
                                }}
                                anchorEl={anchorElNav}
                                keepMounted
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                            >
                                <MenuItem key='logout' onClick={(e)=>handleMenuItemClick(e, handleLogout)}>
                                    <Typography>Logout</Typography>
                                </MenuItem>
                                <MenuItem onClick={(e)=>handleMenuItemClick(e, handleNavigate)}>
                                    <Typography>Create Deck</Typography>
                                </MenuItem>
                                <MenuItem onClick={(e)=>handleMenuItemClick(e, handleNavigate)}>
                                    <Typography>Edit Decks</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </>
                    )}
                </Toolbar>
        </AppBar>
    )
}