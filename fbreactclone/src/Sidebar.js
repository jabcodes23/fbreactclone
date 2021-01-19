import React from 'react';
import SidebarRow from './SidebarRow.js';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StorefrontIcon from '@material-ui/icons/Storefront';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4' title='jabcodes23' />
            <SidebarRow title='Pages' Icon={EmojiFlagsIcon}/>
            <SidebarRow title='Friends' Icon={PeopleIcon}/>
            <SidebarRow title='Messenger' Icon={ChatIcon}/>
            <SidebarRow title='Videos' Icon={VideoLibraryIcon}/>
            <SidebarRow title='Marketplace' Icon={StorefrontIcon}/>
        </div>
    )
}

export default Sidebar
