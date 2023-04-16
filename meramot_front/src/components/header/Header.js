import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox'
import './Header.css';
import logo from './res/logo.png';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
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
            <Avatar />
            <InboxIcon />
            <svg aria-hidden="true" class="svg-icon iconStackExchange" width="18" height="18" viewBox="0 0 18 18"><path d="M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z"></path></svg>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header