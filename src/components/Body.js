import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import './Body.css'
import { useNavigate } from 'react-router-dom'

const Body = () => {
    const navigate=useNavigate();
    const [card,setCard]=useState([]);  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://dummyjson.com/products');
          setCard(response.data);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    

  return (
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
            <button onClick={()=>{navigate("/cart")}} className='btn'><img style={{width:"22px"}} src="https://pic.onlinewebfonts.com/thumbnails/icons_564248.svg" />Cart(0)</button>

          </div>

        </nav>
        {/* image part*/}
        <div>
            <div>
              <div>
                <img className='image' src="https://opencart.templatemela.com/OPC10/OPC100247/OPC4/image/cache/catalog/Main-Banner-2-1903x700.jpg"  alt="image" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>

        {/* products*/}
        <div className='prod-container'>
          <div>
            <p className='heading1'>Products</p>
          </div>
          
              
          <div className="grid-container">
            {card.products?.map((ele) => (
              <div key={ele.id} className="grid-item">
                <img src={ele.thumbnail} alt={ele.title} />
                <h5>{ele.title}</h5>
                <p>${ele.price}</p>
                <div>                  
                    <button onClick={()=>{navigate('/prodView')}} className='button1'>View</button>
                    <button onClick={()=>{navigate("/cart")}} className='button1'>AddToCart</button>
                </div>
                
              </div>
            ))}
          </div>
          
          
          
      </div>
        














        
    </div>

      
  
  );
}

export default Body