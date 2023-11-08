import React, { useEffect, useState } from 'react'
import './ProdView.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ProdView = () => {
   const navigate=useNavigate();
  return (
    <div>
        <div className='body'>
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
            <button onClick={()=>{navigate("/cart")}} className=' btn'><img style={{width:"22px"}} src="https://pic.onlinewebfonts.com/thumbnails/icons_564248.svg" />Cart(0)</button>

          </div>

        </nav>

        <div className="product-card">
            <div>
            <img src='https://i.dummyjson.com/data/products/2/thumbnail.jpg' alt='' className="product-image" />
            </div>
            <div  className="product-details">
            <h2></h2>
            <p style={{color:'gray',fontSize:'small'}}>ORIANZ</p>
            <strong >iPhone X</strong>
            <p className='price'>$899</p>
            <p>SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...</p>
            <div>
                <button>Buy Now</button>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NYiKnl5GtIN5gOXlmQbxyc6PdzeDGrLbTQ&usqp=CAU' style={{width:'32px'}}/>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-PYVbakqtjxl8ziRST8CxDL5D7N6WnBVVw&usqp=CAU' style={{width:'32px'}}/>

            </div>
            
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default ProdView