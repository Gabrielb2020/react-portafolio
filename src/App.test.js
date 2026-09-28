import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the professional introduction', () => {
  render(<App />);
  expect(screen.getByText(/Hola, soy Gabriel/i)).toBeInTheDocument();
  expect(screen.getByText(/Disponible para nuevos retos/i)).toBeInTheDocument();
});
