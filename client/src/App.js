import './App.css';
import LogIn from './components/LogIn';
import Register from './components/Register';
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
  

  async function signUp(){

    //event.preventDefault()

    let registered = {username:registerUname, email:registerEmail, password:registerPassword}

    await axios.post(`http://localhost:4000/authRegister`, registered)
    .then((res) => {
      //const persons = res.data;
      console.log(res.data)
     
    })
  }


  return (
    <div className="App">

      <Router>
        <Routes>

        <Route path='/register' element={<Register signUp={signUp} updateRegUname={updateRegUname} updateRegEmail={updateRegEmail} updateRegPassword={updateRegPassword}/>}>
          
        </Route>
      
      <Route path="/login" element={<LogIn/>}>
        
      </Route>

      </Routes>

      </Router>
    </div>
  );
}

export default App;
