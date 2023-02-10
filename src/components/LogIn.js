import React from 'react'

const LogIn = () => {
  return (
    <div>
        <form action="index.html" className="sign-in-form" autocomplete="off">
                        <div className="logo">
                            <a href="home.html"><img src="images/su_alt.png" alt="TDL iON" /></a>
                        </div>

                        <div className="heading">
                            <h2>Welcome Back</h2>
                            <h6>Not registered yet?</h6>
                            <a href="#0" className="toggle">Sign Up</a>
                        </div>

                        <div className="start-form">
                           <div className="input-wrap">
                                <input
                                type="text"
                                minlength="15"
                                className="input-field"
                                autocomplete="off"
                                required
                                />
                                <label>Username</label>

                           </div> 

                           <div className="input-wrap">
                            <input
                            type="password"
                            minlength="8"
                            className="input-field"
                            autocomplete="off"
                            required
                            />
                            <label>Password</label>

                       </div> 

                       <input type="submit" value="Sign In" className="sign-btn" />
                       <p className="text">
                        Forgot Password or your login details?
                        <a href="#0">Get Help</a> signing in
                       </p>
                        </div>
                    </form>
    </div>
  )
}

export default LogIn