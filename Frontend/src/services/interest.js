import http from "./http-common";
import qs from "qs";

// Interest APIs
export default new (class InterestService {
  // Get all interests
  async getInterests(pageSize) {
    return [
      {
        id: 1,
        attributes: {
          name: "Quantum Programming",
        },
      },
      {
        id: 2,
        attributes: {
          name: "Benchmark",
        },
      },
      {
        id: 3,
        attributes: {
          name: "QML",
        },
      },
      {
        id: 4,
        attributes: {
          name: "Quantum Computing",
        },
      },
      {
        id: 5,
        attributes: {
          name: "Quantum Encryption",
        },
      },
      {
        id: 6,
        attributes: {
          name: "Quantum Teleportation",
        },
      },
      {
        id: 7,
        attributes: {
          name: "Quantum Inequalities",
        },
      },
      {
        id: 8,
        attributes: {
          name: "Quantum Sensing",
        },
      },
      {
        id: 9,
        attributes: {
          name: "Quantum Communication",
        },
      },
      {
        id: 10,
        attributes: {
          name: "Quantum Materials",
        },
      },
      {
        id: 11,
        attributes: {
          name: "Quantum Cryptography",
        },
      },
      {
        id: 12,
        attributes: {
          name: "Quantum Optics",
        },
      },
      {
        id: 13,
        attributes: {
          name: "Nanomechanics",
        },
      },
      {
        id: 14,
        attributes: {
          name: "Topological Physics",
        },
      },
      {
        id: 15,
        attributes: {
          name: "Device Physics",
        },
      },
      {
        id: 16,
        attributes: {
          name: "High Energy & Particle Physics",
        },
      },
      {
        id: 17,
        attributes: {
          name: "Optical Physics",
        },
      },
      {
        id: 18,
        attributes: {
          name: "Condensed Matter Physics",
        },
      },
      {
        id: 19,
        attributes: {
          name: "Molecular Physics",
        },
      },
      {
        id: 20,
        attributes: {
          name: "Atomic Physics",
        },
      },
      {
        id: 21,
        attributes: {
          name: "Quantum Chemistry",
        },
      },
    ];
    // const query = qs.stringify(
    //   {
    //     fields: ["name"],
    //     pagination: {
    //       page: 1,
    //       pageSize: pageSize,
    //     },
    //   },
    //   {
    //     encodeValuesOnly: true,
    //   }
    // );

    // return await http
    //   .get("/interests?" + query)
    //   .then((response) => {
    //     return response.data.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  // Get interest by id
  async getInterestById(id) {
    return {
      id: 1,
      attributes: {
        name: "Quantum Programming",
        createdAt: "2022-06-26T12:25:23.827Z",
        updatedAt: "2022-06-26T12:25:29.876Z",
        publishedAt: "2022-06-26T12:25:29.873Z",
      },
    };
    // return await http
    //   .get("/interests/" + id)
    //   .then((response) => {
    //     return response.data.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
})();
