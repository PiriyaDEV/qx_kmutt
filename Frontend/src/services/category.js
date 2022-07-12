import http from "./http-common";
import qs from "qs";

// Category APIs
export default new (class CategoryService {
  // Get all categories
  async getCategories(pageSize) {
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
      .get("/categories?" + query)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Get category by id
  async getCategoryById(id) {
    return await http
      .get("/categories/" + id)
      .then((response) => {
        return response.data.data[0];
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
