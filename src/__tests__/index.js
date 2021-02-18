import { fireEvent, render, screen, waitFor, waitForElement } from '@testing-library/react';
import App from '../App';

function setup() {
  const observe = jest.fn();
  const disconnect = jest.fn();
  window.IntersectionObserver = jest.fn(function() {
      this.observe = observe;
      this.disconnect = disconnect;
  });
}

test('renders without crashing', async () => {
    setup();

    render(<App />);
    const linkElement = await screen.findByText(/Última búsqueda/i);
    expect(linkElement).toBeInTheDocument();
  });

/*test('home works as expected', async () => {
    setup();

    const {container} = render(<App />);
    const gifLink = await waitFor(() => container.querySelector('.Gif'));
    expect(gifLink).toBeVisible();
});*/

test('search form could be used', async () => {
    setup();

    render(<App />);
    const input = await screen.findByRole('textbox');
    const button = await screen.findByRole('button');
    //const form = await screen.findByRole('form');

    fireEvent.change(input, { target: { value: 'Matrix' } });
    fireEvent.click(button);
    //fireEvent.submit(form);

    const title = await screen.findByText('Matrix');
    expect(title).toBeVisible();
});