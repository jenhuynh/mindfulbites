import { render, screen } from "@testing-library/react";

import App from "./App";

//testing if app component exists and renders
//screen.debug will show us the result of the render()call
describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    screen.debug();
  });
});
