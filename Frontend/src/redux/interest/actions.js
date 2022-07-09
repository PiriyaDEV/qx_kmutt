import { FETCH_INTEREST , FETCH_INTEREST_BY_ID } from "./type";

import InterestService from "../../services/interest.js";

export const fetchInterest = (pageSize = 25) => {
  return (dispatch) => {
    InterestService.getInterests(pageSize).then((response) => {
      if (response.length) {
        dispatch(fetchInterestSuccess(response));
      }
    });
  };
};

export const fetchInterestById = (id) => { 
  return (dispatch) => {
    InterestService.getInterestById(id).then((response) => {
      if (response) {
        dispatch(fetchInterestByIdSuccess(response));
      }
    });
  };
};

export const fetchInterestSuccess = (interests) => {
  return {
    type: FETCH_INTEREST,
    payload: interests,
  };
};

export const fetchInterestByIdSuccess = (interest) => {
  return {
    type: FETCH_INTEREST_BY_ID,
    payload: interest,
  };
};
