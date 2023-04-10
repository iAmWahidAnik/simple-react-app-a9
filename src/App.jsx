import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='min-h-[calc(100vh-140px)]'>
        <Outlet></Outlet>
      </div>
        <Footer></Footer>
    </div>
  )
}

export default App
