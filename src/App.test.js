import { render, screen } from '@testing-library/react'
import Result from './components/Result'

test('result should be 5 with n 1', () => {
  render(<Result n={1} />)
  const resultEl = screen.getByTestId('result-serie')

  expect(resultEl).toHaveTextContent('5')
})

test('result should be 16 with n 2', () => {
  render(<Result n={2} />)
  const resultEl = screen.getByTestId('result-serie')

  expect(resultEl).toHaveTextContent('16')
})

test('result should be 31 with n 3', () => {
  render(<Result n={3} />)
  const resultEl = screen.getByTestId('result-serie')

  expect(resultEl).toHaveTextContent('31')
})

test('result should be 49 with n 4', () => {
  render(<Result n={4} />)
  const resultEl = screen.getByTestId('result-serie')

  expect(resultEl).toHaveTextContent('49')
})

test('result should be 72 with n 5', () => {
  render(<Result n={5} />)
  const resultEl = screen.getByTestId('result-serie')

  expect(resultEl).toHaveTextContent('72')
})

test('result should be 96 with n 6', () => {
  render(<Result n={6} />)
  const resultEl = screen.getByTestId('result-serie')

  expect(resultEl).toHaveTextContent('96')
})

test('result should be 125 with n 7', () => {
  render(<Result n={7} />)
  const resultEl = screen.getByTestId('result-serie')

  expect(resultEl).toHaveTextContent('125')
})

test('result should be 149 with n 8', () => {
  render(<Result n={8} />)
  const resultEl = screen.getByTestId('result-serie')

  expect(resultEl).toHaveTextContent('149')
})

test('result should be 168 with n 9', () => {
  render(<Result n={9} />)
  const resultEl = screen.getByTestId('result-serie')

  expect(resultEl).toHaveTextContent('168')
})

test('result should be 176 with n 10', () => {
  render(<Result n={10} />)
  const resultEl = screen.getByTestId('result-serie')

  expect(resultEl).toHaveTextContent('176')
})
