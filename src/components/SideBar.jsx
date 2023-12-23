import { Avatar, Tooltip, Typography, styled, useTheme } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { grey } from '@mui/material/colors';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import { HomeOutlined } from '@mui/icons-material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
 

const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    // @ts-ignore
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  

function SideBar({open,handleDrawerClose}) {
    const theme = useTheme();
    const navigate=useNavigate();
    const location=useLocation();

    const Array1=[
      {"text":"Dashboard" ,"icon":<HomeOutlined/>,"path":"/",title:"Dashboard"},
      {"text":"Manage Team" ,"icon":<PeopleAltOutlinedIcon/>,"path":"/manage" ,title:"Manage Team"},
      {"text":"Contacts Information" ,"icon":<ContactsOutlinedIcon/>,"path":"/contact",title:"Contact Information"},
      {"text":"Invoices Balances" ,"icon":<ListAltOutlinedIcon/>,"path":"/invoices" ,title:"Invoices Balances"},

    ]

    const Array2=[
      {"text":"Profile Form" ,"icon":<PersonOutlinedIcon/>,"path":"/profile" ,title:"Profile Form"},
      {"text":"Calendar" ,"icon":<CalendarTodayOutlinedIcon/>,"path":"/calendar" ,title:"Calendar"},
      {"text":"FAQ Page" ,"icon":<HelpOutlineOutlinedIcon/>,"path":"/faq" ,title:"FAQ"},
    ]
    
    const Array3=[
      {"text":"Bar Chart" ,"icon":<BarChartOutlinedIcon/>,"path":"/bar" ,title:"Bar Chart"},
      {"text":"Pie Chart" ,"icon":<PieChartOutlinedIcon/>,"path":"/pie" ,title:"Pie Chart"},
      {"text":"Line Chart" ,"icon":<TimelineOutlinedIcon/>,"path":"/line" ,title:"Line Chart"},
      {"text":"Geography Chart" ,"icon":<MapOutlinedIcon/>,"path":"/geography" ,title:"Geography Chart"},

    ]
     
    

  return (
  <>
         <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <Avatar sx={{margin:"0 auto",my:1,border:"2px solid grey",transition:"0.25s"}}  alt="Remy Sharp" src="7294793.jpg" />

<Typography  align='center'  sx={{fontSize:open? 17:0,transition:"0.25s"}} >Mai Mohamed</Typography>
<Typography align='center'  sx={{fontSize:open? 15:0,transition:"0.25s",color:theme.palette.info.main}} >Admin</Typography>

          <Divider />

          <List>
            {Array1.map((item, index) => (
              <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
               
               <Tooltip title={item.title}>
                
                 <ListItemButton

                onClick={()=>{
                  navigate(item.path)
                }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    bgcolor: location.pathname===item.path? theme.palette.mode==="dark"? grey[800]:grey[300] : null
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton></Tooltip>
               
               

              </ListItem>
            ))}
          </List>










          <Divider />
          <List>
            {Array2.map((item) => (
              <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                
                <Tooltip title={item.title}> 
                
                <ListItemButton
                onClick={()=>{
                  navigate(item.path)
                }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    bgcolor: location.pathname===item.path? theme.palette.mode==="dark"? grey[800]:grey[300] : null
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton></Tooltip>
               
              </ListItem>
            ))}
          </List>


          <Divider />
          <List>
            {Array3.map((item) => (
              <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                <Tooltip title={item.title}>
                  
                   <ListItemButton
                onClick={()=>{
                  navigate(item.path)
                }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    bgcolor: location.pathname===item.path? theme.palette.mode==="dark"? grey[800]:grey[300] : null
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                </Tooltip>
               
              </ListItem>
            ))}
          </List>
        </Drawer>
  </>
  )
}

export default SideBar
