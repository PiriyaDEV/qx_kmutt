import http from "./http-common";
import qs from "qs";
import i18n from "i18next";

// Activity APIs
export default new (class ActivityService {
  // Get all activities
  async getActivities(pageSize, tagsFilter, page) {
    const query = qs.stringify(
      {
        fields: [
          "slug",
          "title",
          "description",
          "location_name",
          "location_url",
          "start_date",
        ],
        filters: {
          $or: tagsFilter.map((tag) => {
            return {
              tags: {
                name: {
                  $in: tag,
                },
              },
            };
          }),
        },
        populate: {
          cover: {
            fields: ["url"],
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
      .get("/activities?" + query)
      .then((response) => {
        return response.data;
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
      .then((response) => {
        return response.data.data[0];
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
