import { render, fireEvent } from '@test-utils/test-utils';
import { Input } from './index';

describe('Component: Input', () => {
  it('renders input correctly with placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Username" />
    );

    const inputElement = getByPlaceholderText('Username');
    expect(inputElement).toBeDefined();
  });

  it('renders multiline input correctly', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Description" isMultiline />
    );

    const inputElement = getByPlaceholderText('Description');
    expect(inputElement).toBeDefined();
  });

  it('renders input with error message correctly', () => {
    const { getByText } = render(
      <Input errorMessage="Invalid input" />
    );

    const errorMessageElement = getByText('Invalid input');
    expect(errorMessageElement).toBeDefined();
  });  
});