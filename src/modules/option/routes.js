const router = require("express").Router();
const OptionController = require("./controller");
router.post("/", OptionController.create);
router.get("/", OptionController.getAll);
router.get("/by-category/:categoryId", OptionController.getByCategory);
router.get(
  "/by-category-slug/:categorySlug",
  OptionController.getByCategorySlug
);
router.get("/:optionId", OptionController.getById);
router.put("/:optionId", OptionController.update);
router.delete("/:optionId", OptionController.remove);
module.exports = {
  OptionRoutes: router,
};
