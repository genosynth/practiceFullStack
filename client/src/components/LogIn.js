import React, {useRef} from 'react'

export default function LogIn({updateLoginUname, updateLoginPassword, logIn}) {

  const uname = useRef()
  const password = useRef()

  return (
    <div>
        <form>

            <input ref={uname} type="text" placeholder='Username' required onChange={()=>{
              updateLoginUname(uname.current.value)
            }}></input>
            <input ref={password} type="password" placeholder="Password" required onChange={()=>{
              updateLoginPassword(password.current.value)
            }}></input>
            <button type='submit' onClick={()=>{logIn()}}>Log In</button>
        </form>
    </div>
  )
}
