import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Side from './pages/Side/Side'
import { ThemeStorage } from './ThemeContext'
import './variables.scss'

function App() {
  return (
    <BrowserRouter>
      <ThemeStorage>
        <main>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/side" element={<Side />} />
          </Routes>
        </main>
      </ThemeStorage>
    </BrowserRouter>
  )
}

export default App
