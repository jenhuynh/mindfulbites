import { screen } from "@testing-library/react";

//import module as a mocked version
import { fetchPost as mockFetchPost } from "../api";

import App from "./App";
import LatestResult from "./LatestResult";

//mock the api module using jest
jest.mock("../api");

//create a mock post and the object that our fake request will return when resolved
test("After user fills out addmood form, a post of the data from the form will display", async () => {
  const mockPost = {
    mood: "wonderful",
    notes: "It is a sunny day!",
    photo: "https://m.media-amazon.com/images/I/71zBpcRCHmL._AC_SL1500_.jpg",
    result: {
      quote: "If you can dream it, you can do it.",
      resource: {
        link: "https://www.youtube.com/watch?v=0LvTBB_uZkU",
      },
    },
  };
});

//have mock function to return that object when called
mockFetchPost.mockResolvedValueOnce(<LatestResult />);

//check if mock function is called and that it is just called once
expect(mockFetchPost).toHaveBeenhCalledTimes(1);

// Do we need something like this? await screen.findByText(/loading/i);

//check if the actual post information is displayed on the screen for the user
// expect(screen.getByText(mockPost.mood)).toBeInTheDocument();
// expect(screen.getByText(mockPost.notes)).toBeInTheDocument();
// expect(screen.getByText(mockPost.photo)).toBeInTheDocument();
// expect(screen.getByText(mockPost.result.quote)).toBeInTheDocument();
// expect(screen.getByText(mockPost.result.resource.link)).toBeInTheDocument();
