import React from 'react'
import "../sharedPosts/sharedPosts.css"
import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons"



function SharePosts() {
    return (
        <div className='share_container'>
            <div className="share_Wrapper">
                <div className="share_top">
                    <img className='profilePicture' src="/Assets/MilanSkrinar.jpg" alt="" />
                    <input type="text" placeholder="What's in your mind?" className='shareInput' />
                </div>
                <div className="share_options">
                    <div className="share_option">
                        <PermMedia htmlColor='red' />
                        <span>Photo or Video</span>
                    </div>
                    <div className="share_option">
                        <Label htmlColor='blue' />
                        <span>Tag</span>
                    </div>
                    <div className="share_option">
                        <Room htmlColor='green' />
                        <span>Location</span>
                    </div>
                    <div className="share_option">
                        <EmojiEmotions htmlColor='gold' />
                        <span>Feelings</span>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>


            </div>
        </div>
    )
}

export default SharePosts