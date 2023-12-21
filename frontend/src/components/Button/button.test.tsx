
import { render, fireEvent } from '@test-utils/test-utils';

import { Button } from './index';

describe('Component: Button', () => {
  it('should render the button with the provided title', () => {
    const { getByText } = render(<Button title="Click Me" />);

    expect(getByText('Click Me')).toBeTruthy();
  });

  it('should handle press events', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(<Button title="Click Me" onPress={onPressMock} />);
    
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});