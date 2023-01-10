import { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";

import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = (props) => {
    const { token, clearToken } = props;
    const navigate = useNavigate();
    const location = useLocation();

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
        if (location.state?.path) {
            location.state.path = '/';
        }
        clearToken();
    }

    const handleNavigate = (e) => {
        const text = e.target.textContent;
        const page = text.split(' ')[0].toLowerCase();
        const url = '/' + page;
        navigate(url);
    }


    return (
        <AppBar
            position='fixed'
            sx={{
                bgcolor: 'primary.dark',
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
        >
            <Toolbar>
                <Link to={'/'}
                    style={{
                        textDecoration: 'none',
                    }}
                >
                    {/* <HomeIcon /> */}
                    <Typography variant='h4' sx={{
                        color: '#fff',
                        fontFamily: "'Fondamento', 'Roboto','Helvetica','Arial',sans-serif",
                    }}>Flasho</Typography>
                </Link>
                {token && (
                    <>
                        {/* *** DASHBOARD *** */}
                        <Box sx={{
                            width: '100%',
                            display: { xs: 'none', md: 'flex'},
                            justifyContent: 'end',
                            alignItems: 'center',
                            gap: 3,
                        }}>
                            <Button variant='contained' onClick={handleNavigate}>Create Deck</Button>
                            <Button variant='contained' onClick={handleNavigate}>Edit Decks</Button>
                            <Button variant='contained' onClick={handleLogout}>Logout</Button>
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
                                <MenuItem onClick={(e)=>handleMenuItemClick(e, handleNavigate)}>
                                    <Typography>Create Deck</Typography>
                                </MenuItem>
                                <MenuItem onClick={(e)=>handleMenuItemClick(e, handleNavigate)}>
                                    <Typography>Edit Decks</Typography>
                                </MenuItem>
                                <MenuItem key='logout' onClick={(e)=>handleMenuItemClick(e, handleLogout)}>
                                    <Typography>Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </>
                    )}
                </Toolbar>
        </AppBar>
    )
}