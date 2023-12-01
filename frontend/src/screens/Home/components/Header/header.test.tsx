import { render, screen } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';

import { Header } from '.';

describe("Component: Header", () => {
  it("should be rendered with your site name", () => {
    render(
      <NativeBaseProvider>
        <Header title="Achei Job Dev" />
      </NativeBaseProvider>
    );
    
    const siteNameElement = screen.getByText("Pega Job, Dev!");
    expect(siteNameElement).toBeTruthy();
  });
});