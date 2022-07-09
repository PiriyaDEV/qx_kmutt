import InterestModel from "./interest";

export default new (class MemberModel {
  static API_URL = process.env.REACT_APP_API_URL;

  async getMany(data) {
    const model = {};

    model.id = data.id || 0;
    model.slug = data.attributes.slug || "";
    model.firstname = data.attributes.firstname || "";
    model.lastname = data.attributes.lastname || "";
    model.email = data.attributes.email || "";
    model.profile_url = data.attributes.profile_url || "";
    model.profile_pic =
      MemberModel.API_URL + data.attributes.profile_pic.data.attributes.url ||
      "";
    model.role = data.attributes.role || "";
    model.is_head_of_research_center =
      !!data.attributes.is_head_of_research_center;
    model.interests =
      (await Promise.all(
        data.attributes.interests.data.map((interest) =>
          InterestModel.getOne(interest)
        )
      )) || [];

    return model;
  }

  async getOne(data) {
    const model = {};

    model.id = data.id || 0;
    model.slug = data.attributes.slug || "";
    model.firstname = data.attributes.firstname || "";
    model.lastname = data.attributes.lastname || "";
    model.email = data.attributes.email || "";
    model.profile_url = data.attributes.profile_url || "";
    model.profile_pic =
      MemberModel.API_URL + data.attributes.profile_pic.data.attributes.url ||
      "";
    model.role = data.attributes.role || "";
    model.is_head_of_research_center =
      !!data.attributes.is_head_of_research_center;
    model.interests =
      (await Promise.all(
        data.attributes.interests.data.map((interests) =>
          InterestModel.getMany(interests)
        )
      )) || [];

    return model;
  }
})();
