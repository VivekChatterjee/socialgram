import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  // const BASE_URL =
  //   process.env.NODE_ENV === "production"
  //     ? `https://rest-api-socialgram.onrender.com`
  //     : `http://localhost:8800`;
  const BASE_URL =
    process.env.NODE_ENV === "dev"
      ? `https://rest-api-socialgram.onrender.com`
      : ``;

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        // await axios.post("/auth/register", user);
        // await axios.post(`${BASE_URL}/auth/register`, user);
        console.log(BASE_URL);
        console.log("env file=", process.env.NODE_ENV);
        await axios.post(`${BASE_URL}/api/auth/register`, user);
        history.push("/login");
        <Link to={`/login`}></Link>;
      } catch (err) {
        console.log("env file=", process.env.NODE_ENV);
        console.log(`An Error Occured = `, err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Socialgram</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to={`/login`}>
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
