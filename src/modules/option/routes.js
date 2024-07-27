const router = require("express").Router();
const OptionController = require("./controller");
router.post("/", OptionController.create);
router.get("/", OptionController.getAll);
router.get("/by-category/:categoryId", OptionController.getByCategory);
router.get("/:optionId", OptionController.getById);
module.exports = {
  OptionRoutes: router,
};
