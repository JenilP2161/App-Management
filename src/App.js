import React, { useState, useEffect } from "react";
import { UserAuthContextProvider } from './Auth/UserAuthContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './Auth/SignUp';
import Login from './Auth/Login';
import { useUserAuth } from './Auth/UserAuthContext'
import ProtectedRoute from './Auth/ProtectedRoute'
import { Grid } from "@mui/material";
import Config from "./Components/Configuration/Config";
import ShowImages from "./Components/Images/ShowImages";
// import Config from "./Components/Configuration/Config";
// import ShowImages from "./Components/Images/ShowImages";
// import Mv from './Mv'



function App() {

  const { user } = useUserAuth();
  const [isUser, setIsUser] = useState(false);
  console.log(user)

  useEffect(() => {
    const find = () => {
      if (user) {
        return setIsUser(true)
      }
      else{
        return setIsUser(false)
      }
    }
    find()

  }, [user]) 



  return (
    <>
    <Router>
      <UserAuthContextProvider>
        <Grid container spacing={6}>
          <Grid item xs={2}>
            {/* {isUser === true ? <SideBar /> : null} */}
          </Grid>
          <Grid item xs={10}>
            <Routes>
              <Route>
                {/* <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/addimage" element={<ProtectedRoute><AddImage /></ProtectedRoute>} />
                <Route path="/addvideo" element={<ProtectedRoute><AddVideo /></ProtectedRoute>} />
                <Route path="/addtext" element={<ProtectedRoute><AddText /></ProtectedRoute>} />
                <Route path="/showimages" element={<ProtectedRoute><PaginationImage /></ProtectedRoute>} />
                <Route path="/showvideos" element={<ProtectedRoute><PaginationVideo /></ProtectedRoute>} />
                <Route path="/showtexts" element={<ProtectedRoute><PaginationText /></ProtectedRoute>} /> */}
                <Route path="/" element={<Config />} />
                <Route path="/showimages" element={<ShowImages />} />
                <Route path="/config" element={<Config />} />
                {/* <Route path="/m" element={<Mv />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Route>
            </Routes>
          </Grid>
        </Grid>
      </UserAuthContextProvider>
    </Router>
    </>
  )
}

export default App;

