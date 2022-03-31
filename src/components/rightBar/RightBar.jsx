import React from 'react'
import "../rightBar/rightbar.css"

function RightBar() {
    return (
        <div className='right_container'>
            <div className="right_birthday">
                <img src="" alt="" />
                <span>Ed has birthday today</span>
            </div>
            <div className='ads_container'>
                <img src="" alt="" />
                <h3>Online Friends</h3>
                <ul className='onlineFrinedsList'>
                    <li>Edi Rama</li>
                </ul>
            </div>
        </div>

    )
}

export default RightBar