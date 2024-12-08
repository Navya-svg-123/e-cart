
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}   />
      <Route path='/Wishlist' element={<Wishlist/>} />
      <Route path='/cart' element={<Cart/>} />


     </Routes>
     <Footer/>
      
    </>
  )
}

export default App
