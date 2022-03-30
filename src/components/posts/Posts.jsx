import React from 'react'
import Postings from '../postings/postings'
import "../posts/posts.css"
import SharePosts from '../sharedPosts/SharedPosts'

function Posts() {
    return (
        <div className='posts_container'>
            <SharePosts />
            <Postings />
        </div>
    )
}

export default Posts