import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

it("expect to render CounterButton component", () => {
  const mockColor = "red";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("correctly increments the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  // wrapper.find('[id="counter"]').simulate("click");
  wrapper.find("button").simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 });
  wrapper.find("button").simulate("click");
  expect(wrapper.state()).toEqual({ count: 3 });
  wrapper.find("button").simulate("keypress");
  expect(wrapper.state()).toEqual({ count: 3 });
  expect(wrapper.props().color).toEqual("red");
});
