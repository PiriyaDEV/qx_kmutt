import { FETCH_MEMBER, FETCH_MEMBER_BY_SLUG, RANDOM_MEMBER } from "./type";
import _ from "lodash";

import MemberService from "../../services/member.js";

export const fetchMember = (pageSize = 100) => {
  return (dispatch) => {
    MemberService.getMembers(pageSize).then((response) => {
      if (response.length) {
        dispatch(fetchMemberSuccess(response));
        dispatch(randomMember());
      }
    });
  };
};

export const fetchMemberBySlug = (slug) => {
  return (dispatch) => {
    MemberService.getMemberBySlug(slug).then((response) => {
      if (response) {
        dispatch(fetchMemberBySlugSuccess(response));
      }
    });
  };
};

export const randomMember = (size = 6) => {
  return (dispatch, getState) => {
    const { members, random } = getState().members;
    const previous = random.map((member) => member.id);
    const filteredMembers =
      members.length < 12
        ? [...members]
        : members.filter((member) => !previous.includes(member.id));

    const result = _.sampleSize(filteredMembers, size);

    dispatch(randomMemberSuccess(result));
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

export const randomMemberSuccess = (random) => {
  return {
    type: RANDOM_MEMBER,
    payload: random,
  };
};
