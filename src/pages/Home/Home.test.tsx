import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../App'

test('Click on Start button should be disabled', async () => {
  render(<App />)
  const buttonElement = await screen.findByText(/Start/i)
  userEvent.click(buttonElement)
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})
