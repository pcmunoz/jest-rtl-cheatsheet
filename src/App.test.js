import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Jest-React Testing Library cheat sheet");
  expect(linkElement).toBeInTheDocument();
});
