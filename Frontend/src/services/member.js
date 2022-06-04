import http from "./http-common";
import qs from "qs";
import i18n from "i18next";

// Member APIs
export default new (class MemberService {
  // Get all members
  async getMembers(pageSize = 25) {
    const query = qs.stringify(
      {
        sort: ["published_date:desc"],
        fields: ["slug", "firstname", "lastname", "position", "email", "role"],
        populate: {
          profile_picture: {
            fields: ["url"],
          },
        },
        locale: i18n.language,
        pagination: {
          page: 1,
          pageSize: pageSize,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    return await http
      .get("/members?" + query)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Get member by slug
  async getMemberBySlug(slug) {
    const query = qs.stringify(
      {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: {
          profile_picture: {
            fields: ["url"],
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    return await http
      .get("/members?" + query)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
