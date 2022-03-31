import "../header/header.css"
import React from 'react'
import { Chat, Notifications, Person, Search } from "@material-ui/icons"




function Header() {
    return (
        <div className="header_Container">
            <div className="header_leftSide">
                <div className="logo_image">
                    <span className="logo_span">STAY CONNECTED</span>
                </div>
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
                        <Person htmlColor='white' />
                        <span className="span_notification">1</span>
                    </div>
                    <div className="header_icons">
                        <Chat htmlColor='white' />
                        <span className="span_notification">1</span>
                    </div>
                    <div className="header_icons">
                        <Notifications htmlColor='white' />
                        <span className="span_notification">1</span>
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