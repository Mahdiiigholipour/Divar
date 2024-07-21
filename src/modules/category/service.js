const autoBind = require("auto-bind");
const CategoryModel = require("./model");

class CategoryService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = CategoryModel;
  }

  async createCategory() {}
  async getCategories() {}
}

module.exports = new CategoryService();
