import { FETCH_CATEGORY, FETCH_CATEGORY_BY_ID } from "./type";

import CategoryService from "../../services/category";
import CategoryModel from "../../models/category";

export const fetchCategory = (pageSize = 25) => {
  return (dispatch) => {
    CategoryService.getCategories(pageSize).then(async (response) => {
      if (response.data.length) {
        const data = await Promise.all(
          response.data.map((category) => CategoryModel.getOne(category))
        );
        dispatch(fetchCategorySuccess(data));
      }
    });
  };
};

export const fetchCategoryById = (id) => {
  return (dispatch) => {
    CategoryService.getCategoryById(id).then(async (response) => {
      if (response) {
        const data = await CategoryModel.getOne(response);
        dispatch(fetchCategoryByIdSuccess(data));
      }
    });
  };
};

export const fetchCategorySuccess = (categories) => {
  return {
    type: FETCH_CATEGORY,
    payload: categories,
  };
};

export const fetchCategoryByIdSuccess = (category) => {
  return {
    type: FETCH_CATEGORY_BY_ID,
    payload: category,
  };
};
