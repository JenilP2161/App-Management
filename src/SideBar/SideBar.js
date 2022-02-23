import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useUserAuth } from '../Auth/UserAuthContext'
import Exit from '@mui/icons-material/ExitToApp'
import Button from '@mui/material/Button'
import { get, child, ref, getDatabase } from 'firebase/database'
const drawerWidth = 230;

function SideBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logOut } = useUserAuth();
    const [list, setList] = useState()
    const [selectedIndex, setSelectedIndex] = useState("")

    const dbRef = ref(getDatabase());
    useEffect(() => {
        const getData = () => {
            get(child(dbRef, '/Admin/Apps')).then((snapshot) => {
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

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleClick = index => {
        if (selectedIndex === index) {
            setSelectedIndex("")
        } else {
            setSelectedIndex(index)
        }
    }

    const handleLogout = async () => {
        try {
            await logOut();
        } catch (error) {
            alert(error)
        }
    }

    const drawer = (
        <div>
            <Toolbar />
            <Divider sx={{ borderColor: 'rgb(173 150 158)' }} />
            <List>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                    <ListItem button>
                        <ListItemText primary='Home' />
                    </ListItem>
                </Link>
                <Divider sx={{ borderColor: 'rgb(173 150 158)' }} />
                <ListItem button>
                    <ListItemText primary='Apps' />
                </ListItem>
            </List>
            {list !== undefined ? (
                <div>
                    {Object.values(list).map((text, index) => {
                        return (
                            <div key={index}>
                                <List component="div" disablePadding>
                                    <ListItemButton onClick={() => { handleClick(index) }} sx={{ pl: 4 }}>
                                        <ListItemText primary={text.name} />
                                        {index === selectedIndex ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={index === selectedIndex} timeout='auto' unmountOnExit>
                                        <List component="div" disablePadding>
                                            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/apphome/${text.name}`}>
                                                <ListItemButton sx={{ pl: 6 }}>
                                                    <ListItemText primary="Home" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/config/${text.name}`}>
                                                <ListItemButton sx={{ pl: 6 }}>
                                                    <ListItemText primary="Config" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/admob/${text.name}`}>
                                                <ListItemButton sx={{ pl: 6 }}>
                                                    <ListItemText primary="Admob" />
                                                </ListItemButton>
                                            </Link>
                                            <Divider sx={{ borderColor: 'rgb(173 150 158)' }} />
                                        </List>
                                    </Collapse>
                                </List>
                            </div>
                        );
                    })}
                </div >
            ) : (
                <div>

                </div>
            )}
            <Divider sx={{ borderColor: 'rgb(173 150 158)' }} />
            <ListItem button>
                <ListItemText primary='Notification' />
            </ListItem>
            <Divider sx={{ borderColor: 'rgb(173 150 158)' }} />
        </div >
    );


    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        backgroundColor: "black",
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }} component="div">
                            Admin Panel
                        </Typography>
                        <Button style={{ color: 'white' }} onClick={handleLogout}><Exit /></Button>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: "none", sm: "block" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                            },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                    }}
                >
                    <Toolbar />
                </Box>
            </Box>
        </>
    );
}

export default SideBar;
