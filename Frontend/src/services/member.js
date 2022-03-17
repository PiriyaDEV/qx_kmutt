import http from "./http-common";

// Member APIs
export default new (class MemberService {
  // Get all members
  async getMembers() {
    return await http
      .get("/members?populate=*")
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error)
      });
  }

  // Get member by member id
  async getMemberById(id) {
    return await http
      .get("/members/" + id + "?populate=*")
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error)
      });
  }
})();