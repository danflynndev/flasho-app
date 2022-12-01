import { Box, CircularProgress } from "@mui/material"


export const Spinner = () => {

    return (
        <Box sx={{
            width: '100%',
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CircularProgress />
        </Box>
    )
}