import { Box, Drawer, Toolbar, Typography } from "@mui/material";

export const Sidebar = (props) => {

    const { mobileOpen, handleDrawerToggle, drawerWidth } = props ;

    return (
        <>
            {/* *** DESKTOP *** */}
            <Drawer
                variant='permanent'
                sx={{
                    width: drawerWidth,
                    display: { xs: 'none', sm: 'block' },
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
                }}
                open
            >
                <Toolbar />
                <Box sx={{
                    overflow: 'auto',
                }}>
                    <Typography align='center' component='h3' variant='h5'
                        sx={{
                            pt: 3,
                            pb: 1,
                            borderBottom: '1px solid lightgrey'
                        }} >Study Topics</Typography>
                    {props.children}
                </Box>
            </Drawer>

            {/* *** MOBILE *** */}
            <Drawer
                variant='temporary'
                keepMounted
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    width: drawerWidth,
                    display: { xs: 'block', sm: 'none' },
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <Typography align='center' component='h3' variant='h5'
                            sx={{
                                pt: 3,
                                pb: 1,
                                borderBottom: '1px solid lightgrey'
                            }} >Study Topics</Typography>
                    {props.children}
                </Box>
            </Drawer>
        </>
    )
}