import { render, fireEvent } from '@test-utils/test-utils';
import { Card } from './index'; // Replace with the actual path to your component file

const mockData = {
  id: '1',
  cpfOrCnpj: '12345678901',
  jobTitle: 'Software Engineer',
  mainSkills: 'React, Node.js',
  level: 'Senior',
  description: 'Lorem ipsum dolor sit amet.',
  workingModel: 'Remote',
  city: 'ExampleCity',
  uf: 'EX',
  remuneration: '5000.00',
};

describe("Component: Card", () => {
  it("renders Card correctly with default props", () => {
    const { getByText } = render(
      <Card data={mockData} />
    );

    expect(getByText("Software Engineer")).toBeDefined();
  });

  it("renders Card correctly with buttons", () => {
    const handleDeleteMock = jest.fn();
    const { getByText, getByTestId } = render(
      <Card data={mockData} hasButtons handleDelete={handleDeleteMock} />
    );

    expect(getByText("Software Engineer")).toBeDefined();

    expect(getByTestId("editButton")).toBeDefined();
    expect(getByTestId("deleteButton")).toBeDefined();
  });

  it('calls handleDelete when delete button is pressed', () => {
    const handleDeleteMock = jest.fn();
    const { getByTestId } = render(
      <Card data={mockData} hasButtons handleDelete={handleDeleteMock} />
    );
  
    fireEvent.press(getByTestId('deleteButton'));
  
    expect(handleDeleteMock).toHaveBeenCalledWith('1');
  });
});