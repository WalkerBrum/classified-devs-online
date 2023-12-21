import { render } from '@test-utils/test-utils';

import { Header } from './';

describe("Component: Header", () => {
  it("should be rendered with your site name", () => {
    const { getByTestId } = render(<Header title="Pega Job, Dev!" />);
    
    const siteNameElement = getByTestId("headerTitle");
    expect(siteNameElement).toBeDefined();
  });
});