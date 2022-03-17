import http from "./http-common";

// Article APIs
export default new (class ArticleService {
  // Get all articles
  async getArticles() {
    return await http
      .get("/articles?populate=*")
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error)
      });
  }

  // Get article by article id
  async getArticleById(id) {
    return await http
      .get("/articles/" + id + "?populate=*")
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error)
      });
  }
})();