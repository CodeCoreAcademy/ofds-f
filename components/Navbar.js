import React, { useState } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import { styled, alpha } from '@mui/material/styles';
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, Button, Divider, IconButton, InputBase, ListItemIcon, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
const StyledIconButton = styled(IconButton)(({theme}) => ({
  borderRadius:'0px'
}))

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border:'1px solid #bcbcbc',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    // width: '60%',
    [theme.breakpoints.down('sm')]: {
      // marginLeft: theme.spacing(1),
      width: '70%',
    },
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(1),
      width: 'auto',
    },
    display:'flex'
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    
    // position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 2, 1, 2),
      // vertical padding + font size from searchIcon
      // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}



export default function Navbar(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color='primary'>
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
          {/* <Typography variant="h6" component="div">
            Scroll to see button
          </Typography> */}
          <Link href="/">
            <Box sx={{width:'64px', height:'64px', position:'relative', cursor:'pointer'}}>
              <Image src='/logo.png' layout='fill' priority='true'/>
            </Box>
          </Link>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            {/* <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper> */}
            <IconButton variant="contained" color='secondary'> <SearchIcon /> </IconButton>
          </Search>
          <Box sx={{display:['none', 'flex'], width:'190px', justifyContent:'space-between', alignContent:'center'}}>
           {
              isLoggedIn
              ?<>
              
                <Link href='/'>
                  <IconButton variant="contained" color='secondary' sx={{height:'fit-content', alignSelf:'center'}}> 
                    
                     <AccountBalanceWalletRoundedIcon /> 
                    
                  </IconButton>
                </Link> 
            
                <Link href='/dd'>
                  <IconButton variant="contained" color='secondary' sx={{height:'fit-content', alignSelf:'center'}}> 
                    <ShoppingCartOutlinedIcon /> 
                  </IconButton>
                </Link>
                <IconButton variant="contained" color='secondary' onClick={handleClick}> 
                  <Avatar alt="Habul Da" src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem sx={{':hover':{backgroundColor:'secondary.light', color:'white'}, transition:'0.3s'}}>
                    <Avatar /> Profile
                  </MenuItem>
                  <MenuItem sx={{':hover':{backgroundColor:'secondary.light', color:'white'}, transition:'0.3s'}}>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem sx={{':hover':{backgroundColor:'secondary.light', color:'white'}, transition:'0.3s'}}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem sx={{':hover':{backgroundColor:'secondary.light', color:'white'}, transition:'0.3s'}}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={()=>setIsLoggedIn(false)} sx={{':hover':{backgroundColor:'secondary.light', color:'white'}, transition:'0.3s'}}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
              :<Link href='/'>
                <Button color="secondary" variant="contained" onClick={()=>setIsLoggedIn(true)}>Login</Button>
              </Link> 
            }
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

