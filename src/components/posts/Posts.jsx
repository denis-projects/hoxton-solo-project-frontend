import React from 'react'
import Posting from '../postings/postings'
import "../posts/posts.css"
import SharePosts from '../sharedPosts/SharedPosts'

function Posts() {
    return (
        <div className='posts_container'>
            <SharePosts />
            <Posting />
        </div>
    )
}

export default Posts