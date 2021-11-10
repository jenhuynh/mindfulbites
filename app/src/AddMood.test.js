import { fireEvent, prettyDOM, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Routes, Route, Router, MemoryRouter } from "react-router-dom";

import AddMood from "./AddMood";

//tests for input and placeholders in addmood form exists
describe("<AddMood />", () => {
  test("renders form inputs correctly", () => {
    const history = createMemoryHistory();
    const { getByPlaceholderText, getByLabelText } = render(
      <MemoryRouter history={history}>
        <Routes>
          <Route element={<AddMood />} />
        </Routes>
      </MemoryRouter>,
    );

    const timestampInput = getByLabelText("Timestamp");
    const currentMoodInput = getByLabelText("Wonderful");
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
    const { getByPlaceholderText, getByLabelText, getByRole, container } =
      render(<AddMood />);
    const timestampInput = getByLabelText("Timestamp");
    const currentMoodInput = getByLabelText("Wonderful");
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
