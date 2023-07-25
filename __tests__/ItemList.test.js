import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemList from "./client/item-app/src/components/ItemList.js";

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({
    data: [
      {
        id: '1',
        name: 'Test item 1',
        description: 'Test description 1',
        price: '100',
        imageURL: 'test.jpg',
      },
    ],
  })),
}));

test('renders item name, description and price', async () => {
  render(<ItemList />);

  // Wait for the promise to resolve
  await screen.findByText('Test item 1');

  expect(screen.getByText('Test item 1')).toBeInTheDocument();
  expect(screen.getByText('Test description 1')).toBeInTheDocument();
  expect(screen.getByText('Price: $100')).toBeInTheDocument();
});
