import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/styles";
import "../CSS/Auth.css";
import validateField from '../../services/validators';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email_error, setEmail_error] = useState(false);
  const [pss_error, setPss_error] = useState(false);

  const emailControl = (event) => {
    console.log(event.target.value);
    if (event.target.value.length < 3 || !event.target.value.includes("@"))
      setEmail_error(true);
    else {
      setEmail_error(false);
      setEmail(event.target.value);
    }
  };
  const passwordControl = (event) => {
    console.log(event.target.value);
    if (event.target.value.length < 3) setPss_error(true);
    else {
      setPss_error(false);
      setPassword(event.target.value);
    }
  };

  const handleLogin = () => {
    if (validateField("email", email) && validateField("password", password)) {
      console.log("ready to sign in dude");
    } else {
      alert("Please Check The Fields");
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form className="login-form">
        <TextField
          error={email_error}
          required
          label="Email"
          placeholder="example@email.com"
          helperText="Enter Your Email"
          onChange={emailControl}
        />
        <TextField
          error={pss_error}
          required
          label="Password"
          placeholder="*******"
          helperText="Enter Your Password"
          onChange={passwordControl}
          type="password"
        />
      </form>
      <Button onClick={handleLogin} variant="contained" color="secondary">
        Login
      </Button>
    </div>
  );
}

export default Login;
