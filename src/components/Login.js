import React from 'react'
import './Login.css'
import './Body.css'

import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  return (
    <div className='body'>

        <nav className='nav-wrapper' style={{backgroundColor:"#fff"}}>
          <div>
            <p className='heading'>E-Buy</p>
          </div>
          <div>
            <ul className='nav-items'>
              <li className='item1' onClick={()=>{navigate("/")}}>Home</li>
              <li className='items item' onClick={()=>{navigate("/product")}} >Products</li>
              <li className='items item' onClick={()=>{navigate("/contact")}}>Contact Us</li>

            </ul>
          </div>
          <div>
            <button onClick={()=>{navigate("/login")}} className='btn'><img src='https://cdn-icons-png.flaticon.com/512/54/54874.png' style={{width:"20px"}}/>Login</button>
            <button onClick={()=>{navigate("/cart")}} className='btn'><img style={{width:"22px"}} src="https://pic.onlinewebfonts.com/thumbnails/icons_564248.svg" />Cart(0) </button>
          </div>

        </nav>

        <form className='form '>
            <span className='signin'>Sign In</span><br/>
            <div>
            <div>
            <input className='form-item' type='email' placeholder='email address'  />
            </div>
            <div>
            <input className='form-item' type='password' placeholder='password' />
            </div>
            <div className='for-item'>
            <input  type='checkbox' />
            <span> Remember password</span>
            </div>
            <button className='form-item button' type='submit'>SIGN IN </button>
            <div className='hl'></div>
            <button className='form-item button btn1' type='submit'>SIGN IN WITH GOOGLE</button>
            <button className='form-item button btn2' type='submit'>SIGN IN WITH FACEBOOK</button>
            </div>
            

        </form>
    </div>
  )
}

export default Login;