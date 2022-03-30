import React from 'react'
import Posting from '../postings/postings'
import "../posts/posts.css"
import SharePosts from '../sharedPosts/SharedPosts'
import { PostsData } from "../../../src/Template.jsx"

function Posts() {
    return (
        <div className='posts_container'>
            <SharePosts />
            {PostsData.map((p) => (
                <Posting key={p.id} posting={p} />
            ))}

        </div>
    )
}

export default Posts