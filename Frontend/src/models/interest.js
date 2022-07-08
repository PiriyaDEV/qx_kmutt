export default new (class InterestModel {
  static API_URL;

  constructor() {
    this.API_URL = process.env.REACT_APP_API_URL;
  }

  async getOne(data) {
    const model = {};

    model.id = data.id || 0;
    model.name = data.attributes.name || "";

    return model;
  }
})();
