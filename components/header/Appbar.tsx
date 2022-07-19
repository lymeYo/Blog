//@ts-nocheck
//!ругается на color='header в параметрах AppBar

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { TextField } from '@mui/material';
import SearchArea from './SearchArea';
import CreateButton from './CreateButton';
import React from 'react';
import NavArea from './NavArea';
function Appbar(props: any) {
   const renderDrawerOpen = props.renderDrawerOpen
   
  return (
     <Box sx={{ flexGrow: 1 }}>
        <AppBar color='header' position="fixed">
           <Toolbar>
              <IconButton
                 size="large"
                 edge="start"
                 color="inherit"
                 aria-label="menu"
                 sx={{ mr: 2 }}
                 onClick={renderDrawerOpen}
              >
                 <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                 News
              </Typography>

              <SearchArea />

              <NavArea />
              
           </Toolbar>
        </AppBar>
     </Box>
  )
}

export default Appbar