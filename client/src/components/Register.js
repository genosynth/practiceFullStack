import React, {useRef} from 'react'

export default function Register({signUp, updateRegUname, updateRegEmail, updateRegPassword}) {

  const uname = useRef()
  const email = useRef()
  const password = useRef()

  return (
    <div>
    <form>
        <label htmlFor='fname'>First Name </label>
        <input type="text" placeholder='Enter first name' name ="fname" required></input>

        <label htmlFor="lname">Last Name</label>
        <input type="text" placeholder='Enter last name' name ="lname" required></input>

        <label htmlFor="dob">Date Of Birth</label>
        <input type="date" placeholder='Enter date of birth' name="dob" required></input>

        <label htmlFor="uname">Username</label>
        <input ref={uname} type="text" placeholder='Enter username' name ="uname" required onChange={()=>{
          updateRegUname(uname.current.value)
        }}></input>

        <label htmlFor="email">Email</label>
        <input  ref={email} type="email" placeholder='Enter email address' name ="lname" required onChange={()=>{
          updateRegEmail(email.current.value)
        }}></input>

        <label htmlFor="password">Password</label>
        <input ref={password} type="password" placeholder="Password" name="password" required onChange={()=>{
          updateRegPassword(password.current.value)
        }}></input>

        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input type="password" placeholder="Re-Enter Password" name="passwordConfirm" required></input>

        <button type="button" onClick={()=>{signUp()}}>Register</button>
    </form>
</div>
  )
}
