import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContext } from '../../ThemeContext'
import Side from './Side'

test('Check if force is correct', async () => {
  const name = 'Luke'
  render(
    <ThemeContext.Provider
      value={{
        forceSide: { theme: 'light', name },
        setForceSide: () => null,
        getForceSide: () => null,
        loading: false,
      }}
    >
      <Side />
    </ThemeContext.Provider>,
    { wrapper: BrowserRouter },
  )
  const textElement = await screen.findByText(name)
  expect(textElement).toBeInTheDocument()
})

test('Click on Choose your path button should be disabled', async () => {
  const name = 'Luke'
  render(
    <ThemeContext.Provider
      value={{
        forceSide: { theme: 'light', name },
        setForceSide: () => null,
        getForceSide: () => null,
        loading: true,
      }}
    >
      <Side />
    </ThemeContext.Provider>,
    { wrapper: BrowserRouter },
  )
  const buttonElement = await screen.findByText(/Padawan/i)
  userEvent.click(buttonElement)
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})

test('Click on back btn should return to Home', async () => {
  const name = 'Darth Vader'
  render(
    <ThemeContext.Provider
      value={{
        forceSide: { theme: 'light', name },
        setForceSide: () => null,
        getForceSide: () => null,
        loading: false,
      }}
    >
      <Side />
    </ThemeContext.Provider>,
    { wrapper: BrowserRouter },
  )
  const buttonElement = await screen.findByText(/back/i)
  userEvent.click(buttonElement)
  expect(window.location.pathname).toContain('/')
})
