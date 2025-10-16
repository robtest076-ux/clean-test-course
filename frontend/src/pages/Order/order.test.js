import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Order from './index'; // Adjust if your component is named differently

// Mock any modules or functions as needed
jest.mock('../../../api/orderApi', () => ({
  // Example: getOrder: jest.fn(),
}));

describe('Order Page Functional Tests', () => {
  let sampleOrder;

  beforeEach(() => {
    // Arrange: set up input variables for the test
    sampleOrder = {
      items: [
        { name: 'Cheeseburger', quantity: 6 },
        { name: 'Fajita Taco', quantity: 6 },
      ],
      deliveryDistance: 1,
      deliveryFee: 2.99,
    };
    // You can set up more mocks or initial state here
  });

  it('should display the delivery fee as a separate line item', () => {
    // Act: render the component and simulate user actions
    render(<Order order={sampleOrder} />);
    // Assert: check the rendered page against expected display results
    expect(screen.getByText(/delivery fee/i)).toBeInTheDocument();
    expect(screen.getByText(/\$2\.99/)).toBeInTheDocument();
  });

  // Add more tests as you follow the lesson!
});