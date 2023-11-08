import React from 'react'
import './Cart.css'
import './Body.css'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const navigate=useNavigate();
  return (
    <div>
        {/* navbar*/}
        <nav className='nav-wrapper'>
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




        <div className='cart body'> 
            <h5>
                Shopping Cart
            </h5>
            
            <div>
            <div className="card">  
            <div className="column">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" alt="Product Image" />
            </div>
            <div className="column">
                <h3>Iphone</h3>
                <p>Color: Grey</p>
            </div>
            <div className="column">
                <input type='number' placeholder='1' />
            </div>
            <div className="column">
                <strong>$499</strong>
            </div>
            <div className="column">
                <img style={{width:"32px"}} src='https://cdn-icons-png.flaticon.com/512/6861/6861362.png' />
            </div>
            </div>
            <div className='cartbtn'>
                <button>
                    Proceed to Buy
                </button>
            </div>
            
            
        </div>
            
        </div>

        

    </div>
  )
}

export default Cart