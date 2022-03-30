import React from 'react'
import "../sharedPosts/sharedPosts.css"
import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons"

function SharePosts() {
    return (
        <div className='share_container'>
            <div className="share_Wrapper">
                <div className="share_top">
                    <img src="" alt="" />
                    <input type="text" placeholder="What's in your mind?" />
                </div>
                <div className="share_options">
                    <div className="share_option">
                        <PermMedia />
                        <span>Photo or Video</span>
                    </div>
                    <div className="share_option">
                        <Label />
                        <span>Tag</span>
                    </div>
                    <div className="share_option">
                        <Room />
                        <span>Location</span>
                    </div>
                    <div className="share_option">
                        <EmojiEmotions htmlColor='gold' />
                        <span>Feelings</span>
                    </div>
                </div>
                <button>Share</button>

            </div>
        </div>
    )
}

export default SharePosts