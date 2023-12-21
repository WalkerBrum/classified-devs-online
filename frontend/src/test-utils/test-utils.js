// test-utils.js
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';

const customRender = (children, options) => {
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