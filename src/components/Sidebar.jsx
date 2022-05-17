import { 
     Box,
     List,
     ListItem,
     ListItemButton,
     ListItemIcon,
     ListItemText, 
     Switch
    } from '@mui/material';
import { AccountBox, Article, Groups, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material';
import React from 'react';

const Sidebar = ({setMode,mode}) => {
    return (
    <Box flex={1} p={1} sx={{display:{xs:"none",sm:"block"}}} >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home' >
              <ListItemIcon>
                  <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home' >
              <ListItemIcon>
                  <Article/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home' >
              <ListItemIcon>
                  <Groups/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home' >
              <ListItemIcon>
                  <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home' >
              <ListItemIcon>
                  <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home' >
              <ListItemIcon>
                  <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home' >
              <ListItemIcon>
                  <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home' >
              <ListItemIcon>
                  <ModeNight/>
              </ListItemIcon>
              <Switch onChange={()=>setMode(mode==="light"?"dark":"light")} />
            </ListItemButton>
          </ListItem>
       </List>  
      </Box>
    </Box>
    );
};

export default Sidebar;