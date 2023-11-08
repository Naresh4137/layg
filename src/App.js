import React from 'react'
import Body from './components/Body'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Contact from './components/Contact'
import Products from './components/Products'
import Cart from './components/Cart'
import ProdView from './components/ProdView'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product' element={<Products/>}/>
          <Route path='/cart' element={< Cart/>}/>
          <Route path='/prodView' element={<ProdView/>}/>         
        </Routes> 
      </Router>

      
    </div>
  )
}

export default App
