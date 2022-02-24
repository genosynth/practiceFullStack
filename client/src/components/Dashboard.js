import React, {useEffect} from 'react'
import jwt from "jwt-decode"
import axios from "axios";

function Dashboard() {

    
    const rizultati = axios.get(`http://localhost:4000/getUsers`).then(resp => {

        console.log(resp.data);
        return resp.data[0]
     });
    
    
    const token = localStorage.getItem("token")
    if (token){
    const loggedUser = jwt(token)

  

    return (
        <div>
        <div>{loggedUser.username}</div>
        <div>{rizultati}</div>
        </div>
      )
    }



  return (
    <div>Dashboard</div>
  )
}

export default Dashboard