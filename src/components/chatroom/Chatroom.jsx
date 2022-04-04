import React from 'react'
import "./chatroom.css"
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'

function Chatroom() {
    return (
        <div className='chat'>
            <div className='chatHeader'>
                <Avatar />
                <div className="chatHeader_info">
                    <h3>Room name</h3>
                    <p>last seen...</p>
                </div>
                <div className='chatHeader_right'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>

        </div>
    )
}

export default Chatroom