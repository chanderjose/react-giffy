import { render, screen } from '@testing-library/react';
import App from './App';

/*function setup() {
  const observe = jest.fn();
  const disconnect = jest.fn();
  window.IntersectionObserver = jest.fn(function() {
      this.observe = observe;
      this.disconnect = disconnect;
  });
}*/

test('renders without crashing', () => {
  //setup();

  render(<App />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
