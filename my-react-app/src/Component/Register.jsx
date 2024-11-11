import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Component/Register.css";

function Register() {
  return (
    <div className="container">
      <div>
        <img src="tech.jpg" alt="" style={{ height: "600px", width: "100%" }} />
      </div>
      <div className="form-div">
        <h1>Create an account</h1>
        <p>
          ALready have an account? <a href="#">Log in</a>
        </p>
        <br />
        <form id="form-container" action="">
          <div id="gap">
            <div className="form-header">
              <input
                type="text"
                name="firstname"
                id=""
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastname"
                id=""
                placeholder="Last Name"
              />
            </div>
          </div>
          <br />
          <div className="form-two">
          <input type="email" name="email" id="form" placeholder="Email" />
          <br />
          <br />
          <input
            type="password"
            name="password"
            id="form"
            placeholder="Enter your password"
          />
          <br />
          <br />
          <input type="checkbox" name="" id="" /> I agrees to the{" "}
          </div>
          <a href="#">Terms & Condition</a>
          <br />
          <button className="signup-btn">Create Account</button>
          <hr /> Or register with <hr />
          <button>Google</button>
          <button>Apple</button>
        </form>
      </div>

      {/* <div className="inner-container">
        <div>
          
        </div>
        
      </div> */}
    </div>
  );
}
export default Register;
