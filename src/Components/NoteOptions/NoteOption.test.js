import React from "react";
import AddNotes from "./NoteOptions";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("givenTestIdElement WhenRenderedLogin SubmittoBeDisabled", () => {
  const { queryByTestId } = render(<AddNotes />);
  const submit = queryByTestId("submit");
  expect(submit).toBeNull();
});
