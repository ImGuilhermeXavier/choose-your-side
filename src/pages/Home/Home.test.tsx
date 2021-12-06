import { fireEvent, render, screen } from '@testing-library/react'
import App from '../../App'

test('Click on Start', async () => {
  render(<App />)
  const buttonElement = await screen.findByText(/Start/i)
  fireEvent.click(buttonElement)
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})
