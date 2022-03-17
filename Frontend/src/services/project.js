import http from "./http-common";

// Project APIs
export default new (class ProjectService {
  // Get all projects
  async getProjects() {
    return await http
      .get("/projects?populate=*")
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error)
      });
  }

  // Get project by project id
  async getProjectById(id) {
    return await http
      .get("/projects/" + id + "?populate=*")
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error)
      });
  }
})();