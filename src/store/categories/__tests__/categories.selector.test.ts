import {
  selectCategories,
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../category.selector";
import { RootState } from "../../store";

const mockState: RootState = {
  categories: {
    isLoading: false,
    categories: [
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
    ],
    error: null,
  },
};

describe("Category selectors", () => {
  test("selectCategories should return the categoriesData", () => {
    const categoriesSlice = selectCategories(mockState);
    expect(categoriesSlice).toEqual(mockState.categories.categories);
  });

  test("selectCategoriesIsLoading should return isLoading state", () => {
    const isLoading = selectCategoriesIsLoading(mockState);
    expect(isLoading).toEqual(false);
  });

  test("selectCategories should convert the items array into the appropriate map", () => {
    const expectedCategoriesMap = {
      mens: [
        { id: 1, name: "Product 1", imageUrl: "test1", price: 1000 },
        { id: 2, name: "Product 2", imageUrl: "test2", price: 1000 },
      ],
      womens: [
        { id: 3, name: "Product 3", imageUrl: "test3", price: 1000 },
        { id: 4, name: "Product 4", imageUrl: "test4", price: 1000 },
      ],
    };

    const categoriesMap = selectCategoriesMap(mockState);
    expect(categoriesMap).toEqual(expectedCategoriesMap);
  });
});
