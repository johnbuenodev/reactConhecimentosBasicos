import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('test ola mundo', () => {
  render(<App />);
  const textInView = screen.getByText(/Ola mundo/i);
  expect(textInView).toBeInTheDocument();
});

test('test ABC', () => {
  render(<App />);
  const textInView2 = screen.getByText(/ABC/i);
  expect(textInView2).toBeInTheDocument();
});
