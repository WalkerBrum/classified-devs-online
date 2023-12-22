// title-date.test.js
import '@testing-library/jest-native/extend-expect';

import { render } from '@test-utils/test-utils';
import { TEST_THEME } from '@test-utils/test-theme';

import { TitleDate } from './index'; 

describe('Component: TitleDate', () => {
  it('renders the date correctly', () => {
    const { getByText } = render(
      <TitleDate date="2023-01-01" />,
    );

    const dateElement = getByText('2023-01-01');
    expect(dateElement).toBeDefined();
  });

  it('renders the date with the correct font size', () => {
    const { getByText } = render(
      <TitleDate date="2023-01-01" />,
    );

    const dateElement = getByText('2023-01-01');
    expect(dateElement).toHaveStyle({ fontSize: TEST_THEME.fontSizes.md });
  });

  it('renders the date with the correct padding', () => {
    const { getByText } = render(
      <TitleDate date="2023-01-01" />,
    );

    const dateElement = getByText('2023-01-01');
    expect(dateElement).toHaveStyle({
      paddingTop: TEST_THEME.space[6],
      paddingBottom: TEST_THEME.space[2],
      paddingLeft: TEST_THEME.space[2],
    });
  });
});

