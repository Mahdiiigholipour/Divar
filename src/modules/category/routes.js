const router = require("express").Router();
const CategoryController = require("./controller");
router.post("/", CategoryController.createCategory);
router.get("/", CategoryController.getCategory);
router.delete("/:categoryId", CategoryController.remove);

module.exports = {
  CategoryRoutes: router,
};
