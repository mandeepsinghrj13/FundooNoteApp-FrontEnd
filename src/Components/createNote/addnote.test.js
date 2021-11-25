import React from "react";
import AddNotes from "./addNotes";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("givenTestIdElement_WhenRenderedAddNotes_ShouldContainTitleExpectedInputElements", () => {
  const { getByTestId } = render(<AddNotes />);
  const titleInput = getByTestId("title");
  expect(titleInput).toBeInTheDocument();
});
it("givenTestIdElement_WhenRenderedAddNotes_ShouldContainDescriptionInputElements", () => {
  const { getByTestId } = render(<AddNotes />);
  const description = getByTestId("description");
  expect(description).toBeInTheDocument();
});
it("givenTestIdElement WhenRenderedLogin SubmittoBeDisabled", () => {
  const { getByTestId } = render(<AddNotes />);
  const submit = getByTestId("submit");
  expect(submit).not.toBeDisabled();
});
