const autoBind = require("auto-bind");
const CategoryService = require("./service");
const CategoryMessages = require("./messages");

class CategoryController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = CategoryService;
  }

  async createCategory(req, res, next) {
    try {
      const { name, slug, icon, parent } = req.body;
      const categoryDto = { name, slug, icon, parent };
      await this.#service.createCategory(categoryDto);
      return res.status(201).json({
        message: CategoryMessages.created,
      });
    } catch (error) {
      next(error);
    }
  }
  async getCategory(req, res, next) {
    try {
      const categories = await this.#service.getCategories();
      return res.json(categories);
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
      const { categoryId } = req.params;
      await this.#service.remove(categoryId);
      return res.json({ messages: CategoryMessages.deleted });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CategoryController();
