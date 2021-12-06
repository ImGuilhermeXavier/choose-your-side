import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Side from './pages/Side/Side'
import { ThemeStorage } from './ThemeContext'

function renderSide(side: string) {
  localStorage.setItem('side', side)
  render(
    <ThemeStorage>
      <Side />
    </ThemeStorage>,
    { wrapper: BrowserRouter },
  )
}

function renderLukeSide() {
  const lukeData = '{"theme":"light","name":"Luke Skywalker"}'
  renderSide(lukeData)
}

function renderDarthVadeSide() {
  const darthVaderData = '{"theme":"dark","name":"Darth Vader"}'
  renderSide(darthVaderData)
}

describe('Check renderer and navigation', () => {
  test('Renders lazy main page', async () => {
    render(<App />)
    const textElement = await screen.findByText(/Frontend Challenge/i)
    expect(textElement).toBeInTheDocument()
  })

  test('Renders lazy Darth Vader Side', async () => {
    renderDarthVadeSide()
    const textElement = await screen.findByText(/Darth Vader/i)
    expect(textElement).toBeInTheDocument()
  })

  test('Renders lazy Luke Skywalker Side', async () => {
    renderLukeSide()
    const textElement = await screen.findByText(/Luke Skywalker/i)
    expect(textElement).toBeInTheDocument()
  })
})

export { renderDarthVadeSide, renderLukeSide }
