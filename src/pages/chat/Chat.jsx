// @ts-nocheck
import React from 'react'
import AddNewChat from "../../components/addNewChat/AddNewChat.jsx"
import Chatroom from "../../components/chatroom/Chatroom.jsx"

function Chat() {
    return (
        <div className='chatContainer'>
            <AddNewChat />
            <Chatroom />
        </div>
    )
}

export default Chat