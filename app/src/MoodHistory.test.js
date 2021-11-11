import { render, screen } from "@testing-library/react";

import MoodHistory from "./MoodHistory";

//testing if moodhistory component exists and renders
//screen.debug will show us the result of the render()call
describe("MoodHistory", () => {
  test("renders App component", () => {
    render(<MoodHistory />);
    screen.debug();
  });
});
