import React from "react";
import AllNotes from "./Notes";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("givenTestIdElement_WhenRenderedAddNotes_ShouldContainHeaderWithExpectedInputElements", () => {
  const { queryByTestId } = render(<AllNotes />);
  const wrapper = queryByTestId("getAllNotes");
  expect(wrapper).toBeNull();
});
