import '@testing-library/jest-native/extend-expect';

import { render } from '@test-utils/test-utils';
import { TEST_THEME } from '@test-utils/test-theme';
 
import { NoneRegister } from './index'; ;

describe('Component: NoneRegister', () => {
  it('renders with the correct font size', () => {
    const { getByText } = render(<NoneRegister />, {
    });

    const messageElement = getByText('Nenhum anúncio cadastrado');
    expect(messageElement).toHaveStyle({ fontSize: TEST_THEME.fontSizes.md });
  });
});