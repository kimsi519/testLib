// Home.test.tsx
import { render, screen } from '@testing-library/react';
import Home from './Home';
import React from 'react';

describe('Home Component', () => {
  test('renders Hello, World! text', () => {
    render(<Home />);
    const headingElement = screen.getByText(/Hello, World!/i);
    expect(headingElement).toBeInTheDocument(); // DOM에 있는지 확인
  });

  test('renders button', () => {
    render(<Home />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
