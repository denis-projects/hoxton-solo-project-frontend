import React from 'react'
import "../leftOptions/leftOptions.css"
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@material-ui/icons"


function leftOptions() {
    return (
        <div className='options_container'>
            <div className="options_wraper">
                <ul className='options_ul'>
                    <li className='options_li'>
                        <RssFeed />
                        <span>Feed</span>
                    </li>
                    <li className='options_li'>
                        <Chat />
                        <span>Chats</span>
                    </li>
                    <li className='options_li'>
                        <PlayCircleFilledOutlined />
                        <span>Videos</span>
                    </li>
                    <li className='options_li'>
                        <Group />
                        <span>Groups</span>
                    </li>
                    <li className='options_li'>
                        <Bookmark />
                        <span>Bookmark</span>
                    </li>
                    <li className='options_li'>
                        <HelpOutline />
                        <span>Questions</span>
                    </li>
                    <li className='options_li'>
                        <WorkOutline />
                        <span>Jobs</span>
                    </li>
                    <li className='options_li'>
                        <Event />
                        <span>Events</span>
                    </li>
                    <li className='options_li'>
                        <School />
                        <span>Corses</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default leftOptions