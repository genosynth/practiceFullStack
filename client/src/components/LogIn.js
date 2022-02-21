import React from 'react'

export default function LogIn() {
  return (
    <div>
        <form>

            <input placeholder='Username' required></input>
            <input type="password" placeholder="Password" required></input>
            <button>Log In</button>
        </form>
    </div>
  )
}
