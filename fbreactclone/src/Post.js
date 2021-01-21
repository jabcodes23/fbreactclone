import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

function Post({profilePic, username, image, message, timestamp}) {
    return (
        <div className='post'>
            <div className='post_top'>
                <Avatar src={profilePic} className='post_avatar'/>
                <div className='post_top_info'>
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>

            <div className='post_bottom'>
                <p>{message}</p>
            </div>

            <div className='post_image'>
                <img src={image} alt='' />
            </div>
            
        </div>
    );
}

export default Post
