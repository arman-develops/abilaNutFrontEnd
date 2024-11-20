
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Marketplace from './views/market-place'
import Home from './views/homepage'
import About from './views/about'
import Contact from './views/contact'
import CheckoutPage from './views/checkout'
import Orders from './views/orders'
import { AuthPage } from './views/auth'

function App() {


  return (
    <>
      <Routes>
        <Route path='/'  element={<Home />} />

        <Route path='/market-place' element={<Marketplace />} />
        
        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/checkout' element={<CheckoutPage />} />

        <Route path='/orders' element={<Orders /> } />

        <Route path='/auth' element={<AuthPage />} />

      </Routes>
    </>
  )
}

export default App
