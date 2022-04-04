import { Chat, DonutLarge, MoreVert } from '@material-ui/icons'
import React from 'react'
import "./addNewChat.css"
import { Avatar, IconButton } from '@material-ui/core'

function AddNewChat() {
    return (
        <div className='addNewChat_div'>
            <div className="newChatUser">
                <div className='newChatUser_photo'>
                    <Avatar />
                </div>
                <div className='newChatUser_options'>
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="newChatFriends">Friends List</div>
        </div>
    )
}

export default AddNewChat