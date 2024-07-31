const mainRouter = require("express").Router();
const { AuthRoutes } = require("./modules/auth/routes");
const { CategoryRoutes } = require("./modules/category/routes");
const { OptionRoutes } = require("./modules/option/routes");
const { UserRoutes } = require("./modules/user/router");

mainRouter.use("/auth", AuthRoutes);
mainRouter.use("/user", UserRoutes);
mainRouter.use("/category", CategoryRoutes);
mainRouter.use("/option", OptionRoutes);

mainRouter.get("/", (req, res) => {
  res.render("./pages/index.ejs");
});

module.exports = mainRouter;
