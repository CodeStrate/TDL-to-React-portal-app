import React from 'react'

const SignUp = () => {
  return (
    <div>
        <form action="index.html" className="sign-up-form" autocomplete="off">
                        <div className="logo">
                            <a href="home.html"><img src="images/su_alt.png" alt="TDL iON" /></a>
                        </div>

                        <div className="heading">
                            <h2>Get Started</h2>
                            <h6>Already have an Account?</h6>
                            <a href="#0" className="toggle">Sign In</a>
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
                            type="email"
                            className="input-field"
                            autocomplete="off"
                            required
                            />
                            <label>Email</label>

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

                       <input type="submit" value="Sign Up" className="sign-btn" />
                       <p className="text">
                        By signing up, I agree to the <a href="#0">Terms of Services</a> and
                        <a href="#0">Privacy Policies</a>
                       </p>
                        </div>
                    </form>
    </div>
  )
}

export default SignUp