const autoBind = require("auto-bind");
const CategoryModel = require("./model");
const createHttpError = require("http-errors");
const CategoryMessages = require("./messages");
const { isValidObjectId, Types } = require("mongoose");
const { default: slugify } = require("slugify");

class CategoryService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = CategoryModel;
  }

  async createCategory(categoryDto) {
    categoryDto.parents = await this.#parentProcesses(categoryDto?.parent);
    categoryDto.slug = await this.#slugProcesses(categoryDto?.slug);

    const category = await this.#model.create(categoryDto);
    return category;
  }
  async getCategories() {}

  //private functions

  async #checkExistById(id) {
    const category = await this.#model.findById(id);
    if (!category)
      throw new createHttpError.NotFound(CategoryMessages.notFound);
    return category;
  }

  //createCategory functions
  async #parentProcesses(parent) {
    if (!parent || !isValidObjectId(parent))
      throw new createHttpError.BadRequest(CategoryMessages.parentIdProblem);

    const parentCategory = await this.#checkExistById(parent);
    const parents = [
      ...new Set(
        [parentCategory._id.toString()]
          .concat(parentCategory?.parents.map((id) => id.toString()))
          .map((id) => new Types.ObjectId(id))
      ),
    ];

    return parents;
  }
  async #slugProcesses(slug) {
    if (!slug) throw new createHttpError.BadRequest(CategoryMessages.emptySlug);

    slug = slugify(slug);
    await this.#alreadyExistSlug(slug);
    return slug;
  }
  async #alreadyExistSlug(slug) {
    const category = await this.#model.findOne({ slug });
    if (category)
      throw new createHttpError.Conflict(CategoryMessages.existSlug);
    return false;
  }
}

module.exports = new CategoryService();
