export default new (class AuthorModel {
  static API_URL;

  constructor() {
    this.API_URL = process.env.REACT_APP_API_URL;
  }

  async getOne(data) {
    const model = {};

    model.id = data.id || 0;
    model.firstname = data.attributes.firstname || "";
    model.lastname = data.attributes.lastname || "";

    return model;
  }
})();
