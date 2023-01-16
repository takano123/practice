/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
 
import { useState, useEffect } from 'react'
 
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import HomeIcon from '@mui/icons-material/Home'
import ArchiveIcon from '@mui/icons-material/Archive'
import SettingsIcon from '@mui/icons-material/Settings'

import topLogo from '../images/rogo_exeotech.jpg'
 
//ユーザー情報表示
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import LogoutIcon from '@mui/icons-material/Logout';
import { green } from '@mui/material/colors';




const menuStyle = {
  width: '100%',
  minWidth: 240,
  maxWidth: 360,
  bgcolor: 'background.paper',
};

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className = 'header'>
    <Box sx={{ display: 'flex' }}>
      <AppBar style={{backgroundColor: "#414d99" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={menuToggle}/>
            <Drawer anchor='left' open={isMenuOpen} onClose={menuToggle}>
              <List sx={menuStyle} component="nav" aria-label="mailbox folders">
                <Link to='/'>
                
                  <ListItem button>
                    <ListItemIcon>
                      <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="ホーム" />
                  </ListItem>
                </Link>

                <Divider />
                <Link to='/Test'>
                <ListItem button>
                  <ListItemIcon>
                    <SettingsIcon/>
                  </ListItemIcon>
                  <ListItemText primary="TEST" />
                </ListItem>
                </Link>
                
                <Divider />
                <ListItem button>
                  <ListItemIcon>
                    <SettingsIcon/>
                  </ListItemIcon>
                  <ListItemText primary="設定" />
                </ListItem>
                <Divider light />
              </List>
            </Drawer>
          </IconButton>
          <img src={topLogo} style={{height: '72px', marginRight: '20px'}}/>
          <Typography align='left' variant="h5" sx={{ cursor : 'pointer', flexGrow: 1 }} >
              VM自動評価ダッシュボード
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header;