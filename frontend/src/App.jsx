import { useState } from 'react'

import './App.css'
import Home from './component/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NewBlog from './component/NewBlog'
import CardDetail from './component/CardDetail'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NewBlog" element={<NewBlog />} />
        <Route path="/cards/:id" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
