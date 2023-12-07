import { render, screen } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';

import { Header } from './';

describe("Component: Header", () => {
  it("should be rendered with your site name", () => {
    render(
      <NativeBaseProvider>
        <Header title="Pega Job, Dev!" />
      </NativeBaseProvider>
    );
    
    const siteNameElement = screen.getByTestId("headerTitle");
    expect(siteNameElement).toBeTruthy();
  });
});