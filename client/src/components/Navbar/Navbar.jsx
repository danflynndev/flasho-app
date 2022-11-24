import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export const Navbar = (props) => {
    const { setToken } = props;
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
        setToken()
        navigate('/')
    }

    const handleNavigate = (e) => {
        console.log(e)
        const page = e.target.id;
        const url = '/' + page;
        navigate(url);
    }


    return (
        <AppBar
            position='fixed'
            sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}
            >
            <Toolbar>
              <Typography>Navbar!</Typography>

              {/* *** DASHBOARD *** */}
              <Box sx={{
                display: { xs: 'none', md: 'flex'}
              }}>
                <Button color='secondary' variant='contained' onClick={handleLogout}>Logout</Button>            
              </Box>

              {/* *** MOBILE *** */}
              <Box sx={{
                display: { xs: 'flex', md: 'none' }
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
                        <Typography id='create'>Create Deck</Typography>
                    </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
        </AppBar>
    )
}