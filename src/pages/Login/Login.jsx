import { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Login.css";
const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  return (
    <div className="login">
      <img src={Logo} alt="Netflix Logo" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState !== "Sign In" && (
            <input type="text" placeholder="Your Name" id="Name" />
          )}

          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password"></input>
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Remeber Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState !== "Sign Up" && (
            <p>
              New to Netflix?
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          )}

          {signState !== "Sign In" && (
            <p>
              Already have account?
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
