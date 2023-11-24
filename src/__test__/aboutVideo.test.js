import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutVideo from '../About_pages/AboutVideo';

describe('AboutVideo Component', () => {
  test('renders AboutVideo component', () => {
    render(
      <MemoryRouter>
        <AboutVideo />
      </MemoryRouter>
    );

    // Check if the container is present
    const aboutVideoContainer = screen.getByTestId('about-video-container');
    expect(aboutVideoContainer).toBeInTheDocument();

    // Additional assertions based on your component's structure...
    // For example:
    // const videoSections = screen.getAllByClassName('video-section7');
    // expect(videoSections.length).toBeGreaterThan(0);
  });

  // Add more test cases as needed for specific functionality
});
