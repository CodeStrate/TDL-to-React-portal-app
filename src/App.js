import './App.css';


function App() {
  return (
    <div className="container">
            <i className="bx bx-moon toggle-btn" />
            <div className="inner-box">
              <div className="forms-wrap">
                <form action="index.html" className="sign-in-form" autoComplete="off">
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
                      <input type="text" minLength={15} className="input-field" autoComplete="off" required />
                      <label>Username</label>
                    </div> 
                    <div className="input-wrap">
                      <input type="password" minLength={8} className="input-field" autoComplete="off" required />
                      <label>Password</label>
                    </div> 
                    <input type="submit" defaultValue="Sign In" className="sign-btn" />
                    <p className="text">
                      Forgot Password or your login details?
                      <a href="#0">Get Help</a> signing in
                    </p>
                  </div>
                </form>
                <form action="index.html" className="sign-up-form" autoComplete="off">
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
                      <input type="text" minLength={15} className="input-field" autoComplete="off" required />
                      <label>Username</label>
                    </div>
                    <div className="input-wrap">
                      <input type="email" className="input-field" autoComplete="off" required />
                      <label>Email</label>
                    </div>
                    <div className="input-wrap">
                      <input type="password" minLength={8} className="input-field" autoComplete="off" required />
                      <label>Password</label>
                    </div> 
                    <input type="submit" defaultValue="Sign Up" className="sign-btn" />
                    <p className="text">
                      By signing up, I agree to the <a href="#0">Terms of Services</a> and
                      <a href="#0">Privacy Policies</a>
                    </p>
                  </div>
                </form>
              </div>
              <div className="carousel">
                <div className="images-wrapper">
                  <img src="images/image1.png" className="image img-1 show" alt='caro-1' />
                  <img src="images/image2.png" className="image img-2" alt='caro-2' />
                  <img src="images/image3.png" className="image img-3" alt='caro-3' />
                </div>
                <div className="text-slider">
                  <div className="text-wrap">
                    <div className="text-group">
                      <h2>Choose from a variety of courses</h2>
                      <h2>Keep track of your progress</h2>
                      <h2>Interact with the teachers directly</h2>
                    </div>
                  </div>
                  <div className="bullets">
                    <span className="active" data-value={1} />
                    <span data-value={2} />
                    <span data-value={3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}

export default App;
