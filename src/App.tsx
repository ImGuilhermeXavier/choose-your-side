import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeStorage } from './ThemeContext'
import './variables.scss'

const Home = lazy(() => import('./pages/Home/Home'))
const Side = lazy(() => import('./pages/Side/Side'))

function App() {
  return (
    <BrowserRouter>
      <ThemeStorage>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/side" element={<Side />} />
            </Routes>
          </Suspense>
        </main>
      </ThemeStorage>
    </BrowserRouter>
  )
}

export default App
