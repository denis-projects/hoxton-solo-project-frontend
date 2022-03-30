import React from 'react'
import "../posts/posts.css"
import SharePosts from '../sharedPosts/SharedPosts'

function Posts() {
    return (
        <div className='posts_container'>
            <SharePosts />
        </div>
    )
}

export default Posts