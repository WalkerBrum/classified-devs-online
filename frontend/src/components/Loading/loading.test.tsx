import '@testing-library/jest-native/extend-expect';

import { render } from '@test-utils/test-utils';

import { Loading } from './index';

describe('Component: Loading', () => {
  it('renders the loading spinner', () => {
    const { getByTestId } = render(<Loading />);
    const spinnerElement = getByTestId('loading-spinner');
    expect(spinnerElement).toBeDefined();
  });
});
