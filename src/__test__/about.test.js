import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import About from '../components/About';
import { MemoryRouter } from 'react-router-dom';

test('suite', async () => {
    const { debug } = render(
    <MemoryRouter><About /></MemoryRouter>
    );
    debug();

});

test('should render the component', async () => {
    const { container } = render(<MemoryRouter><About /></MemoryRouter>);
    expect(container).toBeInTheDocument();
  });

  test('renders the About component sections', () => {
    const { getByTestId } = render(<About />);
    expect(getByTestId('about-section1')).toBeInTheDocument();
    expect(getByTestId('about-section2')).toBeInTheDocument();
    expect(getByTestId('about-section3')).toBeInTheDocument();
    // Add similar expectations for other sections
  });

  test('opens and closes the ImageModal component', async () => {
    const { queryByTestId, getByText } = render(<MemoryRouter><About /></MemoryRouter>);
    expect(queryByTestId('image-modal')).toBeNull();
    
    await waitFor(() => {
        expect(screen.getByTestId('image-modal')).toBeInTheDocument();
      });
      
    // Simulate closing the ImageModal
    fireEvent.click(getByText('Close Image'));
    
    expect(queryByTestId('image-modal')).toBeNull();
  });

  test('clicking on VIEW ALL button', async () => {
    const { getByRole } = render(<MemoryRouter><About /></MemoryRouter>);

      });
 


