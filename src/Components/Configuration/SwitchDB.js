import React from 'react'
import {useState, useEffect} from 'react'
import { getDatabase, ref, set, get, child } from "firebase/database";
import {Button, Typography, Box} from '@mui/material'

const SwitchDB = () => {


    const [list, setList] = useState([]);
    const [data, setData] = useState([]);
    const [count, setCount] = useState([]);

    // useEffect(()=>{
    //     const displayData = async () =>{
    //         const dbRef = ref(getDatabase());
    //         await get(child(dbRef, `Admin/Apps/App1/config/`)).then((snapshot)=>{
    //             if (snapshot.exists()) {
                    
    //                 setData(snapshot.val());
    //                 for(var i=0; i <= Object.keys(data).length; i++){
    //                     setCount(i);
                        
    //                 }
    //               } else {
    //                 console.log("No data available");
    //               }
    //               console.log(list);
    //         })
    //     }
    //     displayData();
    // }, [])


    const getData = async() =>{
        const dbRef = ref(getDatabase());
        await get(child(dbRef, `Admin/Apps/App1/config/config2/`)).then((snapshot)=>{
            if (snapshot.exists()) {
                setList(snapshot.val());
                localStorage.setItem('name', JSON.stringify(list));
              } else {
                console.log("No data available");
              }
              console.log(list);
        })  
        
    }

    
  return (
      <>
    <Box>
        <Button 
        variant='contained'
        style={{ margin: "20px auto" }}
        color="error"
        onClick={getData}
        >
            Switch DB
        </Button>
    </Box>
    </>
  )
}

export default SwitchDB;