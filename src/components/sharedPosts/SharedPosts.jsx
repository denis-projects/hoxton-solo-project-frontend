import React from 'react'
import "../sharedPosts/sharedPosts.css"
import { PermMedia } from "@material-ui/icons"

function SharePosts() {
    return (
        <div className='share_container'>
            <div className="share_Wrapper">
                <div className="share_top">
                    <img src="" alt="" />
                    <input type="text" placeholder="What's in your mind?" />
                </div>
                <div className="share_options">
                    <div className="share_photo">
                        <PermMedia />
                        <span>Photo or Video</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SharePosts