import http from "./http-common";
import qs from "qs";
import i18n from "i18next";
import MemberModel from "../models/member";

// Member APIs
export default new (class MemberService {
  // Get all members
  async getMembers(pageSize) {
    const query = qs.stringify(
      {
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
      .then(async (response) => {
        const data = response.data.data;
        return await Promise.all(
          data.map((member) => MemberModel.getMany(member))
        );
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
      .then(async (response) => {
        const data = response.data.data[0];
        return await MemberModel.getOne(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
