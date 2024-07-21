const router = require("express").Router();
const CategoryController = require("./controller");
router.post("/", CategoryController.createCategory);

module.exports = {
  CategoryRoutes: router,
};
