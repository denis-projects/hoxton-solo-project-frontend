import { Avatar } from '@material-ui/core'
import React from 'react'
import "./sideBarChat.css"

function SideBarChat() {
    return (
        <div className='sideBarChat'>
            <Avatar />
            <div className='sideBarChat__info'>
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SideBarChat