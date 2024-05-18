import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import PageNotFound from './Pages/PageNotFound'
function App() {
 
  return (
    <>
     
     <Header/>
     <Routes>
     <Route path={'/'} element={<Home/>} />
     <Route path={'*'} element={<Navigate to={'/'}/>}/>
     <Route path={'wishlist'} element={<Wishlist/>} />
     <Route path={'cart'} element={<Cart/>} />
     <Route path={'pagenotfound'} element={<PageNotFound/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
