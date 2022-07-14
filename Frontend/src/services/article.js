import http from "./http-common";
import qs from "qs";
import i18n from "i18next";

// Article APIs
export default new (class ArticleService {
  // Get all articles
  async getArticles(pageSize, tagsFilter, page) {
    const query = qs.stringify(
      {
        fields: ["slug", "title", "description"],
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
          tags: {
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
      .get("/articles?" + query)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Get article by slug
  async getArticleBySlug(slug) {
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
      .get("/articles?" + query)
      .then((response) => {
        return response.data.data[0];
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
