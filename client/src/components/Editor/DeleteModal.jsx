import { Button, Dialog, DialogTitle } from "@mui/material"
import { Box } from "@mui/system"

export const DeleteModal = props => {
    const { open, handleClose, handleDelete, toDelete } = props

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <Box>
                <DialogTitle>{`Are you sure you want to delete ${toDelete.deckName}?`}</DialogTitle>
                <Button onClick={handleClose}>Go Back</Button>
                <Button color='error' onClick={(e)=>handleDelete(e, toDelete.deckId)}>Delete</Button>
            </Box>
        </Dialog>
    )
}