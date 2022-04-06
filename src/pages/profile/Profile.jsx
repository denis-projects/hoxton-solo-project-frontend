import React from 'react'
import Header from '../../components/header/Header'
import LeftOptions from "../../components/leftOptions/LeftOptions"
import Posts from '../../components/posts/Posts'
import "./profile.css"

function Profile() {
    return (
        <div className='profileContainer'>
            < Header />
            <div className='profilePage'>
                <LeftOptions />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="Assets/post/Logo6.jpg" alt="" />
                            <img className="profileUserImg" src="Assets/person/MilanSkrinar.jpg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Milan Skrinar</h4>
                            <span className="profileInfoDesc">Wellcome to my page!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Posts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

