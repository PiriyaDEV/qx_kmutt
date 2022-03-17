import http from "./http-common";

// Research APIs
export default new (class ResearchService {
  // Get all researches
  async getResearches() {
    return await http
      .get("/all-research?populate=*")
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error)
      });
  }

  // Get research by research id
  async getResearchById(id) {
    return await http
      .get("/all-research/" + id + "?populate=*")
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error)
      });
  }
})();