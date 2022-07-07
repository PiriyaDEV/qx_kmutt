import http from "./http-common";
import qs from "qs";

// Category APIs
export default new (class CategoryService {
  // Get all categories
  async getCategories(pageSize) {
    // return [
    //   {
    //     id: 1,
    //     attributes: {
    //       name: "QML",
    //     },
    //   },
    //   {
    //     id: 2,
    //     attributes: {
    //       name: "QuantumProgramming",
    //     },
    //   },
    //   {
    //     id: 3,
    //     attributes: {
    //       name: "Benmark",
    //     },
    //   },
    //   {
    //     id: 4,
    //     attributes: {
    //       name: "QuantumCircuitEditor",
    //     },
    //   },
    //   {
    //     id: 5,
    //     attributes: {
    //       name: "Journal",
    //     },
    //   },
    // ];
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
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Get category by id
  async getCategoryById(id) {
    // return {
    //   "id": 1,
    //   "attributes": {
    //     "name": "QML",
    //     "createdAt": "2022-06-26T12:39:18.614Z",
    //     "updatedAt": "2022-06-26T12:39:19.129Z",
    //     "publishedAt": "2022-06-26T12:39:19.125Z"
    //   }
    // }
    return await http
      .get("/categories/" + id)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
