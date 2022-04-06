import React from 'react'
import "./login.css"

function Login() {
    return (
        <div className='loginPage'>
            <div className='loginWrapper'>
                <div className='loginLeftSide'>
                    <h3 className='loginLogo'>Stay Connected</h3>
                    <span className='loginDesc'>Do not miss anything, stay connected</span>
                </div>
                <div className='loginRightSide'>
                    <div className="loginBox">
                        <form className='loginForm'>
                            <input type="text" placeholder='Enter your email' className='loginInput' />
                            <input type="password" placeholder='Enter your password' className='loginInput' />
                            <button className='loginButton'>Log in</button>
                        </form>
                        <div className='forgetPass'>
                            <span className="loginForgot">Forgot password</span>
                            <button className='loginRegisterButton'>
                                Create a New Account
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login