import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';

test('Um... this isn\'t MVP requirement...', () => {
  render(<App />);
  const linkElement = screen.getByText(/Friends List/i);
  expect(linkElement).toBeInTheDocument();
});
