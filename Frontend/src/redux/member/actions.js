import { FETCH_MEMBER , FETCH_MEMBER_BY_SLUG } from "./type";

import MemberService from "../../services/member.js";

export const fetchMember = (pageSize = 25) => {
  return (dispatch) => {
    MemberService.getMembers(pageSize).then((response) => {
      if (response.length) {
        dispatch(fetchMemberSuccess(response));
      }
    });
  };
};

export const fetchMemberBySlug = (slug) => { 
  return (dispatch) => {
    MemberService.getMemberBySlug(slug).then((response) => {
      if (response.length) {
        dispatch(fetchMemberBySlugSuccess(response[0]));
      }
    });
  };
};

export const fetchMemberSuccess = (members) => {
  return {
    type: FETCH_MEMBER,
    payload: members,
  };
};

export const fetchMemberBySlugSuccess = (member) => {
  return {
    type: FETCH_MEMBER_BY_SLUG,
    payload: member,
  };
};
