const autoBind = require("auto-bind");
const CategoryModel = require("./model");
const OptionModel = require("../option/model");
const createHttpError = require("http-errors");
const CategoryMessages = require("./messages");
const { isValidObjectId, Types } = require("mongoose");
const { default: slugify } = require("slugify");

class CategoryService {
  #model;
  #optionModel;
  constructor() {
    autoBind(this);
    this.#model = CategoryModel;
    this.#optionModel = OptionModel;
  }

  async createCategory(categoryDto) {
    categoryDto.parents =
      (await this.#parentProcesses(categoryDto?.parent)) ?? [];
    categoryDto.slug = await this.#slugProcesses(categoryDto?.slug);

    const category = await this.#model.create(categoryDto);
    return category;
  }
  async getCategories() {
    return await this.#model.find({ parent: { $exists: false } });
  }
  async remove(id) {
    await this.#checkExistById(id);
    await this.#optionModel.deleteMany({ category: id }).then(async () => {
      await this.#model.deleteOne({ _id: id });
    });
  }

  //private functions

  async #checkExistById(id) {
    const category = await this.#model.findById(id);
    if (!category)
      throw new createHttpError.NotFound(CategoryMessages.notFound);
    return category;
  }

  //createCategory functions
  async #parentProcesses(parent) {
    if (parent) {
      if (isValidObjectId(parent)) {
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
      throw new createHttpError.BadRequest(CategoryMessages.invalidParent);
    }
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
