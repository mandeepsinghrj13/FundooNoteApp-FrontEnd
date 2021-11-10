import React from "react";
import SignUp from "./register";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("correct header when signup page render", () => {
  const { getByTestId } = render(<SignUp />);
  const header = getByTestId("headerForSignup");
  expect(header).toHaveTextContent("Create your Fundoo Account");
});

it("correct header when wrong header", () => {
  const { getByTestId } = render(<SignUp />);
  const header = getByTestId("headerForSignup");
  expect(header).not.toHaveTextContent("sign In");
});

it("givenTestIdElement ShouldContainHeader With ExpectedInputElements", () => {
  const { getByTestId } = render(<SignUp />);
  const Form = getByTestId("formForSignUp");
  expect(Form).toBeInTheDocument();
});

it("givenTestIdElement WhenRenderedsignup FirstNameInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const FirstName = getByTestId("FirstNameSignUp");
  expect(FirstName).toBeInTheDocument();
});

it("givenTestIdElement WhenRenderedsignup LastNameInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const LastName = getByTestId("LastNameSignUp");
  expect(LastName).toBeInTheDocument();
});

it("givenTestIdElement WhenRenderedsignup PasswordInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const Password = getByTestId("PasswordSignUp");
  expect(Password).toBeInTheDocument();
});

it("givenTestIdElement WhenRenderedsignup confirmPasswordInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const confirmPassword = getByTestId("confirmPasswordSignUp");
  expect(confirmPassword).toBeInTheDocument();
});

it("givenTestIdElement WhenRenderedsignup EmailInTheDocument", () => {
  const { getByTestId } = render(<SignUp />);
  const Email = getByTestId("EmailSignUp");
  expect(Email).toBeInTheDocument();
});
