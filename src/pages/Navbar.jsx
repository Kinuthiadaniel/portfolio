import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List,Avatar, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <AppBar position="sticky" className='justify-center' style={{backgroundColor: "#17263a", marginBottom:'2px', marginTop:'10px',opacity:1, border:'none', height:'100px'}}>
      <Toolbar >
        <Typography variant="h16" sx={{ flexGrow: 1 }}>
        <Avatar alt="User Avatar" src="https://i.pinimg.com/236x/5c/89/de/5c89de5b52165f998c117167eb380278.jpg" sx={{ width: 60, height: 60, mr: 2, backgroundColor:'#1f2937'}} />

        </Typography>
        
   
        <Box sx={{ height: 30, display: { xs: 'none', sm: 'flex' } }}>
          <Button color="inherit" component={Link} to="/" sx={{
      fontSize: '1.15rem',
      marginRight: 2,
      '&:hover': {
        backgroundColor: '#f0f0f0',
        color: "#000000",
        transform:'scale-1.25'
      },
    }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{
      fontSize: '1.15rem',
      marginRight: 2,
      '&:hover': {
        backgroundColor: '#f0f0f0',
        color: "#000000"
      },
    }}>
            About
          </Button>
          <Button color="inherit" component={Link} to="/projects" sx={{
      fontSize: '1.15rem',
      marginRight: 2,
      '&:hover': {
        backgroundColor: '#f0f0f0',
        color: "#000000"
      },
    }}>
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={{
      fontSize: '1.15rem',
      marginRight: 2,
      '&:hover': {
        backgroundColor: '#f0f0f0',
        color: "#000000"
      },
      
    }}
    >
            Contact
          </Button>
        </Box>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={toggleDrawer}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/projects" onClick={toggleDrawer}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={toggleDrawer}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;