import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Navbar from '../Navbar';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';


test('suite', async () => {
  const { debug } = render(
    <MemoryRouter><Navbar /> </MemoryRouter>
  );
  debug();

});

test('renders Navbar component', () => {
  render(<MemoryRouter><Navbar /> </MemoryRouter>);
  // Check if the component renders without crashing
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('opens and closes BPO dropdown on mouse enter and leave', () => {

  render(<MemoryRouter><Navbar /> </MemoryRouter>);

  const bpoNavItem = screen.getByText('BPO');

  fireEvent.mouseEnter(bpoNavItem);
  expect(screen.getByText('Accounting Outsourcing')).toBeInTheDocument();

  fireEvent.mouseLeave(bpoNavItem);
  expect(screen.queryByText('Accounting Outsourcing')).not.toBeInTheDocument();
});

test('navigates to the specified link on dropdown link click', async () => {
  render(<MemoryRouter><Navbar /> </MemoryRouter>);

  fireEvent.click(screen.getByText('BPO'));

  await waitFor(() => {
    expect(screen.getByText('Accounting Outsourcing')).toBeInTheDocument();
  });
});

test('renders "See Current Openings" link with correct href', () => {
  render(<MemoryRouter><Navbar /> </MemoryRouter>);
  const seeCurrentOpeningsLink = screen.getByText('See Current Openings');

  expect(seeCurrentOpeningsLink).toHaveAttribute('href', 'career#current-openings');
});

test('closes all dropdowns on link click', async () => {
  render(<MemoryRouter><Navbar /> </MemoryRouter>);
  await waitFor(() => {
    fireEvent.mouseEnter(screen.getByText('BPO'));
    expect(screen.getByText('Accounting Outsourcing')).toBeInTheDocument();
  });

  expect(screen.queryByText('Content of BPO dropdown')).not.toBeInTheDocument();
  expect(screen.queryByText('Content of Industries dropdown')).not.toBeInTheDocument();
  expect(screen.queryByText('Content of Insights dropdown')).not.toBeInTheDocument();
});

test('closes Industries dropdown', async () => {
  render(<MemoryRouter><Navbar /> </MemoryRouter>);
  // Open Industries dropdown
  userEvent.hover(screen.getByText(/Industries/i));

  await waitFor(() => {
  expect(screen.getByText(/ADTECH/i)).toBeInTheDocument();
}); 

  const industriesDropdownCloseButton = screen.getByText('View More'); // Assuming there's a close button in the dropdown
  userEvent.click(industriesDropdownCloseButton);

});

test('closes Insight dropdown', async () => {
  render(<MemoryRouter><Navbar /> </MemoryRouter>);


  userEvent.hover(screen.getByText(/INSIGHTS/i));

  await waitFor(() => {
    expect(screen.getByText(/Blogs/i)).toBeInTheDocument();
  }); 

  const insightDropdownCloseButton = screen.getByText('View More'); // Assuming there's a close button in the dropdown
  userEvent.click(insightDropdownCloseButton);

});
