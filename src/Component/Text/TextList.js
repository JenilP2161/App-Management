import {
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { db2 } from "../../Firebase2";
import Button from '@mui/material/Button'
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useUserAuth } from '../../Auth/UserAuthContext'
import Selector from '../Selector'
import './ShowText.css'

function TextList({ list }) {

    const { user } = useUserAuth();

    const increaseLike = async (id, like, likedBy) => {
        var newLike = like + 1;
        var newArr = [...likedBy]
        likedBy.push(user.email)
        const ref = doc(db2, 'text', id)
        try {
            ((newArr.includes(user.email) === false) ? updateDoc(ref, { like: newLike, likedBy: likedBy }) : updateDoc(ref, {}))
        } catch (error) {

        }
    }
    const deleteItem = async (id) => {
        const ref = doc(db2, 'text', id)
        try {
            await deleteDoc(ref)
        } catch (error) {
            alert(error)
        }
    }


    return (
        <>
        <Selector />
            <Grid container spacing={2} mt={10} className="grid">
                {list.map((item, index) => {
                    return (
                        <Box key={index}>
                            <Paper elevation={10} className="paper">
                                <Typography variant="h5">
                                    <Box className="title">{item.title}</Box>
                                </Typography>
                                <Typography variant="h6">
                                    <Box className="text">{item.text}</Box>
                                </Typography>
                                <Box>
                                    <Button onClick={() => increaseLike(item.id, item.like, item.likedBy)}>
                                        <ThumbUpIcon /> {item.like}
                                    </Button>
                                </Box>
                                <Box style={{ display: 'inline-block', margin: 'auto 5px' }}>
                                    <Button >
                                        <VisibilityIcon /> {12}
                                    </Button>
                                </Box>
                                <Button variant='contained' color='error' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem(item.id) }}>
                                    Delete
                                </Button>
                            </Paper>
                        </Box>
                    );
                })}
            </Grid>
        </>
    );
}

export default TextList;
