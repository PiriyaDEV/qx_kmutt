import http from "./http-common";
import qs from "qs";
import TagModel from "../models/tag";

// Tag APIs
export default new (class TagService {
  // Get all tags
  async getTags(pageSize) {
    const query = qs.stringify(
      {
        fields: ["name"],
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
      .then(async (response) => {
        const data = response.data.data;
        return await Promise.all(
          data.map((tag) => TagModel.getOne(tag))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Get tag by id
  async getTagById(id) {
    return await http
      .get("/tags/" + id)
      .then(async (response) => {
        const data = response.data.data[0];
        return await TagModel.getOne(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
