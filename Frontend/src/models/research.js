import CategoryModel from "./category";
import TagModel from "./tag";
import AuthorModel from "./author";

export default new (class ResearchModel {
  static API_URL;

  constructor() {
    this.API_URL = process.env.REACT_APP_API_URL;
  }

  async getMany(data) {
    const model = {};

    model.id = data.id || 0;
    model.slug = data.attributes.slug || "";
    model.title = data.attributes.title || "";
    model.description = data.attributes.description || "";
    model.cover_url =
      this.API_URL + data.attributes.cover.data.attributes.url || "";
    model.categories =
      (await Promise.all(
        data.attributes.categories.data.map((category) =>
          CategoryModel.getOne(category)
        )
      )) || [];

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
      this.API_URL + data.attributes.cover.data.attributes.url || "";
    model.research_database_url = data.attributes.research_database_url || "";
    model.categories =
      (await Promise.all(
        data.attributes.categories.data.map((category) =>
          CategoryModel.getOne(category)
        )
      )) || [];
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
