import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataSolution from "../bpo_pages/data_solution"
import { MemoryRouter } from 'react-router-dom';

test('DataSolution component renders without crashing', () => {
  render(<MemoryRouter><DataSolution /></MemoryRouter>);

  expect(screen.getByText('Data Solutions')).toBeInTheDocument();
});

test('DataSolution component contains the expected sections', () => {
  render(<MemoryRouter><DataSolution /></MemoryRouter>);

  expect(screen.getByText('Data Enrichment')).toBeInTheDocument();
  expect(screen.getByText('Data Entry')).toBeInTheDocument();

});
