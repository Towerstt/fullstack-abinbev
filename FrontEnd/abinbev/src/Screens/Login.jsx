import React, { useState } from "react";
import { useHistory } from "react-router";

const url = "https://conduit.productionready.io/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = JSON.stringify({ email, password });
      const response = await fetch(`${url}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application : json",
        },
        body: newUser,
      });
      await response.json();
      const token = response.token;
      localStorage.setItem("tkn", token);
      setTimeout(() => {
        history.push("/");
      }, 1000);
    } catch (error) {
      console.log("Login Error : ", error);
    }
  };
  return (
    <form className="w-25 mx-auto mt-5" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label">Remember me</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
