import http from "./http-common";
import qs from "qs";
import i18n from "i18next";

// Research APIs
export default new (class ResearchService {
  // Get all researches
  async getResearches(pageSize = 25) {
    const query = qs.stringify(
      {
        sort: ["published_date:desc"],
        fields: ["slug", "title", "research_database_url", "published_date"],
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
      .get("/researches?" + query)
      .then((response) => {
        return response.data.data;
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
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    
    return await http
      .get("/researches?" + query)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
