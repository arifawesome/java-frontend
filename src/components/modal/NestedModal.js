import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import {useRef, useState, useEffect} from 'react';
import axios from 'axios';
import { Password } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";


const LOGIN_URL='http://localhost:8090/customer/auth';
const REGISTER_URL='http://localhost:8090/customer/save';
const EMAIL_PHONE_REGEX = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const style = {position: "absolute", top: "50%", left: "50%",transform: "translate(-50%, -50%)",color: "white",width: 400,height: 650, bgcolor: "black",border: "2px solid #000", boxShadow: 24,pt: 2, px: 4,pb: 3};

function ChildModal() {
 

  const [email_phoneNumber, setEmail_phoneNumber] = useState('');
  const [validEmail_phoneNumber, setValidEmail_phoneNumber] = useState(false);
  const [email_phoneNumberFocus, setEmail_phoneNumberFocus] = useState(false);
  
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  
  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  




  useEffect(() => {
    const result=EMAIL_PHONE_REGEX.test(email_phoneNumber);
    console.log(result);
    console.log(email_phoneNumber);
    setValidEmail_phoneNumber(result);
  }, [email_phoneNumber])

  useEffect(() => {
    const result=PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match= password===matchPwd;
    console.log(match);
    setValidMatch(match);
  }, [password, matchPwd])

  



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = EMAIL_PHONE_REGEX.test(email_phoneNumber);
    const v2 = PWD_REGEX.test(password);
    if (!v1) {
      setErrMsg("Please enter valid email or phone number");
    }else if(!v2){
      setErrMsg('password should be 8 to 24 characters long Must include uppercase and lowercase letters, a number and a special character Allowed special characters ! @ #');
    }else if(!v1 & !v2){
      setErrMsg("Please enter valid email and password");
    }
    
    try {
        const response = await axios.post(REGISTER_URL,
            JSON.stringify({ email_phoneNumber, password }),
            {
                headers: { 'Content-Type': 'application/json' }
                
            }
        );
       
        console.log(JSON.stringify(response?.data));
        setSuccess(true);
        setErrMsg('Sign up success');
        console.log(errMsg);
        setValidEmail_phoneNumber('');
        setPassword('');
        setMatchPwd('');
    } catch (err) {
        if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 409) {
            setErrMsg('Username Taken');
        }else if (err.response?.status === 400) {
              setErrMsg('Invalid entries');
              console.log(JSON.stringify(err.response?.errors));
        } else {
            setErrMsg('Registration Failed')
        }
        
    }
}


  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Sign Up</Button>
      {success?<NestedModal condition={true}/>:
      
      <Modal hideBackdrop open={open}  onClose={handleClose}aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
         <Box sx={{ ...style, width: 500 }}>
          <Button style={{ marginLeft: 350, marginTop: 1 }} onClick={handleClose}>
            Close{" "}
          </Button>
          <img style={{ height: 100,  width: 100,  marginLeft: 1,  marginTop: 0,  display: "flex"}} src="https://logos.textgiraffe.com/logos/logo-name/Alt-designstyle-boots-o.png" alt="" />
          
          <h4 id="child-modal-title"style={{ height: 15, width: 100, marginLeft: 3,marginTop: 1,  display: "flex"}}>Sign Up</h4>
          <br/>
         
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="email_phoneNumber"
              placeholder="Email or phone number"
              autoComplete="off"
              value={email_phoneNumber}
              required
              onChange={(e) => setEmail_phoneNumber(e.target.value)}
              style={{height: 30,width: 350, display: "flex",justifyContent: "space-around",borderRadius: 10, margin: 20,alignSelf: "center",alignContent: "left",padding: 8}}
              />
            <input style={{height: 30, width: 350, width: 350,justifyContent: "space-around",borderRadius: 10, margin: 20, alignSelf: "center",alignContent: "left", padding: 8}}
              type="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              
            />
            <input
              style={{
                height: 30,width: 350, display: "flex",justifyContent: "space-around",borderRadius: 10, margin: 20,alignSelf: "center",alignContent: "left",padding: 8}}
              type="password"
              placeholder="Confirm Password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
             />
            <button
            style={{ height: 30,width: 100,  background: "red", display: "flex",justifyContent: "space-around", borderRadius: 10, color: "white", color: "white",border: "none",  margin: 20, alignSelf: "center",alignContent: "center",padding: 8,cursor: "pointer" }}>
              Sign Up
            </button>
          </form>
        </Box>
      </Modal>}
      
    </React.Fragment>
  );
}

export default function NestedModal() {
  

  const userRef = useRef();
  const errRef = useRef();

  const [email_phoneNumber, setEmail_phoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);



  
  
  useEffect(() => {
      setErrMsg('');
  }, [email_phoneNumber, password])

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = EMAIL_PHONE_REGEX.test(email_phoneNumber);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
    }
    try {
        const response = await axios.get(LOGIN_URL,
            JSON.stringify({ email_phoneNumber, password}),
            {
                headers: { 'Content-Type': 'application/json' },
              
            }
        );
        // TODO: remove console.logs before deployment
        console.log(JSON.stringify(response?.data));
        console.log(JSON.stringify(response))
        setSuccess(true);
        //clear state and controlled inputs
        setEmail_phoneNumber('');
        setPassword('');
        
    } catch (err) {
        if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 409) {
            setErrMsg('Username Taken');
        } else {
            setErrMsg('Login Failed')
        }
        errRef.current.focus();
    }
}

  return (
    <div>
      <Button onClick={handleOpen}>Sign In</Button>
      <Modal
       open={open}  onClose={handleClose}aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
        <Box sx={{ ...style, height: 500, width: 500 }}>
          <Button style={{ marginLeft: 350, marginTop: 1 }}onClick={handleClose} >
            Close{" "}
          </Button>
          <img style={{ height: 100,  width: 100,  marginLeft: 1,  marginTop: 0,  display: "flex"}} src="https://logos.textgiraffe.com/logos/logo-name/Alt-designstyle-boots-o.png" alt="" />
          
          <h4 id="child-modal-title"style={{ height: 15, width: 100, marginLeft: 3,marginTop: 1,  display: "flex"}}>Sign In</h4>
          
          <p id="child-modal-description"></p>
          <form onSubmit={handleSubmit}>
            <input
              style={{height: 30,width: 350, display: "flex",justifyContent: "space-around",borderRadius: 10, margin: 20,alignSelf: "center",alignContent: "left",padding: 8}}
              type="text"
              placeholder="Email or phone number"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail_phoneNumber(e.target.value)}
              value={email_phoneNumber}
              required
            />
            <input style={{height: 30, width: 350, width: 350,justifyContent: "space-around",borderRadius: 10, margin: 20, alignSelf: "center",alignContent: "left", padding: 8}}
              type="password"
              placeholder="Password"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button
             style={{ height: 30,width: 100,  background: "red", display: "flex",justifyContent: "space-around", borderRadius: 10, color: "white", color: "white",border: "none",  margin: 20, alignSelf: "center",alignContent: "center",padding: 8,cursor: "pointer" }}>
              Sign in
            </button >
          </form>
          <p id="parent-modal-description">New to Alt?</p> 
          <ChildModal/>
          
        </Box>
      </Modal>
    </div>
  );
}
