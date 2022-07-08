import http from "./http-common";
import qs from "qs";
import i18n from "i18next";
import ArticleModel from "../models/article";

// Article APIs
export default new (class ArticleService {
  // Get all articles
  async getArticles(pageSize) {
    const query = qs.stringify(
      {
        fields: ["slug", "title", "description"],
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
          page: 1,
          pageSize: pageSize,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    return await http
      .get("/articles?" + query)
      .then( async (response) => {
        const data = response.data.data
        return await Promise.all(
          data.map((article) => ArticleModel.getMany(article))
        );
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
      .then(async (response) => {
        const data = response.data.data[0];
        return await ArticleModel.getOne(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
