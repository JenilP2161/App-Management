import React, { useState, useEffect } from 'react'
import SideBar from "./SideBar/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grid from '@mui/material/Grid'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'
import Home from './Home'
import Admob from './Component/Admob'
import AppHome from './Component/AppHome'
import AddImage from './Component/Image/AddImage'
import AddVideo from './Component/Video/AddVideo'
import AddText from './Component/Text/AddText'
import { UserAuthContextProvider } from './Auth/UserAuthContext';
import ProtectedRoute from './Auth/ProtectedRoute'
import { useUserAuth } from './Auth/UserAuthContext'
import PaginationImage from './Pagination/PaginationImage';
import PaginationVideo from './Pagination/PaginationVideo';
import PaginationText from './Pagination/PaginationText';

function App() {

  const { user } = useUserAuth()
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    const find = () => {
      if (user) {
        return setIsUser(true)
      }
      else {
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
              {isUser === true ? <SideBar /> : null}
            </Grid>
            <Grid item xs={10}>
              <Routes>
                <Route>
                  <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                  <Route path="/apphome/:id" element={<ProtectedRoute><AppHome /></ProtectedRoute>} />
                  <Route path="/addimage/:id" element={<ProtectedRoute><AddImage /></ProtectedRoute>} />
                  <Route path="/imagelist/:id" element={<ProtectedRoute><PaginationImage /></ProtectedRoute>} />
                  <Route path="/addvideo/:id" element={<ProtectedRoute><AddVideo /></ProtectedRoute>} />
                  <Route path="/videolist/:id" element={<ProtectedRoute><PaginationVideo /></ProtectedRoute>} />
                  <Route path="/addtext/:id" element={<ProtectedRoute><AddText /></ProtectedRoute>} />
                  <Route path="/textlist/:id" element={<ProtectedRoute><PaginationText /></ProtectedRoute>} />
                  <Route path="/admob/:id" element={<ProtectedRoute><Admob /></ProtectedRoute>} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                </Route>
              </Routes>
            </Grid>
          </Grid>
        </UserAuthContextProvider>
      </Router>
    </>
  );
}

export default App;
