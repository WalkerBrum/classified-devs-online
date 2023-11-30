import { render, screen } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';

import { Header } from '.';

describe("Component: Header", () => {
  it("should be rendered with your site name", () => {
    render(
      <NativeBaseProvider>
        <Header title="Ache Job for Dev" />
      </NativeBaseProvider>
    );
    
    const siteNameElement = screen.getByText("Dev Acha Job");
    expect(siteNameElement).toBeTruthy();
  });
});