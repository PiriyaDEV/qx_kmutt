import { FETCH_ACTIVITY, FETCH_ACTIVITY_BY_SLUG } from "./type";

import ActivityService from "../../services/activity";
import ActivityModel from "../../models/activity";

export const fetchActivity = (pageSize = 25) => {
  return (dispatch) => {
    ActivityService.getActivities(pageSize).then(async (response) => {
      if (response.data.length) {
        const data = await Promise.all(
          response.data.map((activity) => ActivityModel.getMany(activity))
        );
        dispatch(fetchActivitySuccess(data));
      }
    });
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
