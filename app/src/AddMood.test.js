import {
  getByPlaceholderText,
  fireEvent,
  prettyDOM,
  render,
} from "@testing-library/react";

import AddMood from "./AddMood";
import App from "./App";

//tests for input and placeholders in addmood form exists
describe("<AddMood />", () => {
  test("renders the form correctly", () => {
    const { getByPlaceholderText } = render(<AddMood />);
    const timestampInput = getByPlaceholderText("Enter Date and Time");
    const currentMoodInput = getByPlaceholderText("Select your mood");
    const noteInput = getByPlaceholderText("Add notes");
    const photoInput = getByPlaceholderText("Insert url link of photo");

    //checks if submit button is disabled
    // expect(screen.getByText(/submit/i)).toBeDisabled();
    expect(timestampInput).toBeInTheDocument();
    expect(currentMoodInput).toBeInTheDocument();
    expect(noteInput).toBeInTheDocument();
    expect(photoInput).toBeInTheDocument();
  });
  //test for submit functionality
  test("Submit button works", () => {
    //setup testing
    const { getByPlaceholderText, getByRole, container } = render(<App />);
    const timestampInput = getByPlaceholderText("Enter Date and Time");
    const currentMoodInput = getByPlaceholderText("Select your mood");
    const noteInput = getByPlaceholderText("Add notes");
    const photoInput = getByPlaceholderText("Insert url link of photo");
    const submitInput = getByRole("button", { name: "Submit" });
    //action we are testing
    fireEvent.change(timestampInput, {
      target: { value: "2021-11-08T15:06" },
    }); //alternative timestamp value format: "11/8/2021, 3:04:00PM"
    fireEvent.change(currentMoodInput, { target: { value: "wonderful" } });
    fireEvent.change(noteInput, { target: { value: "Sunny day" } });
    fireEvent.change(photoInput, {
      target: {
        value:
          "https://m.media-amazon.com/images/I/71zBpcRCHmL._AC_SL1500_.jpg",
      },
    });
    fireEvent.click(submitInput);
    console.log(prettyDOM(container));
  });
});
