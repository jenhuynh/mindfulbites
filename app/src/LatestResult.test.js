import { render, screen } from "@testing-library/react";

import LatestResult from "./LatestResult";

//testing if latestresult component exists and renders
//screen.debug will show us the result of the render()call
describe("LatestResult", () => {
  test("renders LatestResult component", () => {
    render(<LatestResult />);
    screen.debug();
  });
});
