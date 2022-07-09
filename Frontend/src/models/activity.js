import TagModel from "./tag";
import AuthorModel from "./author";
import Datetime from "../utilities/datetime";

export default new (class ActivityModel {
  static API_URL = process.env.REACT_APP_API_URL;

  async getMany(data) {
    const model = {};

    model.id = data.id || 0;
    model.slug = data.attributes.slug || "";
    model.title = data.attributes.title || "";
    model.description = data.attributes.description || "";
    model.cover_url =
      ActivityModel.API_URL + data.attributes.cover.data.attributes.url || "";
    model.location_name = data.attributes.location_name || "";
    model.location_url = data.attributes.location_url || "";
    model.start_date = Datetime.formatDate(data.attributes.start_date) || "";

    return model;
  }

  async getOne(data) {
    const model = {};

    model.id = data.id || 0;
    model.slug = data.attributes.slug || "";
    model.title = data.attributes.title || "";
    model.description = data.attributes.description || "";
    model.content = data.attributes.content;
    model.cover_url =
      ActivityModel.API_URL + data.attributes.cover.data.attributes.url || "";
    model.location_name = data.attributes.location_name || "";
    model.location_url = data.attributes.location_url || "";
    model.start_date = Datetime.formatDate(data.attributes.start_date) || "";
    model.tags =
      (await Promise.all(
        data.attributes.tags.data.map((tag) => TagModel.getOne(tag))
      )) || [];
    model.authors =
      (await Promise.all(
        data.attributes.authors.data.map((author) => AuthorModel.getOne(author))
      )) || [];

    return model;
  }
})();
