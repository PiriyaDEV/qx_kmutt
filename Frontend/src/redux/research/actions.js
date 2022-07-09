import { FETCH_RESEARCH , FETCH_RESEARCH_BY_SLUG } from "./type";

import ResearchService from "../../services/research.js";

export const fetchResearch = (pageSize = 25) => {
  return (dispatch) => {
    ResearchService.getResearches(pageSize).then((response) => {
      if (response.length) {
        dispatch(fetchResearchSuccess(response));
      }
    });
  };
};

export const fetchResearchBySlug = (slug) => { 
  return (dispatch) => {
    ResearchService.getResearchBySlug(slug).then((response) => {
      if (response) {
        dispatch(fetchResearchBySlugSuccess(response));
      }
    });
  };
};

export const fetchResearchSuccess = (researchs) => {
  return {
    type: FETCH_RESEARCH,
    payload: researchs,
  };
};

export const fetchResearchBySlugSuccess = (research) => {
  return {
    type: FETCH_RESEARCH_BY_SLUG,
    payload: research,
  };
};
