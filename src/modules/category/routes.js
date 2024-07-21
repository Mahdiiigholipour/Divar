const router = require("express").Router();
const CategoryController = require("./controller");
router.post("/create", CategoryController.createCategory);

module.exports = {
  CategoryRoutes: router,
};
