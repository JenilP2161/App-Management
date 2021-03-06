import { Grid, Paper, Typography, } from "@mui/material";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { db2 } from "../../Firebase2";
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Selector from "../Selector";
import { useUserAuth } from '../../Auth/UserAuthContext'

function ShowVideo({ list }) {

    const { user } = useUserAuth();

    const paperStyle = {
        width: 350,
    };


    const increaseLike = async (id, like, likedBy) => {
        var newLike = like + 1;
        var newArr = [...likedBy]
        likedBy.push(user.email)
        const ref = doc(db2, 'video', id)
        try {
            ((newArr.includes(user.email) === false) ? updateDoc(ref, { like: newLike, likedBy: likedBy }) : updateDoc(ref, {}))
        } catch (error) {

        }
    }

    const deleteItem = async (id) => {
        const ref = doc(db2, 'video', id)
        try {
            await deleteDoc(ref)
        } catch (error) {
            alert(error)
        }
    }


    return (
        <>
            <Selector />
            <Grid container spacing={2} className="grid">
                <style>
                    {`
          body{background: #BE93C5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #7BC6CC, #BE93C5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #7BC6CC, #BE93C5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
            .grid{
              width: 100vw;
              max-width: 1170px;
              margin: 5rem auto;
              display: grid;
              gap: 5px;
            }
            @media screen and (min-width: 768px) {
              .grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }
            }
      `}
                </style>
                {list.map((item, index) => {
                    return (
                        <Box key={index}>
                            <Paper elevation={10} style={paperStyle}>
                                <video width="350" height="240" controls>
                                    <source src={item.video} type="video/mp4" />
                                </video>
                                <Typography variant="h6">{item.name}</Typography>
                                <Box style={{ display: 'inline-block' }}>
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

export default ShowVideo;
