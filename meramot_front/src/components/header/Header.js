import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
// import InboxIcon from '@mui/icons-material/Inbox';
// import ChatIcon from '@mui/icons-material/Chat';
import './Header.css';
import logo from './res/logo.png';
import { Avatar, Menu, Tooltip } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/userSlice';
import MenuItem from '@mui/material/MenuItem';
// import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';

function Header() {
  const user = useSelector(selectUser);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    handleClose();
    auth.signOut();
    navigate('/');
  }
  const handleLogin = () => {
    handleClose();
    navigate('/auth');
  }

  return (
    <header>
      <div className='header-container'>

        <div className='header-left'>
          <Link to='/'>
            <img src={logo} alt='mermot' height="35" />
          </Link>
          <h3>Products</h3>
        </div>


        <div className='header-middle'>
          <div className='header-search-container'>
            <SearchIcon /><input type='text' placeholder='search...' />
          </div>
        </div>


        <div className='header-right'>
          <div className='header-right-container'>
            <span onClick={handleClick}>
              <Tooltip title={user? user.displayName:"Account"}>
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar src={user ? user.photoUrl : ''} />
                </IconButton>
              </Tooltip>
            </span>
          </div>
        </div>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
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
          {
            user &&
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Avatar src={user.photoUrl}/>
              </ListItemIcon>
              {user.displayName}
            </MenuItem>
          }
          {
            user &&
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          }
          {
            !user &&
            <MenuItem onClick={handleLogin}>
              <ListItemIcon>
                <LoginIcon fontSize="small" />
              </ListItemIcon>
              Login
            </MenuItem>
          }

        </Menu>

      </div>
    </header>
  )
}

export default Header