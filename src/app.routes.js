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
  res.locals.layout = "./layouts/website/main.ejs";
  res.render("./pages/home/index.ejs");
});
mainRouter.get("/panel", (req, res) => {
  res.render("./pages/panel/dashboard.ejs");
});
mainRouter.get("/auth/login", (req, res) => {
  res.locals.layout = "./layouts/auth/main.ejs";

  res.render("./pages/auth/login.ejs");
});

module.exports = mainRouter;
