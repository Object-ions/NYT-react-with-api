import topStoriesReducer from "../../reducers/top-stories-reducer";
import * as c from "./../actions/ActionTypes";

describe("topStoriesReducer", () => {
  let action;

  const initialState = {
    isLoaded: false,
    topStories: [],
    error: null,
  };

  test("should throw a new wrror if a non-matching action type is passed into it", () => {
    expect(() => {
      topStoriesReducer(initialState, { type: null });
    }).toThrowError("There is no action matching null");
  });

  test("should get top stories and change isLoaded to true and update topStories", () => {
    const topStories = "An article";
    action = {
      type: c.GET_TOP_STORIES_SUCCESS,
      topStories,
    };

    expect(topStoriesReducer(initialState, action)).toEqual({
      isLoaded: true,
      topStories: "An article",
      error: null,
    });
  });
});
