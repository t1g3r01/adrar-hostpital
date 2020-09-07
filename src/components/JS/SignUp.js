import React,{useState} from 'react'
import { TextField, Button} from '@material-ui/core';
import '../CSS/Auth.css';
import {auth,db} from '../../services/firebase';

function SignUP() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fn_error, setFn_error] = useState(false);
    const [ls_error, setLs_error] = useState(false);
    const [email_error, setEmail_error] = useState(false);
    const [pss_error, setPss_error] = useState(false);

    const firstnameControl = (event)=>{
        console.log(event.target.value);
        if (event.target.value.length<3)
            setFn_error(true);
        else setFn_error(false);
    }
    const lastnameControl = (event)=>{
        console.log(event.target.value);
        if (event.target.value.length<3)
            setLs_error(true);
        else setLs_error(false);
    }
    const emailControl = (event)=>{
        console.log(event.target.value);
        if (event.target.value.length<3 || !event.target.value.includes("@"))
            setEmail_error(true);
        else {
            setEmail_error(false)
            setEmail(event.target.value)
        };
    }
    const passwordControl = (event)=>{
        console.log(event.target.value);
        if (event.target.value.length<3)
            setPss_error(true);
        else {
            setPss_error(false);
            setPassword(event.target.value)
        };
    }
    const handleSignUp = ()=>{
        auth.createUserWithEmailAndPassword(email,password);
        
        // auth.createUserwithEmailAndPassword(email, password)
        // .catch(function(error){
        //     var errorCode = error.code;
        //     var errorMessage = error.Message;
        //     console.log(errorCode, errorMessage);
        // })
        // .then(function (){
        //     console.log("created succces fully")
        // });
    }
    return (
        <div className="signup">
            <h1>Sign Up </h1>
            <form className="login-form">
                <TextField error ={fn_error} required label="Firstname" placeholder="Mohammed" helperText="Enter Your firstname" onChange={firstnameControl}  />
                <TextField error={ls_error} required label="Lastname" placeholder="Chiari" helperText="Enter Your lasstname" onChange={lastnameControl}/>
                <TextField error={email_error} required label="Email" placeholder="example@email.com" helperText="Enter Your Email" onChange={emailControl}/>
                <TextField error={pss_error} required label="Password"  placeholder="*******" helperText="Enter Your Password" onChange={passwordControl} type="password"/>
            </form>
            <Button variant="contained" color="primary" onClick={handleSignUp}>Sign Up</Button>
        </div>
    )
}

export default SignUP
