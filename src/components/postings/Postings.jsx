import React from 'react'
import "../postings/postings.css"
import { MoreVert } from "@material-ui/icons"


function Posting() {
    return (
        <div className='posting'>
            <div className="posting_wrapper">
                <div className="posting_info">
                    <div className="posting_user">
                        <img src="" alt="" />
                        <span className='post_username'>Denis</span>
                        <span className='timePost'>1 hour ago</span>
                    </div>
                    <div className='posting_options'>
                        <MoreVert />
                    </div>
                </div>
                <div className="posting_content">
                    <span>It is a beautiful day today </span>
                    <img src="" alt="" />
                </div>
                <div className='posting_options'>
                    <div>
                        {/* <FavoriteIcon />
                        <ThumbUpIcon /> */}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Posting