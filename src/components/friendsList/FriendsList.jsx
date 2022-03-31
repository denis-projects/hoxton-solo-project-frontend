import React from 'react'
import "../friendsList/friendsList.css"


function FriendsList({ user }) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.userName}</span>
        </li>
    )
}

export default FriendsList