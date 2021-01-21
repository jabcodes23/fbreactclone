import React from 'react';
import PostCreator from './PostCreator';
import Post from './Post';
import './Feed.css';

function Feed() {
    return (
        <div className='feed'>
            <PostCreator />
            <Post
                profilePic='https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/cp0/p60x60/101587238_872232656597453_5253550240656523264_n.jpg?_nc_cat=111&ccb=2&_nc_sid=7206a8&_nc_ohc=IcP-6Rli0v8AX8QziBz&_nc_ht=scontent-iad3-1.xx&tp=27&oh=d5168fe29f949bd1a69a7ab4cc66d4cb&oe=602F31D6'
                username='jabcodes23'
                message='My first post'
                image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
                timestamp='Jan. 20, 2021 6:43PM'
            />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
