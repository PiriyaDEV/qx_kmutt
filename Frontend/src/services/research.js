import http from "./http-common";
import qs from "qs";
import i18n from "i18next";
import ResearchModel from "../models/research";

// Research APIs
export default new (class ResearchService {
  // Get all researches
  async getResearches(pageSize) {
    const query = qs.stringify(
      {
        fields: ["slug", "title", "description"],
        populate: {
          cover: {
            fields: ["url"],
          },
          categories: {
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
      .get("/researches?" + query)
      .then(async (response) => {
        const data = response.data.data;
        return await Promise.all(
          data.map((research) => ResearchModel.getMany(research))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Get research by slug
  async getResearchBySlug(slug) {
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
          categories: {
            fields: ["name"],
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
      .get("/researches?" + query)
      .then(async (response) => {
        const data = response.data.data[0];
        return await ResearchModel.getOne(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
