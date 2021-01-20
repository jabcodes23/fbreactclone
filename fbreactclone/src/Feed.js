import React from 'react';
import PostCreator from './PostCreator';
import './Feed.css';

function Feed() {
    return (
        <div className='feed'>
            <PostCreator />
            <Post />
        </div>
    )
}

export default Feed
