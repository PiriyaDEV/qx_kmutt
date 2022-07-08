import http from "./http-common";
import qs from "qs";
import CategoryModel from "../models/category";

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
      .then(async (response) => {
        const data = response.data.data;
        return await Promise.all(
          data.map((category) => CategoryModel.getOne(category))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Get category by id
  async getCategoryById(id) {
    return await http
      .get("/categories/" + id)
      .then(async (response) => {
        const data = response.data.data[0];
        return await CategoryModel.getOne(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
