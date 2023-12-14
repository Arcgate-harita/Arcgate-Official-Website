import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Data1 from "../Data_solution_pages/Data1";

test('suite', async () => {
  const { debug } = render(
    <Data1 />
  );
  debug();

});

jest.mock('../Data_solution_pages/data_para', () => [
  { data1: 'Mocked Data 1', data2: 'Mocked Data 2' },
]);

test('renders mapped data in Data1 component', () => {
  render(<Data1 />);

  expect(screen.getByText('Mocked Data 1')).toBeInTheDocument();
  expect(screen.getByText('Mocked Data 2')).toBeInTheDocument();
});
