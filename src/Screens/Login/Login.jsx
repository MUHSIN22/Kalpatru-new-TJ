import React from "react";
import "./Login.css";
import CustomInputs from "../../Components/Inputs/Input";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="Login-Container">
      <div className="Login-Block">
        <div className="Block-Image">
          <img src="/images/Login-image.png" alt="" />
          <h3 className="section-title2">Welcome to our website</h3>
        </div>
        <div className="Block-inputs">
          <div className="Inputs-Col">
            <div className="Register-btn">
              <p className="section-para">Don’t have an account?</p>
              <Link to="/signup">Register</Link>
            </div>{" "}
            <h3 className="section-title2">Welcome!</h3>
            <CustomInputs
              label="User Id"
              name="Name"
              placeholder="John Doe"
              width={100}
              type="text"
            />
            <CustomInputs
              label="Enter Password"
              name="password"
              placeholder="*******"
              width={100}
              type="password"
            />
            <div className="Forget-Pass">
              <Link to="/">Forgot Password?</Link>
            </div>
            <div className="Login-btn">
              <button className="L-Button">Login</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Start-Investing-Container">
        <div className="Investing-Card">
          <img src="/images/CA-image.png" alt="" />
          <h4>Create an Account</h4>
        </div>
        <div className="Investing-Card">
          <img src="/images/FYA-image.png" alt="" />
          <h4>Fund Your Account</h4>
        </div>
        <div className="Investing-Card">
          <img src="/images/IC-image.png" alt="" />
          <h4>Invest Conveniently</h4>
        </div>
      </div>
      <div className="Documents-Col">
        <h3 className="section-title2">
          Please ensure to keep following documents ready before proceeding
        </h3>
        <div className="Documents-Row">
          <div className="Document-Row-CheckBox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Pan card">Pan card</label>
          </div>
          <div className="Document-Row-CheckBox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Pan card">Aadhar card</label>
          </div>
          <div className="Document-Row-CheckBox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Pan card">Cheque</label>
          </div>
        </div>
        <div className="Documents-Row">
          <div className="Document-Row-CheckBox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Pan card">Bank Statement</label>
          </div>
          <div className="Document-Row-CheckBox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Pan card">Photograph</label>
          </div>
          <div className="Document-Row-CheckBox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Pan card">Signature Scan</label>
          </div>
        </div>
      </div>
    </div>
  );
}
