var YourComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* -------------- CSS File for form ---------------- */}
          <link rel="stylesheet" href="form.css" />
          {/* --------- Boxicons CSS icons --------- */}
          <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
          <main>
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
                      <a href="#" className="toggle">Sign Up</a>
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
                        <a href="#">Get Help</a> signing in
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
                      <a href="#" className="toggle">Sign In</a>
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
                        By signing up, I agree to the <a href="#">Terms of Services</a> and
                        <a href="#">Privacy Policies</a>
                      </p>
                    </div>
                  </form>
                </div>
                <div className="carousel">
                  <div className="images-wrapper">
                    <img src="images/image1.png" className="image img-1 show" alt />
                    <img src="images/image2.png" className="image img-2" alt />
                    <img src="images/image3.png" className="image img-3" alt />
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
          </main>
          {/* ---------------- JS File for form --------------------- */}
        </div>
      );
    }
  });