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
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
  async getByCategory(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new OptionService();
