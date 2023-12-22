import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';

type CustomRenderOptions = RenderOptions & {};

const customRender = (
  children: ReactElement,
  options?: CustomRenderOptions
) => {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };

  return render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      {children}
    </NativeBaseProvider>,
    options
  );
};

export * from '@testing-library/react-native';
export { customRender as render };
