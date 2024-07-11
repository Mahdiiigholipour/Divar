const mainRouter = require("express").Router();
const { AuthRoutes } = require("./modules/auth/routes");

mainRouter.use("/auth", AuthRoutes);

module.exports = mainRouter;
