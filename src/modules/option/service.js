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
