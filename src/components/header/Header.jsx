import "../header/header.css"
import React from 'react'
import { Chat, Notifications, Person, Search } from "@material-ui/icons"

function Header() {
    return (
        <div className="header_Container">
            <div className="header_leftSide">
                <span>AlBOOK</span>
            </div>

            <div className="header_searchbar">
                <div className="searchbar_section">
                    <Search />
                    <input type="text" placeholder="Search for Friends or Posts" className="searchInput" />
                </div>
            </div>

            <div className="header_rightSide">
                <div className="header_links">
                    <span>Homepage</span>
                    <span>Timeline</span>
                </div>
                <div className="header_iconsContainer">
                    <div className="header_icons">
                        <Person />
                        <span>1</span>
                    </div>
                    <div className="header_icons">
                        <Chat />
                        <span>1</span>
                    </div>
                    <div className="header_icons">
                        <Notifications />
                        <span>1</span>
                    </div>
                </div>
                <div className="header_userImage">
                    <img src="" alt="" />
                </div>

            </div>

        </div>
    )
}

export default Header