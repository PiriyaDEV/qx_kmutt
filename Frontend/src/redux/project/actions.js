import { FETCH_PROJECT , FETCH_PROJECT_BY_SLUG } from "./type";

import ProjectService from "../../services/project.js";

export const fetchProject = (pageSize = 25) => {
  return (dispatch) => {
    ProjectService.getProjects(pageSize).then((response) => {
      if (response.length) {
        dispatch(fetchProjectSuccess(response));
      }
    });
  };
};

export const fetchProjectBySlug = (slug) => { 
  return (dispatch) => {
    ProjectService.getProjectBySlug(slug).then((response) => {
      if (response.length) {
        dispatch(fetchProjectBySlugSuccess(response[0]));
      }
    });
  };
};

export const fetchProjectSuccess = (projects) => {
  return {
    type: FETCH_PROJECT,
    payload: projects,
  };
};

export const fetchProjectBySlugSuccess = (project) => {
  return {
    type: FETCH_PROJECT_BY_SLUG,
    payload: project,
  };
};
