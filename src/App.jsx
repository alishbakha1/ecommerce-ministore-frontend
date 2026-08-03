import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/pages/cart'
import Login from './components/auth/Login'
import UseState from './components/pages/UseState'
import UseEffects from './components/pages/UseEffects'
import Contact from './components/pages/contact'
import Register from './components/auth/Register'
import Checkout from "./components/pages/Checkout";

function App() {

  let siteName = "Ecommerce Mini Store";
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>

        <Header
          title={siteName}
          count={count}
        />

        <Routes>

          {/* ✅ Sirf ye line change hui */}
          <Route
            path='/'
            element={<Home count={count} setCount={setCount} />}
          />

          {/* ✅ Sirf ye line change hui */}
          <Route
            path='/shop'
            element={<Shop count={count} setCount={setCount} />}
          />

          <Route path='/cart' element={<Cart setCount={setCount} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/state' element={<UseState />} />
          <Route path='/effect' element={<UseEffects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>

        <Footer title={siteName} />

      </BrowserRouter>
    </>
  )
}

export default App