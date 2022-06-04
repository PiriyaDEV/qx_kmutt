import http from "./http-common";
import qs from "qs";

// Tag APIs
export default new (class TagService {
  // Get all tags
  async getTags(pageSize = 5) {
    const query = qs.stringify(
      {
        fields: ["tag_name"],
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
      .get("/tags?" + query)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Get tag by id
  async getTagById(id) {
    return await http
      .get("/tags/" + id)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
