import React, { useState } from 'react'
import './Loginpopup.css'

const Loginpopup = () => {
    const[forgetPasswordState, setForgetPasswordState]=useState(false);
    const [currentState,setCurrentState]=useState("Login");
    const onForgotHandler=()=>{
      alert("password changed");
    }

    if(forgetPasswordState){
      return(
        <div className='login-popup'>
        <form action="" className="login-popup-container" >

            <div className="login-popup-title">
                <h2>Forgot </h2>
               
            </div>
            <div className="login-popup-input">
                <input type="email" placeholder='emali' required />
                <input type="password" placeholder='Previous password' required />
                <input type="password" placeholder='New password' required />
            </div>
            <button onClick={onForgotHandler}>Forgot Password</button>
             <div className="login-popup-condition">
                <input type="checkbox" required />
                <p className='para'>I aggree terms and condition and privacy policy.</p>
             </div>
             <div className='subtag'>
             {<p className='para '>Have already account?<span onClick={()=>window.location.reload()}>Login here</span></p>}
             </div>
             
             
        </form>
      
    </div>

      )
    }
    const onsubmitHandler=()=>{
      alert("Form Sucessfully submited");
    }
    

  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container" onSubmit={onsubmitHandler}>

            <div className="login-popup-title">
                <h2>{currentState}</h2>
               
            </div>
            <div className="login-popup-input">
                {currentState==="Login"?<></>:<input type="text" placeholder='Name' required />}
                
                <input type="email" placeholder='emali' required />
                <input type="password" placeholder='password' required />
            </div>
            <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
             <div className="login-popup-condition">
                <input type="checkbox" required />
                <p className='para'>I aggree terms and condition and privacy policy.</p>
             </div>
             <div className='subtag'>
             {currentState==="Login"?<p className='para '>Create account?<span onClick={()=>setCurrentState("Sign Up")}>Click here</span> OR <span onClick={()=>setForgetPasswordState(true)}>Forgot Password</span> </p>:<p className='para'> Have already account?<span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
             </div>
             
             
        </form>
      
    </div>
  )
}

export default Loginpopup
