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


    const aboutVideoContainer = screen.getByTestId('about-video-container');
    expect(aboutVideoContainer).toBeInTheDocument();


  });

});
