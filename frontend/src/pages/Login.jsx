import React, { useState } from 'react'
import './Login.css'

export default function Login() {

  const [page,setPage] = useState("SignUp")


  const handleSubmit =(e)=>{
   e.preventDefault()
  }

  return (
    <div className='login-signup'>
          
          <h1>{page === "SignUp" ? "SignUp" : "Login"}</h1>
           <hr />
          <form action="" onSubmit={handleSubmit}>
            {page === "SignUp" ? <input type="text" placeholder='Username' /> : null  }
            <input type="email" placeholder='Email' />
            <input type="Password" placeholder='Password' />
            <div className=''>
               <p>Forget Password ?</p>
               <p style={{cursor:"cursor-pointer"}} onClick={()=>{page=== "SignUp" ? setPage("login") : setPage("SignUp")}}>{page === "login" ?"Create Account" :"Login Account"}</p>
            </div>
            <button>{page === "SignUp" ? "Sigh Up" : "Sign In"}</button>
          </form>

    </div>
  )
}
