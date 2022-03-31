import React from 'react'
import "../postings/postings.css"
import { Users } from "../../Template.jsx"
import { MoreVert } from "@material-ui/icons"


function Posting({ posting }) {



    return (
        <div className='posting'>
            <div className="posting_wrapper">
                <div className="posting_info">
                    <div className="posting_user">
                        <img className='postProfileImg' src={Users.filter((user) => user.id === posting?.userId)[0].profilePicture} alt="" />
                        <span className='post_username'>{Users.filter((u) => u.id === posting?.userId)[0].userName}</span>
                        <span className='timePost'>{posting.date}</span>
                    </div>
                    <div className='posting_options'>
                        <MoreVert />
                    </div>
                </div>
                <div className="posting_content">
                    <span className='postCommentText'>{posting?.desc}</span>
                    <img className='postImg' src={posting?.photo} alt="" />
                </div>
                <div className='posting_options'>
                    <div>
                        {/* <FavoriteIcon />
                        <ThumbUpIcon /> */}
                        <span>{posting.like} persons like this</span>
                    </div>
                    <div>
                        <span>{posting.comment} persons comment the post</span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Posting