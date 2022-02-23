import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { getDatabase, set, ref } from 'firebase/database'

const Home = () => {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState("")
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const db = getDatabase()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleClick = (e) => {
        e.preventDefault()
        set(ref(db, "Admin/Apps/"+name+"/"), {
            name: name
        })
            .then(() => setName(""))
            .then(() => alert("Done!!"))
            .catch((error) => { alert(error) })
    }

    return (
        <>
            <Button variant='contained' style={{ marginTop: '90px' }} onClick={handleOpen}>+ Add Application</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <form>
                        <TextField label="Application Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                        <input style={{ marginTop: '15px' }} type="file" />
                        <Button variant="contained" style={{ marginTop: '10px' }} onClick={handleClick} component="span">
                            Submit
                        </Button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default Home