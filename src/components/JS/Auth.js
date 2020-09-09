import React, { useState } from "react";
import { Collapse, Switch, Container, Card } from "@material-ui/core";
import "../CSS/Auth.css";
import Login from "./Login";
import SignUP from "./SignUp";
import Error from './Error';
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
        </div>
        <div className="title">
          <h1 className="title_content"> Adrar Hospital</h1>
          <br />
          <br />
          <br />
          <br />
          <div className="switch">
            <h2
              style={
                login
                  ? {
                      fontWeight: "bolder",
                    }
                  : {
                    fontWeight: "normal",
                  }
              }
            >
              Sign In
            </h2>
            <Switch
              onChange={changeLoginState}
              color="default"
              inputProps={{ "aria-label": "Hello" }}
            />
            <h2
              style={
                !login
                  ? {
                      fontWeight: "bolder",
                    }
                  :{
                    fontWeight: "normal",
                  }
              }
            >
              Sign Up
            </h2>
          </div>
        </div>

        
      </div>
      
    </Collapse>
  );
}

export default Auth;
