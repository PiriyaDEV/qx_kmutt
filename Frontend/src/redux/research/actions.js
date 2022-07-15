import {
  FETCH_RESEARCH,
  FETCH_RESEARCH_BY_SLUG,
  FETCH_RELATED_RESEARCH,
  SET_META_DATA,
  APPEND_TO_RESEARCH,
} from "./type";

import ResearchService from "../../services/research";
import ResearchModel from "../../models/research";
import RelatedContent from "../../utilities/relatedContent";

export const fetchResearch = (
  pageSize = 25,
  categoriesFilter = [],
  page = 1
) => {
  return (dispatch) => {
    ResearchService.getResearches(pageSize, categoriesFilter, page).then(
      async (response) => {
        const data = await Promise.all(
          response.data.map((research) => ResearchModel.getMany(research))
        );
        dispatch(fetchResearchSuccess(data));
        dispatch(setMetadata(response.meta));
      }
    );
  };
};

export const fetchResearchByPage = (pageSize = 25, categoriesFilter = []) => {
  return (dispatch, getState) => {
    const { meta } = getState().researches;
    if (meta.pagination.page < meta.pagination.pageCount) {
      ResearchService.getResearches(
        pageSize,
        categoriesFilter,
        meta.pagination.page + 1
      ).then(async (response) => {
        if (response.data.length) {
          const data = await Promise.all(
            response.data.map((research) => ResearchModel.getMany(research))
          );
          dispatch(appendToResearch(data));
          dispatch(setMetadata(response.meta));
        }
      });
    }
  };
};

export const fetchRelatedResearches = () => {
  return (dispatch, getState) => {
    const { research: current } = getState().researches;
    ResearchService.getResearches(50, [], 1).then(async (response) => {
      if (response.data.length) {
        const data = await Promise.all(
          response.data.map((research) => ResearchModel.getMany(research))
        );
        const filteredData = data.filter(
          (research) => research.id != current.id
        );
        const dataWithScore = await RelatedContent.calculateScore(
          current,
          filteredData
        );
        const dataSortedWithScore = await RelatedContent.sortContentByScore(
          dataWithScore
        );
        dispatch(fetchRelatedResearchSuccess(dataSortedWithScore));
      }
    });
  };
};

export const fetchResearchBySlug = (slug) => {
  return (dispatch) => {
    ResearchService.getResearchBySlug(slug).then(async (response) => {
      if (response) {
        const data = await ResearchModel.getOne(response);
        dispatch(fetchResearchBySlugSuccess(data));
        dispatch(fetchRelatedResearches());
      }
    });
  };
};

export const fetchResearchSuccess = (researches) => {
  return {
    type: FETCH_RESEARCH,
    payload: researches,
  };
};

export const fetchResearchBySlugSuccess = (research) => {
  return {
    type: FETCH_RESEARCH_BY_SLUG,
    payload: research,
  };
};

export const fetchRelatedResearchSuccess = (researches) => {
  return {
    type: FETCH_RELATED_RESEARCH,
    payload: researches,
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

export const appendToResearch = (researches) => {
  return {
    type: APPEND_TO_RESEARCH,
    payload: researches,
  };
};
