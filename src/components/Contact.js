import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'
import './Body'
const Contact = () => {
    const navigate=useNavigate();
  return (
    <div>
        <nav className='nav-wrapper' style={{backgroundColor:"#eee"}}>
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
            <button onClick={()=>{navigate("/cart")}} className='btn'><img style={{width:"22px"}} src="https://pic.onlinewebfonts.com/thumbnails/icons_564248.svg" />Cart</button>
          </div>

        </nav>
        <div className='container1'>
            <div className='content1'>
                <div>
                    <h4>E-buy</h4>
                    <p>Our website allows people to buy products over the internet rather than at a brick-and-mortar location.</p>
                </div>
                <div className='list-items'>
                    <h4>Useful Links</h4>
                    <ul>
                        <li>Pricing</li>
                        <li>Settings</li>
                        <li>Orders</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>Hyderabad</p>
                    <p>naresh@gmail.com</p>
                    <p>8106650768</p>
                </div>
            </div>
            
        </div>
        <div className='footer'>
                <p>© 2021 Copyright:<span className='bold'>E-Buy</span></p>
            </div>
    </div>
  )
}

export default Contact