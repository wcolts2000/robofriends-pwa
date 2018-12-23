import { shallow } from "enzyme";
import CardList from "./CardList";
import React from "react";

it("expect to render Card component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      email: "john@gmail.com"
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
