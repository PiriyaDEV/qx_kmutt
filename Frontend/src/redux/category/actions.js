import { FETCH_CATEGORY , FETCH_CATEGORY_BY_ID } from "./type";

import CategoryService from "../../services/category.js";

export const fetchCategory = (pageSize = 25) => {
  return (dispatch) => {
    CategoryService.getCategories(pageSize).then((response) => {
      if (response.length) {
        dispatch(fetchCategorySuccess(response));
      }
    });
  };
};

export const fetchCategoryById = (id) => { 
  return (dispatch) => {
    CategoryService.getCategoryById(id).then((response) => {
      if (response.length) {
        dispatch(fetchCategoryByIdSuccess(response[0]));
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
