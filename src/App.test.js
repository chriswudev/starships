import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Watto's Imperial Surplus Barn/i);
  expect(linkElement).toBeInTheDocument();
});
