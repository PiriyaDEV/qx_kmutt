import http from "./http-common";

// Tag APIs
export default new (class TagService {
  // Get all tags
  async getTags() {
    return await http
      .get("/tags?populate=*")
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error)
      });
  }

  // Get tag by tag id
  async getTagById(id) {
    return await http
      .get("/tags/" + id + "?populate=*")
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error)
      });
  }
})();