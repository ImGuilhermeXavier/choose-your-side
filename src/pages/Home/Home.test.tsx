import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../App'

test('Click on start button should be disabled', async () => {
  render(<App />)
  const buttonElement = await screen.findByText(/Start/i)
  userEvent.click(buttonElement)
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})

// test('Click on start button should redirect to side', async () => {
//   render(<App />)
//   const buttonElement = await screen.findByText(/Start/i)
//   userEvent.click(buttonElement)
//   await waitForElementToBeRemoved(buttonElement, { timeout: 3000 })
//   expect(window.location.pathname).toBe('/side')
// })

// test('Click on start button should display Darth Vader or Luke Skywalker', async () => {
//   render(<App />)
//   const buttonElement = await screen.findByText(/Start/i)
//   userEvent.click(buttonElement)
//   await waitForElementToBeRemoved(buttonElement, { timeout: 3000 })
//   expect(
//     screen.getByText(/(Darth Vader)|(Luke Skywalker)/i),
//   ).toBeInTheDocument()
// })
