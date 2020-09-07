import React, { useState } from "react";
import { Collapse, Switch, Container, Card } from "@material-ui/core";
import "../CSS/Auth.css";
import Login from "./Login";
import SignUP from "./SignUp";
function Auth({ collapsed }) {
  const [login, setLogin] = useState(true);
  const changeLoginState = () => {
    setLogin(!login);
  };

  return (
    <Collapse in={collapsed}>
      <div className="auth_container">
        <div className="auth">
          <div className="auth_content">
            <Card>{login ? <Login /> : <SignUP />}</Card>
          </div>

          <div className="switch">
            <Switch
              onChange={changeLoginState}
              color="default"
              inputProps={{ "aria-label": "Hello" }}
            />
            <h3>Sign In |==| Sign Up</h3>
          </div>
        </div>
        <div className="title">
          <h1 className="title_content"> Adrar Hospital</h1>
        </div>
      </div>
    </Collapse>
  );
}

export default Auth;
