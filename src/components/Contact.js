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
            <button onClick={()=>{navigate("/cart")}} className='btn'><img style={{width:"22px"}} src="https://pic.onlinewebfonts.com/thumbnails/icons_564248.svg" />Cart(0)</button>
          </div>

        </nav>
        <div className='container1'>
            <div className='content1'>
                <div>
                    <h4><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScctYBPMi-fp8QlClK5mh1jN8FQUerFPSePA&usqp=CAU' style={{width:'22px'}}/>E-buy</h4>
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
                    <p><img src='https://t3.ftcdn.net/jpg/02/97/98/40/360_F_297984037_iuijYMhcLkt2nNW8niNbkvvUeOwtU8b3.jpg' style={{width:"28px"}}/>Hyderabad</p>
                    <p><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSusU9oLQNspvSAtlyYtuaMEEr7vZDevUQMTp61CQ6EScnkUbDTgGLrpV4RPszD29mXecQ&usqp=CAU' style={{width:'22px'}}/>naresh@gmail.com</p>
                    <p><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAeFBMVEX///8AAAD6+voKCgoVFRX5+fnr6+sFBQUQEBBhYWFKSko9PT3Ozs6Hh4fb29u5ubktLS0cHBwzMzOrq6tQUFCNjY3j4+PFxcV4eHi0tLRjY2NERERXV1dtbW2hoaGWlpYjIyN8fHxwcHAvLy/n5+ejo6M/Pz/S0tLNB3z3AAAEWklEQVR4nO2c63aqQAyFBQQUuYhAUaugVu37v+HhtNWFipmMWpLpyve77dq7k7klGQYDQRAEQRAEQRAEQRAEQRAEQRAEQRAE4c8SFuN8VbxRy3gKu4yCkfWFP7ep1TyIm2yPjtViRa3oAbzFfOJb19TUsvTwsvXHjYcvhi61NjzxfNpt4osFtTws3hhw0TCmFoikHMI+rJEZC1fiKHwYElufah9GxJYNzXKTYqtA+LCshFqmEjtFGVlS61SSoHxYQ/axNccZ4R9bAdII+9iaIY2wjy2sEfax9Y41sqZWqmCFNTKkVqpgjTVildRSYbZoI8xjq0YbYR5bC7QR5rEV443wji0XbySl1gqDO/0aEFvoHdGydtRaQXZ/JbYqvBHesRVqGGEdWzYiiXJiRi0WZII3sqHWCoK97DZMqbWCaBxScmqtIB7eCPNCCfq263jUUmG2WCO8T42DQYn04XMv8NojnBH2qa2Bol51IqbWqSRD+TCgSu2iTikhtUwEmORWQC0SAya2WB/hT7jqdWtCrRGHOt/IPYf9g/J2xfsm0kJ13sqoBWJRZE55X0TaKKZ7Ra0PD5gVSrnX3VqAOWDmF6pLgN3dMajxDFyBR9Ta9ACSwAdqbVoAF8WNUbEFDUlErU0LYJY4e2pxWgALlwHXwxbxbe/yGUNOvz8AaWCz5rsLFBS5Z+cugfrpzAouIMWVMs/8XuIBwWVEHuUMFFxmbYtAHsI3apq4QGf2iH/6twXUK78xasJDLQQTo/ZFqMyQG3R9B6eJES8wzsRQcoh/4aoFWHs3akwiyMnKpHkC1hXfDVq7XLDX5oN7pbqFt4GcpEYUsL6JwdeJPiav7dXLIFhn1JmLEC72jlUTxdud/sBmXJGe0hIgGdEw/QR/u7oc0XRVwz//myiqvX50fx0OuxaLURCVNAue6gnA5M4/2Vve/RXnuE0IzKieW/rbDlF2rSh3+7Nd1veFANzi/5Pe1ElLzKPZZgVYVr0uZ0on1uRiT3lDP3ZqRmbZ57ionVj5ueHGjTTaiBumfQ4K5lly8D0qC/A40MWszwMo6vnSJLND7DPTNr1Wvg/wzvgU/XbrZL/nxO/3coP4LsSj9LyhKL/U8TB9b/Ox9oKEo//njZ7G+wwNCFrzXI09Gw9JdgmxyWtTUBgZLF6/eBF9BCfGnWw1oLoDv3qi9LwftqlfustTdkuGr9xRSJ9tufdv5NrMKY00h8iXHVio+1e9/EVG6FOvLxoUBtVV1Rf4UPD4Ikby/PJ1pPbwjW7O5BY2Bcn9k/FFc2TsJDw+Y4TVdxMXdz6BioFZc8vh0VnvUCu/xq4fs8LwCZqdPXKlZzTXW4RL3cWY7QN5t9JbwrbUggH2BT7EpswbKPZVjnohP2S29nZhl1dfOu8gpatW62GH9Xh2303OdaJ3Y8dZtHzfXPvxA6M6b1u4cbnIqrqIiqKuq8Ss0RAEQRAEQRAEQRAEQRAEQRAEQRAEQRBA/gGJuDQSj/KIjwAAAABJRU5ErkJggg==' style={{width:'22px'}}/>8106650768</p>
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