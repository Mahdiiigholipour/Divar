const autoBind = require("auto-bind");
const OptionService = require("./service");
const OptionMessages = require("./messages");
class OptionController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = OptionService;
  }

  async create(req, res, next) {
    try {
      const { title, key, type, enum: list, guid, category } = req.body;
      const optionDto = { title, key, type, enum: list, guid, category };

      await this.#service.create(optionDto);

      return res.status(201).json({ message: OptionMessages.created });
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const options = await this.#service.getAll();
      return res.json(options);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      const { optionId } = req.params;
      const option = await this.#service.getById(optionId);
      return res.json(option);
    } catch (error) {
      next(error);
    }
  }
  async getByCategory(req, res, next) {
    try {
      const { categoryId } = req.params;
      const options = await this.#service.getByCategory(categoryId);
      return res.json(options);
    } catch (error) {
      next(error);
    }
  }
  async getByCategorySlug(req, res, next) {
    try {
      const { categorySlug } = req.params;
      const options = await this.#service.getByCategorySlug(categorySlug);
      return res.json(options);
    } catch (error) {
      next(error);
    }
  }
  async remove(req, res, next) {
    const { optionId } = req.params;
    await this.#service.remove(optionId);
    return res.json({
      message: OptionMessages.deleted,
    });
  }
}

module.exports = new OptionController();
