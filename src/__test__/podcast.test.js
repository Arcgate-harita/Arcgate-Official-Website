import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Podcast from '../Podcast';

describe('Podcast Component', () => {
  test('renders Podcast component', () => {
    render(
      <MemoryRouter>
        <Podcast />
      </MemoryRouter>
    );

    const podcastContainer = screen.getByTestId('blogView-container');
    expect(podcastContainer).toBeInTheDocument();

  });

});
