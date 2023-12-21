import React from 'react';
import { render, fireEvent } from '@test-utils/test-utils';
import { InputSelect } from './index';

const mockOptions = [
  { label: 'Option 1', value: 'value1' },
  { label: 'Option 2', value: 'value2' },
  { label: 'Option 3', value: 'value3' },
];

const mockProps = {
  placeholder: 'Select an option',
  color: 'blue.500',
  options: mockOptions,
  onChangeText: jest.fn(),
};

describe('Component: InputSelect', () => {
  it('renders input correctly with placeholder', () => {
    const { getByPlaceholderText } = render(
      <InputSelect {...mockProps} />
    );

    const inputElement = getByPlaceholderText('Select an option');
    expect(inputElement).toBeDefined();
  });

  it('opens the modal when pressed', () => {
    const { getByPlaceholderText, getByText } = render(
      <InputSelect {...mockProps} />
    );

    const inputElement = getByPlaceholderText('Select an option');
    fireEvent.press(inputElement);

    const modalHeader = getByText('Select an option');
    expect(modalHeader).toBeDefined();
  });

  it('selects an option from the modal', () => {
    const { getByPlaceholderText, getByText } = render(
      <InputSelect {...mockProps} />
    );

    const inputElement = getByPlaceholderText('Select an option');
    fireEvent.press(inputElement);

    const optionElement = getByText('Option 1');
    fireEvent.press(optionElement);

    expect(mockProps.onChangeText).toHaveBeenCalledWith('value1');
  });

  it('displays error message when provided', () => {
    const { getByText } = render(
      <InputSelect {...mockProps} isInvalid errorMessage="Invalid option" />
    );

    const errorMessage = getByText('Invalid option');
    expect(errorMessage).toBeDefined();
  });
});

