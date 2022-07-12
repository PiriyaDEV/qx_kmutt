import http from "./http-common";
import qs from "qs";

// Interest APIs
export default new (class InterestService {
  // Get all interests
  async getInterests(pageSize) {
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
      .get("/interests?" + query)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Get interest by id
  async getInterestById(id) {
    return await http
      .get("/interests/" + id)
      .then((response) => {
        return response.data.data[0];
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
