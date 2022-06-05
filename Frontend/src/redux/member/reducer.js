import { FETCH_MEMBER, FETCH_MEMBER_BY_SLUG } from "./type";

const initialState = {
  members: [],
  member: {
    attributes: {
      slug: "",
      firstname: "",
      lastname: "",
      email: "",
      position: "",
      role: "",
      description: "",
      profile_picture: {
        data: {
          attributes: {
            url: "",
          },
        },
      },
    },
    id: 0,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEMBER:
      return {
        ...state,
        members: action.payload,
      };
    case FETCH_MEMBER_BY_SLUG:
      return {
        ...state,
        member: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
