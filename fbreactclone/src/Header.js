import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ForumIcon from '@material-ui/icons/Forum';
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <img src='https://www.pinclipart.com/picdir/big/414-4146033_like-us-on-facebook-at-www-find-us.png' alt='facebook logo'></img>
                <div className='header_input' >
                    <SearchIcon />
                    <input type='text' placeholder='Search Facebook' />
                </div>
            </div>

            <div className='header_middle'>
                <div className='header_option header_option-active'>
                    <HomeIcon fontSize='large' />
                </div>
                <div className='header_option'>
                    <FlagIcon fontSize='large' />
                </div>
                <div className='header_option'>
                    <SubscriptionsOutlinedIcon fontSize='large' />
                </div>
                <div className='header_option'>
                    <StorefrontOutlinedIcon fontSize='large' />
                </div>
                <div className='header_option'>
                    <SupervisedUserCircleIcon fontSize='large' />
                </div>
            </div>

            <div className='header_right'>
                <div className='header_info'>
                    <Avatar />
                    <h4>jabright23</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
