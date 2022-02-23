import React, { useState, useEffect } from 'react'
import { get, child, ref, getDatabase } from 'firebase/database'
import { useParams } from 'react-router-dom';

const Admob = () => {

    const [list, setList] = useState()
    const { id } = useParams()
    const dbRef = ref(getDatabase());
    useEffect(() => {
        const getData = () => {
            get(child(dbRef, '/Admin/Apps/'+id+'/Admob')).then((snapshot) => {
                if (snapshot.exists()) {
                    setList(snapshot.val())
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
        getData()
    }, [])

    return (
        <>
            <div style={{ marginTop: '90px' }}>
                {list!==undefined ?
                <div>
                        <h3>{list.banner}</h3>
                        <h3>{list.initial}</h3>
                        <h3>{list.reward}</h3>
                        <h3>{list.native}</h3>
                    </div> :
                    <></>
                }
                
            </div>
        </>
    )
}

export default Admob