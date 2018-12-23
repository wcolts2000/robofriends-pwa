import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

// it("expect to render MainPage component", () => {
//   const mockStore = {
//     robots: [],
//     searchField: ""
//   };
//   expect(shallow(<MainPage store={mockStore} />)).toMatchSnapshot();
// });

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robots corretly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com"
      }
    ],
    searchField: "john",
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: "John",
      email: "john@gmail.com"
    }
  ]);
});

it("filters robots corretly 2", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com"
      }
    ],
    searchField: "a",
    isPending: false
  };
  const filteredRobots = [];
  const wrapper2 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper2.instance().filterRobots()).toEqual(filteredRobots);
});
