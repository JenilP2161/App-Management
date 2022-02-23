import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, useEffect } from "react";
import { getDatabase, ref, set, get, child } from "firebase/database";
import SwitchDB from "./SwitchDB";

// import { firebaseConfig, item } from '../../Mv';
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

const paperStyle = {
  paddingTop: "10px",
  width: 780,
  margin: "20px auto",
  height: "88vh",
};

function Config() {
  const [api, setApi] = useState("");
  const [domain, setDomain] = useState("");
  const [dbUrl, setDbUrl] = useState("");
  const [projectId, setProjectId] = useState("");
  const [storageBucket, setStorageBucket] = useState("");
  const [msgId, setMsgId] = useState("");
  const [appId, setAppId] = useState("");
  const [mId, setMId] = useState("");
  const [list, setList] = useState();
  const [convt, setConvt] = useState();

  const handleSubmit = () => {
    const db = getDatabase();
    set(ref(db, "Admin/Apps/App1/config/config1/"), {
      api: api,
      domain: domain,
      dbUrl: dbUrl,
      storageBucket: storageBucket,
      msgId: msgId,
      projectId: projectId,
      appId: appId,
      mId: mId,
    });
    //  setList(`{"api": "${api}", "domain": "${domain}", "dbUrl": "${dbUrl}", "storageBucket": "${storageBucket}", "msgId": "${msgId}", "projectId": "${projectId}", "appId": "${appId}", "mId": "${mId}"}`)
    //  console.log(list)
    console.log(
      api,
      domain,
      dbUrl,
      projectId,
      storageBucket,
      msgId,
      appId,
      mId
    );
  };
  // useEffect(() => {
  //   const getData = async () =>{
  //     const dbRef = ref(getDatabase());
  // await get(child(dbRef, `Admin/Apps/App1/config/config1/`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     setList(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // })
  // // .then(()=>{})
  // .catch((error) => {
  //   console.error(error);
  // });

  //   }
  //   getData()
  // }, [])

  // const handleSwitch = () =>{
  //   const getData = async () =>{
  //     const dbRef = ref(getDatabase());
  // await get(child(dbRef, `Admin/Apps/App1/`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     setConvt(snapshot.val());
  //     console.log(Object.keys(convt.length))
  //   } else {
  //     console.log("No data available");
  //   }
  // })
  // // .then(()=>{})
  // .catch((error) => {
  //   console.error(error);
  // });

  //   }
  //   getData();
  // }

  // console.log(list);
  // data = list;
  // console.log(data)
  // console.log(item.api)
  // const x = item.api
  // console.log(x)
  // const one = '{"a": "1"}';
  // const two = "'"

  // const three = two.concat(one).concat("'")
  // console.log(three);

  // console.log(list1);
  // ======>   localStorage.setItem('2', JSON.stringify(list))
  // var ls = localStorage.getItem('name')
  // console.log(two.concat(ls).concat("'"))
  // const nl = two.concat(ls).concat("'")
  // const ll = JSON.parse(nl)
  // console.log(ll.api)

  // const firebaseConfig = {
  //   apiKey: console.log(list.api),
  //   authDomain: "",
  //   databaseURL: "",
  //   projectId: "",
  //   storageBucket: "",
  //   messagingSenderId: "",
  //   appId: "",
  //   measurementId: ""
  // };

  // getData();

  return (
    <>
      <Grid align="center">
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={{ backgroundColor: "#1bbd7e", marginBottom: "5px" }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography variant="h4" gutterBottom>
              Add Configuration
            </Typography>
          </Grid>
          <Grid>
            <TextField
              // label="apiKey"
              placeholder="Enter API Key"
              type="text"
              variant="outlined"
              value={api}
              onChange={(e) => {
                setApi(e.target.value);
              }}
              style={{ margin: "10px", width: "350px" }}
            />

            <TextField
              // label="authDomain"
              placeholder="Enter AuthDomain"
              type="text"
              variant="outlined"
              value={domain}
              onChange={(e) => {
                setDomain(e.target.value);
              }}
              style={{ margin: "10px", width: "350px" }}
            />
            <TextField
              // label="authDomain"
              placeholder="Enter Database URL"
              type="text"
              variant="outlined"
              value={dbUrl}
              onChange={(e) => {
                setDbUrl(e.target.value);
              }}
              style={{ margin: "10px", width: "350px" }}
            />
            <TextField
              // label="authDomain"
              placeholder="Enter projectID"
              type="text"
              variant="outlined"
              value={projectId}
              onChange={(e) => {
                setProjectId(e.target.value);
              }}
              style={{ margin: "10px", width: "350px" }}
            />
            <TextField
              // label="authDomain"
              placeholder="Enter Storage Bucket"
              type="text"
              variant="outlined"
              value={storageBucket}
              onChange={(e) => {
                setStorageBucket(e.target.value);
              }}
              style={{ margin: "10px", width: "350px" }}
            />
            <TextField
              // label="authDomain"
              placeholder="Enter messagingSenderId"
              type="text"
              variant="outlined"
              value={msgId}
              onChange={(e) => {
                setMsgId(e.target.value);
              }}
              style={{ margin: "10px", width: "350px" }}
            />
            <TextField
              // label="authDomain"
              placeholder="Enter appId"
              type="text"
              variant="outlined"
              value={appId}
              onChange={(e) => {
                setAppId(e.target.value);
              }}
              style={{ margin: "10px", width: "350px" }}
            />
            <TextField
              // label="authDomain"
              placeholder="Enter measurementId"
              type="text"
              variant="outlined"
              value={mId}
              onChange={(e) => {
                setMId(e.target.value);
              }}
              style={{ margin: "10px", width: "350px" }}
            />
          </Grid>
          <Grid align="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              style={{ margin: "20px auto" }}
            >
              ADD
            </Button>
            <br />
            {/* <Button
              variant="contained"
              color="error"
              onClick={handleSwitch}
              style={{ margin: "20px auto" }}
            >
              Switch DB
            </Button> */}
            <SwitchDB />
          </Grid>
        </Paper>
      </Grid>
    </>
  );
  // console.log(api)
}

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const storage = getStorage();

export default Config;
