import { FETCH_TAG, FETCH_TAG_BY_ID } from "./type";

import TagService from "../../services/tag";
import TagModel from "../../models/tag";

export const fetchTag = (pageSize = 25) => {
  return (dispatch) => {
    TagService.getTags(pageSize).then(async (response) => {
      if (response.data.length) {
        const data = await Promise.all(
          response.data.map((tag) => TagModel.getOne(tag))
        );
        dispatch(fetchTagSuccess(data));
      }
    });
  };
};

export const fetchTagById = (id) => {
  return (dispatch) => {
    TagService.getTagById(id).then(async (response) => {
      if (response) {
        const data = await TagModel.getOne(response);
        dispatch(fetchTagByIdSuccess(data));
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
