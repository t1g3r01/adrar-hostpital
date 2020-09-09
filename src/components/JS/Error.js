import React,{useState} from "react";
import { AlertTitle, Alert } from "@material-ui/lab";
import {Button,Collapse} from '@material-ui/core'
import "../CSS/Error.css";
function Error({errorMessage, showAlert=true}) {
    const [collapsed, setCollapsed] = useState(true)
  return (
    <div className="error">
      <Collapse in={collapsed}>
      <Alert
        action={
          <Button
          onClick={()=>setCollapsed(false)}
          color="inherit" size="small">
            x
          </Button>
        }
        severity="error"
      >
        {
            errorMessage
        }
      </Alert>
      </Collapse>
    </div>
  );
}

export default Error;
