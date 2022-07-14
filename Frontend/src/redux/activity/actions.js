import {
  FETCH_ACTIVITY,
  FETCH_ACTIVITY_BY_SLUG,
  SET_META_DATA,
  APPEND_TO_ACTIVITY,
} from "./type";

import ActivityService from "../../services/activity";
import ActivityModel from "../../models/activity";

export const fetchActivity = (pageSize = 25, tagsFilter = [], page = 1) => {
  return (dispatch) => {
    ActivityService.getActivities(pageSize, tagsFilter, page).then(
      async (response) => {
        const data = await Promise.all(
          response.data.map((activity) => ActivityModel.getMany(activity))
        );
        dispatch(fetchActivitySuccess(data));
        dispatch(setMetadata(response.meta));
      }
    );
  };
};

export const fetchActivityByPage = (pageSize = 25, tagsFilter = []) => {
  return (dispatch, getState) => {
    const { meta } = getState().articles;
    if (meta.pagination.page < meta.pagination.pageCount) {
      ActivityService.getActivities(
        pageSize,
        tagsFilter,
        meta.pagination.page + 1
      ).then(async (response) => {
        if (response.data.length) {
          const data = await Promise.all(
            response.data.map((activity) => ActivityModel.getMany(activity))
          );
          dispatch(appendToActivity(data));
          dispatch(setMetadata(response.meta));
        }
      });
    }
  };
};

export const fetchActivityBySlug = (slug) => {
  return (dispatch) => {
    ActivityService.getActivityBySlug(slug).then(async (response) => {
      if (response) {
        const data = await ActivityModel.getOne(response);
        dispatch(fetchActivityBySlugSuccess(data));
      }
    });
  };
};

export const fetchActivitySuccess = (activities) => {
  return {
    type: FETCH_ACTIVITY,
    payload: activities,
  };
};

export const fetchActivityBySlugSuccess = (activity) => {
  return {
    type: FETCH_ACTIVITY_BY_SLUG,
    payload: activity,
  };
};

export const setMetadata = (meta) => {
  meta.pagination.isLastPage =
    meta.pagination.page == meta.pagination.pageCount;
  return {
    type: SET_META_DATA,
    payload: meta,
  };
};

export const appendToActivity = (activities) => {
  return {
    type: APPEND_TO_ACTIVITY,
    payload: activities,
  };
};
