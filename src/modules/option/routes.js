const router = require("express").Router();
const OptionController = require("./controller");
router.post("/", OptionController.create);
router.get("/", OptionController.getAll);
router.get("/by-category/:categoryId", OptionController.getByCategory);
router.get("/by-category-slug/:categorySlug", OptionController.getByCategorySlug);
router.get("/:optionId", OptionController.getById);
module.exports = {
  OptionRoutes: router,
};
