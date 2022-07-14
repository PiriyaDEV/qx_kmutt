import {
  FETCH_MEMBER,
  FETCH_MEMBER_BY_SLUG,
  SET_META_DATA,
  APPEND_TO_MEMBER,
  RANDOM_MEMBER,
} from "./type";
import _ from "lodash";

import MemberService from "../../services/member";
import MemberModel from "../../models/member";

export const fetchMember = (pageSize = 100, page = 1) => {
  return (dispatch) => {
    MemberService.getMembers(pageSize, page).then(async (response) => {
      const data = await Promise.all(
        response.data.map((member) => MemberModel.getMany(member))
      );
      dispatch(fetchMemberSuccess(data));
      dispatch(setMetadata(response.meta));
      dispatch(randomMember());
    });
  };
};

export const fetchMemberByPage = (pageSize = 25) => {
  return (dispatch, getState) => {
    const { meta } = getState().articles;
    if (meta.pagination.page < meta.pagination.pageCount) {
      MemberService.getMembers(pageSize, meta.pagination.page + 1).then(
        async (response) => {
          if (response.data.length) {
            const data = await Promise.all(
              response.data.map((member) => MemberModel.getMany(member))
            );
            dispatch(appendToMember(data));
            dispatch(setMetadata(response.meta));
          }
        }
      );
    }
  };
};

export const fetchMemberBySlug = (slug) => {
  return (dispatch) => {
    MemberService.getMemberBySlug(slug).then(async (response) => {
      if (response) {
        const data = await MemberModel.getOne(response);
        dispatch(fetchMemberBySlugSuccess(data));
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

export const setMetadata = (meta) => {
  meta.pagination.isLastPage =
    meta.pagination.page == meta.pagination.pageCount;
  return {
    type: SET_META_DATA,
    payload: meta,
  };
};

export const appendToMember = (members) => {
  return {
    type: APPEND_TO_MEMBER,
    payload: members,
  };
};

export const randomMemberSuccess = (random) => {
  return {
    type: RANDOM_MEMBER,
    payload: random,
  };
};
