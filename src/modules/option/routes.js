const router = require("express").Router();

router.post("/");
router.get("/");
router.get("/:categoryId");
router.get("/:OptionId");
module.exports = {
  OptionRoutes: router,
};
