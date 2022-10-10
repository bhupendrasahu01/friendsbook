import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import RightSide from '../RightSide/RightSide'

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h2>FriendsBook</h2>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <LogIn/>

    </div>
  );
};
function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
              <Link to="/">
        <button className="button infoButton" type="submit">Login</button>
        </Link>
          </div>
        </form>
      </div>
    );
  }


export default Auth;
