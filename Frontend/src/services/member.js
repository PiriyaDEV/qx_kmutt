import http from "./http-common";
import qs from "qs";
import i18n from "i18next";

// Member APIs
export default new (class MemberService {
  static ROLES = ["RESEARCHER", "CURRENT_MEMBER", "OLD_MEMBER"];

  // Get all members
  async getMembers(pageSize, page) {
    const query = qs.stringify(
      {
        filters: {
          role: {
            $in: MemberService.ROLES,
          },
        },
        populate: {
          profile_pic: {
            fields: ["url"],
          },
          interests: {
            fields: ["name"],
          },
        },
        locale: i18n.language,
        pagination: {
          page: page,
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
        return response.data;
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
          role: {
            $in: MemberService.ROLES,
          },
        },
        populate: {
          profile_pic: {
            fields: ["url"],
          },
          interests: {
            fields: ["name"],
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
        return response.data.data[0];
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
