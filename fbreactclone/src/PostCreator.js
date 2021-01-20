import React, {useState} from 'react';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './PostCreator.css';

function PostCreator() {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        setInput('');
    };

    return (
        <div className='postcreator'>
            <div className='postcreator_top'>
                <Avatar />
                <form>
                    <input
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`What's on your mind?`}
                    />
                    <button onClick={handleSubmit} type='submit'></button>
                </form>
            </div>

            <div className='postcreator_bottom'>
                <div className='live_video_button pcb_button'><VideocamIcon style={{color: 'red'}}/><h4>Live Video</h4></div>
                <div className='photo_video_button pcb_button'><PhotoLibraryIcon style={{color: 'green'}}/><h4>Photo/Video</h4></div>
                <div className='feeling_butt pcb_button'><InsertEmoticonIcon style={{color: 'yellow'}}/><h4>Feeling/Activity</h4></div>
            </div>
        </div>
    )
}

export default PostCreator
