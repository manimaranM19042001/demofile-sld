import { render, screen } from '@testing-library/react';
import App from './App';
import Curren from './Curren'


test('renders learn react link', () => {
  render(
  <App />
  // <Curren/>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
