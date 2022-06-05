import { FETCH_TAG , FETCH_TAG_BY_ID } from "./type";

import TagService from "../../services/tag.js";

export const fetchTag = (pageSize = 25) => {
  return (dispatch) => {
    TagService.getTags(pageSize).then((response) => {
      if (response.length) {
        dispatch(fetchTagSuccess(response));
      }
    });
  };
};

export const fetchTagById = (id) => { 
  return (dispatch) => {
    TagService.getTagById(id).then((response) => {
      if (response.length) {
        dispatch(fetchTagByIdSuccess(response[0]));
      }
    });
  };
};

export const fetchTagSuccess = (tags) => {
  return {
    type: FETCH_TAG,
    payload: tags,
  };
};

export const fetchTagByIdSuccess = (tag) => {
  return {
    type: FETCH_TAG_BY_ID,
    payload: tag,
  };
};
