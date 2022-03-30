import React from 'react'
import Header from '../../components/header/Header'
import RightBar from '../../components/rightBar/RightBar'
import "../home/home.css"
import LeftOptions from '../../components/leftOptions/LeftOptions'
import Posts from "../../components/posts/Posts"

function Home() {
    return (
        <div>
            <Header />
            <LeftOptions />
            <Posts />
            <RightBar />
        </div>
    )
}

export default Home