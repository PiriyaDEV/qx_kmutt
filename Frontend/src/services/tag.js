import http from "./http-common";
import qs from "qs";

// Tag APIs
export default new (class TagService {
  // Get all tags
  async getTags(pageSize) {
    // return [
    //   {
    //     id: 1,
    //     attributes: {
    //       name: "QuantumComputing",
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
    //       name: "QuantumXX",
    //     },
    //   },
    //   {
    //     id: 4,
    //     attributes: {
    //       name: "SeniorProject",
    //     },
    //   },
    //   {
    //     id: 5,
    //     attributes: {
    //       name: "Quantum101",
    //     },
    //   },
    //   {
    //     id: 6,
    //     attributes: {
    //       name: "Quantum102",
    //     },
    //   },
    //   {
    //     id: 7,
    //     attributes: {
    //       name: "QXEvent",
    //     },
    //   },
    //   {
    //     id: 8,
    //     attributes: {
    //       name: "QML",
    //     },
    //   },
    //   {
    //     id: 9,
    //     attributes: {
    //       name: "TangibleLearningMaterial",
    //     },
    //   },
    //   {
    //     id: 10,
    //     attributes: {
    //       name: "LearningQuantum",
    //     },
    //   },
    //   {
    //     id: 11,
    //     attributes: {
    //       name: "QuantumCircuitEditor",
    //     },
    //   },
    //   {
    //     id: 12,
    //     attributes: {
    //       name: "Qiskit",
    //     },
    //   },
    //   {
    //     id: 13,
    //     attributes: {
    //       name: "QuantumIDE",
    //     },
    //   },
    //   {
    //     id: 14,
    //     attributes: {
    //       name: "EducationalProgram",
    //     },
    //   },
    //   {
    //     id: 15,
    //     attributes: {
    //       name: "LearningAndTeachingProgram",
    //     },
    //   },
    //   {
    //     id: 16,
    //     attributes: {
    //       name: "InteractiveLearning",
    //     },
    //   },
    //   {
    //     id: 17,
    //     attributes: {
    //       name: "QuantumLearning",
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
    // return {
    //   "id": 1,
    //   "attributes": {
    //     "name": "QuantumComputing",
    //     "createdAt": "2022-06-26T12:42:17.161Z",
    //     "updatedAt": "2022-06-26T12:42:17.786Z",
    //     "publishedAt": "2022-06-26T12:42:17.784Z"
    //   }
    // }
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
