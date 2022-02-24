import './App.css';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter as Router,  
  Route, Routes  
} from "react-router-dom";
import React, {useState} from 'react';
import axios from "axios";

function App() {

  const [registerUname, updateRegUname] = useState("") 
  const [registerEmail, updateRegEmail] = useState("") 
  const [registerPassword, updateRegPassword] = useState("") 

  const [loginUname , updateLoginUname] = useState("")
  const [loginPassword, updateLoginPassword] = useState("")
  
  

  async function signUp(){

    //event.preventDefault()

    let registered = {username:registerUname, email:registerEmail, password:registerPassword}

    await axios.post(`http://localhost:4000/authRegister`, registered)
    .then((res) => {
      //const persons = res.data;
      console.log(res.data)
     
    })
  }

  function logIn(){

    let loggedIn = {username: loginUname, password: loginPassword}

    axios.post('http://localhost:4000/authLogin', loggedIn)
    .then((res)=>{

      if (res.data.token){
        localStorage.setItem('token', res.data.token)
        window.location.href="/dashboard"
      }
     
      console.log(res.data)
    })



  }


  return (
    <div className="App">

      <Router>
        <Routes>

        <Route path='/register' element={<Register signUp={signUp} updateRegUname={updateRegUname} updateRegEmail={updateRegEmail} updateRegPassword={updateRegPassword}/>}>
        </Route>
      
      <Route path="/login" element={<LogIn logIn={logIn} updateLoginUname={updateLoginUname} updateLoginPassword={updateLoginPassword}/>}>
      </Route>

      <Route path="/dashboard" element={<Dashboard/>}>
      </Route>

      </Routes>

      </Router>
    </div>
  );
}

export default App;
