import { NavigationContainer } from '@react-navigation/native';

import { render, fireEvent } from '@test-utils/test-utils';

import { Header } from './index'; 

const mockHeaderProps = {
  textHeader: 'Header Text',
  textFirstButton: 'Button Text',
  firstButton: true,
  secondButton: false,
  navigation: jest.fn(), 
};

describe('Component: Header', () => {
  it('renders Header with first button correctly', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Header {...mockHeaderProps} />
      </NavigationContainer>
    );
    
    expect(getByText('Header Text')).toBeDefined();
    expect(getByText('Button Text')).toBeDefined();
  });

  it('renders Header with second button correctly', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Header 
          {...mockHeaderProps} 
          textFirstButton="Button 1"
          secondButton={true}
        />
      </NavigationContainer>
    );

    expect(getByText('Header Text')).toBeDefined();
    expect(getByText('Sair')).toBeDefined();
  });

  it('calls navigation onPress for the first button', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Header {...mockHeaderProps} />
      </NavigationContainer>
    );

    fireEvent.press(getByText('Button Text'));

    expect(mockHeaderProps.navigation).toHaveBeenCalled();
  });
});