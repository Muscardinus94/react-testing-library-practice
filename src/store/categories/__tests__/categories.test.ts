import {
  categoriesReducer,
  CATEGORIES_INITIAL_STATE,
} from "../category.reducer";

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "../category.action";
import { Category } from "../category.types";

describe("Category Reducer tests", () => {
  test("fetchCategoriesStart", () => {
    const expectedState = { ...CATEGORIES_INITIAL_STATE, isLoading: true };

    expect(
      categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart()),
    ).toEqual(expectedState);
  });

  test("fetchCategoriesSuccess", () => {
    const mockData: Category[] = [
      {
        title: "mens",
        imageUrl: "test",
        items: [
          { id: 1, name: "Product 1", imageUrl: "test1", price: 1000 },
          { id: 2, name: "Product 2", imageUrl: "test2", price: 1000 },
        ],
      },
      {
        title: "womens",
        imageUrl: "test2",
        items: [
          { id: 3, name: "Product 3", imageUrl: "test3", price: 1000 },
          { id: 4, name: "Product 4", imageUrl: "test4", price: 1000 },
        ],
      },
    ];

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      categories: mockData,
      isLoading: false,
    };

    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesSuccess(mockData),
      ),
    ).toEqual(expectedState);
  });

  test("fetchCategoriesFailed", () => {
    const mockError = new Error("Error Fetching Categories");

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      error: mockError,
    };

    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesFailed(mockError),
      ),
    ).toEqual(expectedState);
  });
});
