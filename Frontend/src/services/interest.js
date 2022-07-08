import http from "./http-common";
import qs from "qs";
import InterestModel from "../models/interest";

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
      .then(async (response) => {
        const data = response.data.data;
        return await Promise.all(
          data.map((interest) => InterestModel.getOne(interest))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Get interest by id
  async getInterestById(id) {
    return await http
      .get("/interests/" + id)
      .then(async (response) => {
        const data = response.data.data[0];
        return await InterestModel.getOne(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
})();
