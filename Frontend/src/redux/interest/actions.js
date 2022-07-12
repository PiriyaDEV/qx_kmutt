import { FETCH_INTEREST, FETCH_INTEREST_BY_ID } from "./type";

import InterestService from "../../services/interest";
import InterestModel from "../../models/interest";

export const fetchInterest = (pageSize = 25) => {
  return (dispatch) => {
    InterestService.getInterests(pageSize).then(async (response) => {
      if (response.data.length) {
        const data = await Promise.all(
          response.data.map((interest) => InterestModel.getOne(interest))
        );
        dispatch(fetchInterestSuccess(data));
      }
    });
  };
};

export const fetchInterestById = (id) => {
  return (dispatch) => {
    InterestService.getInterestById(id).then(async (response) => {
      if (response) {
        const data = await InterestModel.getOne(response);
        dispatch(fetchInterestByIdSuccess(data));
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
