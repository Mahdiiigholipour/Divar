const autoBind = require("auto-bind");
const OptionModel = require("./model");
const CategoryModel = require("./../category/model");
const createHttpError = require("http-errors");
const OptionMessages = require("./messages");
const { default: slugify } = require("slugify");

class OptionService {
  #model;
  #categoryModel;
  constructor() {
    autoBind(this);
    this.#model = OptionModel;
    this.#categoryModel = CategoryModel;
  }

  async create(optionDto) {
    const category = await this.#checkExistCategory(optionDto?.category);
    optionDto.category = category._id;

    optionDto.key = slugify(optionDto?.key, {
      trim: true,
      replacement: "_",
      lower: true,
    });

    await this.#checkKeyConflict(optionDto.key, optionDto.category);

    optionDto.enum = await this.#enumProcesses(optionDto.enum);

    const option = await this.#model.create(optionDto);
    return option;
  }
  async getAll() {
    const options = await this.#model
      .find({}, { __v: 0 }, { sort: { _id: -1 } })
      .populate([{ path: "category", select: { name: 1, slug: 1 } }]);

    return options;
  }

  async getById(id) {
    const option = await this.#model
      .findById(id, { __v: 0 })
      .populate([{ path: "category", select: { name: 1, slug: 1 } }]);
    if (!option) throw new createHttpError.NotFound(OptionMessages.notFound);
    return option;
  }

  async getByCategory(category) {
    return await this.#model.find({ category }, { __v: 0 });
  }

  //private functions

  // create method functions
  async #checkExistCategory(categoryId) {
    const category = await this.#categoryModel.findById(categoryId);
    if (!category)
      throw new createHttpError.NotFound(OptionMessages.categoryNotFound);
    return category;
  }

  async #enumProcesses(enumList) {
    if (enumList) {
      if (typeof enumList === "string") enumList = enumList.split(",");
      else if (!Array.isArray(enumList)) enumList = [];

      return enumList;
    }
  }

  async #checkKeyConflict(key, category) {
    const option = await this.#model.findOne({ category, key });
    if (option) throw new createHttpError.Conflict(OptionMessages.keyConflict);
    return null;
  }
}

module.exports = new OptionService();
