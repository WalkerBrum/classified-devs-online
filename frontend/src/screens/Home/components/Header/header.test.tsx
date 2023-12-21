import { render, screen } from '@test-utils/test-utils';

import { Header } from './';

describe("Component: Header", () => {
  it("should be rendered with your site name", () => {
    render(<Header title="Pega Job, Dev!" />);
    
    const siteNameElement = screen.getByTestId("headerTitle");
    expect(siteNameElement).toBeTruthy();
  });
});