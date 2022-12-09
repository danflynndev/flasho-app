import { Button, Dialog, DialogTitle } from "@mui/material"
import { Box } from "@mui/system"

export const DeleteModal = props => {
    const { open, handleClose, handleDelete, toDelete } = props

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>{`Are you sure you want to delete ${toDelete.deckName}?`}</DialogTitle>
            <Box sx={{
                display: 'flex',
                mb: 2,
                justifyContent: 'space-evenly'
            }}>
                <Button onClick={handleClose}>Go Back</Button>
                <Button color='error' variant='contained' onClick={(e)=>handleDelete(e, toDelete.deckId)}>Delete</Button>
            </Box>
        </Dialog>
    )
}