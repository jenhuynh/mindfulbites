import { render, screen } from "@testing-library/react";

import App from "./App";

//testing if app component exists and renders
//screen.debug will show us the result of the redner()call
describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    screen.debug();
  });
});

//test if routers are there/navigation works
