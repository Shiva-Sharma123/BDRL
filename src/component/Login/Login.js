import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigation = useNavigate()
  const handlerSinIn = (e) =>{
    e.preventDefault();
    alert("Login Successfully");
    localStorage.setItem("token_tr",JSON.stringify("abc"))
    navigation("/app/overview")
  }
  return (
    <>
    <div className="admin">
    <div className="admin_1">
      <div className="img1">
        <img src="images/Frame 1321314952.png" alt="" />
      </div>
      <div className="form_1 form_11">
        <img
          src="images/https___lottiefiles.com_animations_login-w8QV5Bdxgy.gif"
          alt=""
        />
      </div>
    </div>
    <div className="form" >
      <div className="form_1 form_12">
      <form onSubmit={handlerSinIn}>
        <h1>Login</h1>
        <div className="input_box">
          <div className="login">Login Id</div>
          <input type="text" placeholder="username" required />
        </div>
        <div className="input_box">
          <div className="login">password</div>
          <input type="text" placeholder="password" />
        </div>
        <div className="Remember-forget">
          <label><input type="checkbox" name="" />Remember me </label>
          <a href="">Forgot Password ?</a>
        </div>
        <div className="btn">
           <button className="button" type='submit'>Login</button>
        </div>
      </form>
      </div>
    </div>
  </div>
  </>
  )
}

export default Login