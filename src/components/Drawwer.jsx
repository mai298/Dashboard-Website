import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import TopBar from './TopBar';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';


function Drawwer() {

    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
     <TopBar open={open} handleDrawerOpen={handleDrawerOpen}/>
 


<SideBar open={open} handleDrawerClose={handleDrawerClose}/>
        <Box component="main" sx={{ flexGrow: 1, p: 3,mt:4 }}>
      <Outlet/>
        
        </Box>
      </Box>
    );
  }
export default Drawwer
