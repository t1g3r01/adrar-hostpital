import React,{useState} from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "../CSS/Auth.css";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [email_error, setEmail_error] = useState(false);
    const [pss_error, setPss_error] = useState(false);

    const emailControl = (event)=>{
        console.log(event.target.value);
        if (event.target.value.length<3 || !event.target.value.includes("@"))
            setEmail_error(true);
        else setEmail_error(false);
    }
    const passwordControl = (event)=>{
        console.log(event.target.value);
        if (event.target.value.length<3)
            setPss_error(true);
        else setPss_error(false);
    }
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
      <Button variant="contained" color="secondary">
        Login
      </Button>
    </div>
  );
}

export default Login;
