import React, { useState, useEffect } from 'react';
import { db } from "../Configuration/configList"
import { collection, getDocs } from "firebase/firestore"
import { CardContent, Grid, Typography, Button, Box, Card, CardMedia } from '@mui/material';



const ShowImages = () => {

    
    const [list, setList] = useState([]);

    useEffect(() => {
        const ref = collection(db, 'image')
        const show = async () => {
            const data = await getDocs(ref)
            setList(data.docs.map((ls, index) => ({ ...ls.data(), id: ls.id })))

        }
        show() 
    }, [])
    console.log(list)
  return (
      <>
    <Grid container spacing={2} className="grid" >

    {list?.map((item, id) => {
      return (


        <Grid item xs={12} md={8} key={id}>
          <Card sx={{ maxWidth: 345, width:'350px' }}>
              <CardMedia
                component="img"
                height="190"
                width="300px"
                image={item.image}
                alt="green iguana"
              />
              <h2>{item.description}</h2>
              
              {/* <CardContent>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
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
                <Button variant='contained' color='error'>
                  Delete
                </Button>
              </CardContent> */}
          </Card>
        </Grid>
      )
    })}
  </Grid>
  </>

  )
}

export default ShowImages