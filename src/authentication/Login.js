import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
    const handleSubmit = async () => {
        await signInWithPopup(auth, provider)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      return (
        <div className="login-container">
          <div className="login-content">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Elphinstone_College_crest.svg/1200px-Elphinstone_College_crest.svg.png"
              alt="logo"
            />
            <button onClick={handleSubmit} className="btn-login">
              Login in with Google
            </button>
            <div className="login__desc">
              <p>A Place to Share knowledge and better understand the world</p>
              <p style={{ color: "royalblue", fontSize: "25px" }}>
                Created by{" "}
              </p>
              <h3>IFFAT NAAZ KHAN </h3>
              
            </div>
          </div>
        </div>
      );
    }

export default Login;