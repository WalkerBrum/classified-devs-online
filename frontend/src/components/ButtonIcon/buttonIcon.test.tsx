import { Feather } from '@expo/vector-icons';

import { render } from '@test-utils/test-utils';

import { ButtonIcon } from './index'; 

describe("Component: ButtonIcon", () => {
  it("renders ButtonIcon correctly", () => {
    const { getByTestId } = render(
      <ButtonIcon
        color="blue" 
        icon="filter" 
        size={24} 
        testID="buttonIcon" 
      />
    );

    const buttonIcon = getByTestId("buttonIcon");
    expect(buttonIcon).toBeDefined();
  });

  it("renders ButtonIcon correctly with custom size", () => {
    const { getByTestId } = render(
      <ButtonIcon
        color="red" 
        icon="trash-2" 
        size={30} 
        testID="buttonIconCustomSize" 
      />
    );

    const featherIcon = getByTestId("buttonIconCustomSize").findByType(Feather);
    expect(featherIcon).toBeDefined();
    expect(featherIcon.props.size).toBe(30);
  });
});