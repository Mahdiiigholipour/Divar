const mainRouter = require("express").Router();
const { AuthRoutes } = require("./modules/auth/routes");
const { CategoryRoutes } = require("./modules/category/routes");
const { UserRoutes } = require("./modules/user/router");

mainRouter.use("/auth", AuthRoutes);
mainRouter.use("/user", UserRoutes);
mainRouter.use("/category", CategoryRoutes);

module.exports = mainRouter;
