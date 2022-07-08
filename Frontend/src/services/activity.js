import http from "./http-common";
import qs from "qs";
import i18n from "i18next";
import ActivityModel from "../models/activity";

// Activity APIs
export default new (class ActivityService {
  // Get all activities
  async getActivities(pageSize) {
    const query = qs.stringify(
      {
        fields: [
          "slug",
          "title",
          "description",
          "location_name",
          "start_date",
        ],
        populate: {
          cover: {
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
      .get("/activities?" + query)
      .then(async (response) => {
        const data = response.data.data;
        return await Promise.all(
          data.map((activity) => ActivityModel.getMany(activity))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Get activity by slug
  async getActivityBySlug(slug) {
    const query = qs.stringify(
      {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: {
          cover: {
            fields: ["url"],
          },
          tags: {
            fields: ["name"],
          },
          authors: {
            fields: ["firstname", "lastname"],
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    return await http
      .get("/activities?" + query)
      .then(async (response) => {
        const data = response.data.data[0];
        return await ActivityModel.getOne(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
