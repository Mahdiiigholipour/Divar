const router = require("express").Router();
const CategoryController = require("./controller");
router.post("/", CategoryController.createCategory);
router.get("/", CategoryController.getCategory);

module.exports = {
  CategoryRoutes: router,
};
